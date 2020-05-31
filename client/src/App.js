import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Main />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
