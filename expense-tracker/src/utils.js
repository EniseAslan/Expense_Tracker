const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
})

export const formatCurrency = (amount) => currencyFormatter.format(amount)


export const STORAGE_KEY = "expense-tracker-entries"

export const initialEntries = [
  { id: 1, description: "Maaş", amount: 15000, type: "income", category: "Salary" },
  { id: 2, description: "Market", amount: 1000, type: "expense", category: "Food" },
  { id: 3, description: "Kira", amount: 6000, type: "expense", category: "Housing" },
  { id: 4, description: "Doğal gaz", amount: 900, type: "expense", category: "Bill" },
]

export const loadEntries = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialEntries
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return initialEntries
    return parsed
  } catch {
    return initialEntries
  }
}