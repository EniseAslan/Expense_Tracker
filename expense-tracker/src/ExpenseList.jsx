import ExpenseItem from "./ExpenseItem"
function ExpenseList({ entries, onDelete}) {
  return (
    <div>
      {entries.map((entry) => (
        <ExpenseItem key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ExpenseList
