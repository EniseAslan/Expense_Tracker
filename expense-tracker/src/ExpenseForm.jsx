import { useState } from "react"

function ExpenseForm({ form, onChange, onAdd }) {
  const [error, setError] = useState("")

  function handleSubmit() {
    const description = form.description.trim()
    const category = form.category.trim()
    const amount = Number(form.amount)

    if (!description) {
      setError("Açıklama boş olamaz.")
      return
    }
    if (form.amount === "" || !Number.isFinite(amount) || amount <= 0) {
      setError("Tutar 0'dan büyük bir sayı olmalı.")
      return
    }
    if (!category) {
      setError("Kategori boş olamaz.")
      return
    }

    setError("")
    onAdd({ ...form, description, category, amount })
    onChange({ description: "", amount: "", type: "income", category: "" })
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <input
        type="text"
        placeholder="Açıklama"
        value={form.description}
        onChange={(e) => onChange({ ...form, description: e.target.value })}
        className="border border-gray-400 rounded px-2 py-1"
      />
      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Tutar"
        value={form.amount}
        onChange={(e) => onChange({ ...form, amount: e.target.value })}
        className="border border-gray-400 rounded px-2 py-1"
      />
      <select
        value={form.type}
        onChange={(e) => onChange({ ...form, type: e.target.value })}
        className="border border-gray-400 rounded px-2 py-1"
      >
        <option value="income">Gelir</option>
        <option value="expense">Gider</option>
      </select>
      <input
        type="text"
        placeholder="Kategori"
        value={form.category}
        onChange={(e) => onChange({ ...form, category: e.target.value })}
        className="border border-gray-400 rounded px-2 py-1"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-1 rounded">
        Ekle
      </button>
      {error && <p className="w-full text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default ExpenseForm