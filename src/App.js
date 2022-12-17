import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Cat Food", amount: 80, date: new Date(2022, 12, 15) },
  {
    id: "e2",
    title: "Toiletpaper",
    amount: 12,
    date: new Date(2022, 12, 15),
  },
  { id: "e3", title: "Shoes", amount: 125, date: new Date(2022, 12, 15) },
  {
    id: "e4",
    title: "Wife Clothes",
    amount: 99,
    date: new Date(2023, 12, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
