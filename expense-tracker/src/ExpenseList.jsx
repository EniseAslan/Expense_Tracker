import ExpenseItem from "./ExpenseItem"
function ExpenseList({ entries }) {
  return (
    <div>
      {entries.map((entry) => (
        <ExpenseItem key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default ExpenseList
