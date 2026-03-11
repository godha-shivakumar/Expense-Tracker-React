/* expense-tracker/src/App.js */

import React, { useState, useEffect } from "react"; 
import ExpenseForm from "./components/ExpenseForm"; 
import ExpenseList from "./components/ExpenseList"; 
import SummaryPanel from "./components/SummaryPanel"; 
import CurrencyConverter from "./components/CurrencyConverter"; 

function App() {
  // Load expenses from localStorage on initial render
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Add new expense to state and save to localStorage
  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  // Delete an expense and update localStorage
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  // Calculate the total amount of all expenses
  const totalAmount = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-8">
      <div className="w-full max-w-4xl space-y-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600">
          💰 Expense Tracker
        </h1>

        {/* Top Section */}
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

        {/* Expense List */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm">
          Built with React • Expense Tracker Assignment
        </p>

      </div>
    </div>
  );
}

export default App;