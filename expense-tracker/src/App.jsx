import { useState } from 'react'

import './App.css'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'

function App() {
 const [entries ,setEntries]=useState([
    { id: 1, description: "Maaş", amount: 15000, type: "income", category: "Salary" },
  { id: 2, description: "Market", amount: 1000, type: "expense", category: "Food" },
  { id: 3, description: "Kira", amount: 6000, type: "expense", category: "Housing" },
  {id: 4, description:"Doğal gaz", amount:900, type:"expense", category: "Bill"},
 ])

 const [filter,setFilter]=useState("all")

 const filterEntries=entries.filter((entry)=>{
  if(filter==="income") return entry.type ==="income"
  if(filter==="expense") return entry.type === "expense"
  return true
 })

 const [form, setForm] = useState({ description: "", amount: "", type: "income", category: "" })
function handleAdd(entry) {
  setEntries((prev) => [...prev, { id: Date.now(), ...entry, amount: Number(entry.amount) }])
}

function handleDelete(id){
  setEntries((prev)=>prev.filter((entry)=>entry.id !==id));
}

const income = entries
  .filter((entry) => entry.type === "income")
  .reduce((sum, entry) => sum + entry.amount, 0)

const expense = entries
  .filter((entry) => entry.type === "expense")
  .reduce((sum, entry) => sum + entry.amount, 0)

const balance = income - expense

  return (
  <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>

      <ExpenseForm form={form} onChange={setForm} onAdd={handleAdd} />

      <div className="flex gap-4 my-4 bg-white p-4 rounded shadow">
        <p>Gelir: {income}</p>
        <p>Gider: {expense}</p>
        <p>Bakiye: {balance}</p>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")} className="px-3 py-1 rounded bg-gray-200">Tümü</button>
        <button onClick={() => setFilter("income")} className="px-3 py-1 rounded bg-gray-200">Gelir</button>
        <button onClick={() => setFilter("expense")} className="px-3 py-1 rounded bg-gray-200">Gider</button>
      </div>

      <ExpenseList entries={filterEntries} onDelete={handleDelete} />
    </div>
  </div>
)
}

export default App
