import { useEffect, useState } from "react";

import "./App.css";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import { formatCurrency, loadEntries, STORAGE_KEY } from "./utils";

function App() {
  const [entries, setEntries] = useState(loadEntries);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({
    description: "",
    amount: "",
    type: "income",
    category: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const filterEntries = entries.filter((entry) => {
    if (filter === "income") return entry.type === "income";
    if (filter === "expense") return entry.type === "expense";
    return true;
  });

  function handleAdd(entry) {
    setEntries((prev) => [
      ...prev,
      { id: Date.now(), ...entry, amount: Number(entry.amount) },
    ]);
    setForm({ description: "", amount: "", type: "income", category: "" });
  }

  function handleDelete(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  function handleEdit(entry) {
    setEditingId(entry.id);
    setForm({
      description: entry.description,
      amount: String(entry.amount),
      type: entry.type,
      category: entry.category,
    });
  }

  function handleUpdate(entry) {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === editingId
          ? { ...e, ...entry, amount: Number(entry.amount) }
          : e,
      ),
    );
    handleCancel();
  }

  function handleCancel() {
    setEditingId(null);
    setForm({ description: "", amount: "", type: "income", category: "" });
  }

  const income = entries
    .filter((entry) => entry.type === "income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const expense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const balance = income - expense;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>

        <ExpenseForm
          key={editingId ?? "new"}
          form={form}
          onChange={setForm}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
          editingId={editingId}
        />

        <div className="flex gap-4 my-4 bg-white p-4 rounded shadow">
          <p className="font-medium text-green-600">
            Gelir: {formatCurrency(income)}
          </p>
          <p className="font-medium text-red-600">
            Gider: {formatCurrency(expense)}
          </p>
          <p
            className={`font-bold ${
              balance >= 0 ? "text-green-700" : "text-red-700"
            }`}
          >
            Bakiye: {formatCurrency(balance)}
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Tümü
          </button>
          <button
            onClick={() => setFilter("income")}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Gelir
          </button>
          <button
            onClick={() => setFilter("expense")}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Gider
          </button>
        </div>

        <ExpenseList
          entries={filterEntries}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
