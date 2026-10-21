import { formatCurrency } from "./utils"

function ExpenseItem({ entry, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white p-3 rounded shadow-sm mb-2">
      <p className="flex-1">{entry.description}</p>
      <p
        className={`w-20 text-right font-medium ${
          entry.type === "income" ? "text-green-600" : "text-red-600"
        }`}
      >
        {formatCurrency(entry.amount)}
      </p>
      <p className="w-20">{entry.type === "income" ? "Gelir" : "Gider"}</p>
      <p className="w-24">{entry.category}</p>
      <button
        onClick={() => onEdit(entry)}
        className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 cursor-pointer"
      >
        Düzenle
      </button>
      <button
        onClick={() => onDelete(entry.id)}
        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 cursor-pointer"
      >
        Sil
      </button>
    </div>
  )
}

export default ExpenseItem