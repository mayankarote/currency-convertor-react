import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=ae687192fbfa7959f17c362e52fb1d29&format=1";

function App() {
  const [CurrencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <div className="app">
      <>
        <h1>Convertor</h1>
        <CurrencyRow />
        <div className="equals">=</div>
        <CurrencyRow />
      </>
    </div>
  );
}

export default App;
