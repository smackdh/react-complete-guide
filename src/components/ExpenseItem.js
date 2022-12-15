import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>December 15 2022</div>
      <div className="expense-item__description">
        <h2>Cat Food</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
