// expense-tracker/src/components/SummaryPanel.jsx

import React from "react";

function SummaryPanel({ total }) {
  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-gray-600">Total Spending</p>

        <p className="text-3xl font-bold text-blue-600">
          ${total}
        </p>
      </div>

    </div>
  );
}

export default SummaryPanel;