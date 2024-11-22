import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {
 
    const { state } = useBudget()

    const filterExpense = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    
    const isEmpty = useMemo(() => filterExpense.length === 0, [filterExpense])

  return (
    <>
      <section className="mt-10 flex flex-col gap-5">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
                    {filterExpense.map( expense => (
                        <ExpenseDetails 
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
      </section>
    </>
  )
}
