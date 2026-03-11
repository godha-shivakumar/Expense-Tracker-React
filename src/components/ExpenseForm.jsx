// expense-tracker/src/components/ExpenseForm.jsx

import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    addExpense({
      name,
      amount,
      category
    });

    setName("");
    setAmount("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          className="w-full border rounded-lg p-2"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="w-full border rounded-lg p-2"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="w-full border rounded-lg p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
        </select>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;