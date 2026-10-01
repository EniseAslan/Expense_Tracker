
 function ExpenseItem({entry,onDelete}){
  return(
    <div>
      <p>{entry.description}</p>
      <p>{entry.amount}</p>
      <p>{entry.type}</p>
      <p>{entry.category}</p>
      <button onClick={()=>onDelete(entry.id)
      }>Sil</button>
    </div>
  )
 }


export default ExpenseItem
