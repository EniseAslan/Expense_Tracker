import { useState } from 'react'

import './App.css'
import ExpenseList from './ExpenseList'

function App() {
 const [entries ,setEntries]=useState([
    { id: 1, description: "Maaş", amount: 15000, type: "income", category: "Salary" },
  { id: 2, description: "Market", amount: 1000, type: "expense", category: "Food" },
  { id: 3, description: "Kira", amount: 6000, type: "expense", category: "Housing" },
  {id: 4, description:"Doğal gaz", amount:900, type:"expense", category: "Bill"},
 ])


  return (
    <>
    <div>
    <ExpenseList entries={entries} />
    </div>
    </>
  )
}

export default App
