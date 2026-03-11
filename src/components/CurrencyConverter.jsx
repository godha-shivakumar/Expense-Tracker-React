// expense-tracker/src/components/CurrencyConverter.jsx

import React, { useEffect, useState } from "react";

function CurrencyConverter({ total }) {
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState("INR");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?from=USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">Loading exchange rates...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">API Error</p>;

  const converted = total * (rates[currency] || 1);

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 mt-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Currency Converter</h2>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border p-2 mb-3"
      >
        {Object.keys(rates).map((cur) => (
          <option key={cur}>{cur}</option>
        ))}
      </select>

      <p>
        Converted Total: {currency} {converted.toFixed(2)}
      </p>
    </div>
  );
}

export default CurrencyConverter;