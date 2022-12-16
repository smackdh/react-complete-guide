import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
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

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
