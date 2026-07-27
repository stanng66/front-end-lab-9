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

  useEffect(() => {
    fetch("https://6a67ada2157beab892d3aba0.mockapi.io/Demo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrencies(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>Currency List</h1>
      <h2>Stanley Nguyen</h2>
      <h3>Lab 9</h3>

      {currencies.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.Code}</strong> — {item.currency}
        </div>
      ))}
    </div>
  );
}
