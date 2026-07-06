/* expense-tracker/src/App.js */
/* expense-tracker/src/App.js */
import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // sync localStorage (BEST PRACTICE)
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const totalAmount = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-8">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          💰 Expense Tracker
        </h1>

        {/* Form + Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <ExpenseForm addExpense={addExpense} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <SummaryPanel total={totalAmount} />
          </div>
        </div>

        {/* Currency */}
        <div className="bg-white p-6 rounded-xl shadow">
          <CurrencyConverter total={totalAmount} />
        </div>

        {/* List */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>

        <p className="text-center text-gray-400 text-sm">
          Built with React • Expense Tracker
        </p>
      </div>
    </div>
  );
}

export default App;
