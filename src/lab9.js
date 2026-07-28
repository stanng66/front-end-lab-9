// ====================
// Lab 9
// Stanley Nguyen (N01570766)
// Humber College
// Ronak Sheth
// August 4, 2026
// ====================
import "./lab9.css"
import { useEffect, useState } from "react";   // Use Effect will only allow you get the data once when the component will be mounted

export default function Lab9() {
  const [currencies, setCurrencies] = useState([]);
  const [errors, setErrors] = useState("");

  // Using fetch api and useEffect show the currency code, currecy name on your browser
  useEffect(() => {
    fetch("https://6a67ada2157beab892d3aba0.mockapi.io/Demo")
      .then(res => {
        if (!res.ok) throw new Error("Failed to retrieve");
        return res.json();
      })
      .then(data => setCurrencies(data))
      .catch(err => setErrors(err.message))
  }, []);

  return (
    <> 
      <div className="header">
        <h1>Currency List</h1>
        <h2>Stanley Nguyen</h2>
        <h3>Lab 9</h3>
      </div>

      <div className="currency-container">
        <p style={{ color: "red" }}>{errors}</p>

        <table className="currency-table">
          <thead>
            <tr>
              <th>Currency Code</th>
              <th>Currency Name</th>
            </tr>
          </thead>

          <tbody>
            {/* Use of map is must. */}
            {currencies.map((item) => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
