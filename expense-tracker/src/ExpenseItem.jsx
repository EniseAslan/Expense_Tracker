
 function ExpenseItem({entry}){
  return(
    <div>
      <p>{entry.description}</p>
      <p>{entry.amount}</p>
      <p>{entry.type}</p>
      <p>{entry.category}</p>
    </div>
  )
 }


export default ExpenseItem
