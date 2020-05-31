exports.book = async (req,res,next) => {
const keys = require("../keys");
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
  .query('CREATE TABLE IF NOT EXISTS bookings (name VARCHAR(50), phone INT, email VARCHAR(255),date DATE NOT NULL DEFAULT CURRENT_DATE, location VARCHAR(255), other VARCHAR(255))')
  .catch(err => console.log(err));

    const name =  req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const date = req.body.date;
    const location = req.body.location;
    const other = req.body.other;
  
    pgClient.query('INSERT INTO bookings (name, phone, email, date, location, other) VALUES ($1, $2, $3, $4, $5, $6)',[name, phone, email, date, location, other],(error,results) => {
        if(error){
            throw error
        }
        res.status(201).send({ message: "You will be contacted soon by us. Thank you for choosing us...!" })
    }
    );
};