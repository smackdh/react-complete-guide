import Expenses from "./components/Expenses";
import Card from "./components/Card";

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
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </Card>
  );
}

export default App;
