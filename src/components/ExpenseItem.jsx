// expense-tracker/src/components/ExpenseItem.jsx

import React from "react";

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="flex justify-between items-center border-b py-2">

      <div>
        <p className="font-medium">{expense.name}</p>
        <span className="text-sm text-gray-500">{expense.category}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-semibold">${expense.amount}</span>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default ExpenseItem;