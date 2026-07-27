// ====================
// Lab 9
// Stanley Nguyen (N01570766)
// Humber College
// Ronak Sheth
// August 4, 2026
// ====================
import { useEffect, useState } from "react";

export default function Lab9() {
  const [currencies, setCurrencies] = useState([]);
  const [errors, setErrors] = useState("");

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
    <div>
      <h1>Currency List</h1>
      <h2>Stanley Nguyen</h2>
      <h3>Lab 9</h3>

      <p style={{ color: "red" }}>{errors}</p>

      {currencies.map((item) => (
        <div key={item.id}>
          <p><strong>Currency Code:</strong> {item.code}</p>
          <p><strong>Currency Name:</strong> {item.currency}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
