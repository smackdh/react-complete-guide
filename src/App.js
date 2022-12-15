import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Cat Food", amount: 80, date: new Date(2022, 12, 15) },
    {
      id: "e2",
      title: "Toiletpaper",
      amount: 12,
      date: new Date(2022, 12, 15),
    },
    { id: "e3", title: "Shoes", amount: 125, date: new Date(2022, 12, 15) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
