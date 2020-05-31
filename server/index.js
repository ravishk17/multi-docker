const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));


// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/values/all', async (req, res) => {
  const values = await pgClient.query('SELECT * from values');

  res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  redisClient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

app.post('/feed/book', async (req, res) => {

  const name =  req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const location = req.body.location;
  const other = req.body.other;

  pgClient.query('INSERT INTO bookings (name, phone, email, date, location, other) VALUES ($1, $2, $3, $4, $5, $6)',[name, phone, email, date, location, other],(error,results) => {
    if(error){
        throw error
    }
    res.status(201).send({ message: "You will be contacted soon by us. Thank you for choosing us...!" })
}
);

  
});

app.listen(5000, err => {
  console.log('Listening');
});
