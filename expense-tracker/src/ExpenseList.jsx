import ExpenseItem from "./ExpenseItem"

function ExpenseList({ entries, onDelete, onEdit }) {
  return (
    <div>
      {entries.map((entry) => (
        <ExpenseItem
          key={entry.id}
          entry={entry}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default ExpenseList