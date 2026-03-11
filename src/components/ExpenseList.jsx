// expense-tracker/src/components/ExpenseList.jsx

import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No expenses yet. Start by adding your first expense.
        </p>
      ) : (
        <div className="space-y-2">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;