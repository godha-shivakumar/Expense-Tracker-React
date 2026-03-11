# Expense Tracker React

A **React-based expense tracker application** that allows users to track their daily expenses with a clean, responsive, and user-friendly interface.

![Screenshot](link-to-your-screenshot.png)

---

## Features
- Add new expenses
- Delete expenses
- Category-based expense tracking
- Running total calculation
- Currency conversion using API
- Data persistence with LocalStorage
- Responsive UI using Tailwind CSS

---

## Tech Stack
- **React** – Frontend framework  
- **JavaScript** – Core programming language  
- **Tailwind CSS** – Styling and responsive design  
- **LocalStorage API** – Persistent storage  
- **Currency Conversion API** – Live currency support  

---

## Installation

Clone the repository and install dependencies:

```
git clone https://github.com/godha-shivakumar/Expense-Tracker-React.git
cd Expense-Tracker-React
npm install
npm start
```
---
### 🎯 Project Structure

```

Expense-Tracker-React/
│
├── public/                       # Public assets like index.html, logos, manifest
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                            # React source code
│   ├── components/                 # Reusable components
│   │   ├── CurrencyConverter.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseItem.js
│   │   ├── ExpenseList.js
│   │   └── SummaryPanel.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── App.test.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│ 
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License
├── README.md                     # Project documentation
├── package.json                  # NPM dependencies and scripts
├── package-lock.json
├── tailwind.config.js            # Tailwind CSS configuration
└── postcss.config.js

````
---
### ⚖️ License 
```
This project is licensed under the MIT License.
