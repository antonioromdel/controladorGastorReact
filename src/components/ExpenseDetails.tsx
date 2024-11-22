import { useMemo } from "react"
import { formartDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailsProps = {
    expense: Expense
}

export default function ExpenseDetails({expense}: ExpenseDetailsProps) {

    const {dispatch} = useBudget()

    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

  return (
    <>

        <section className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
            <div>
                <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono gasto" className="w-20"/>
            </div>

            <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                <p>{expense.expenseName}</p>
                <p className="text-slate-600 text-sm">{formartDate(expense.date!.toString())}</p>
            </div>

            <AmountDisplay 
                amount={expense.amount}
            />

            <div className="flex flex-col-reverse gap-5">
            <button
                className="bg-red-600 border-2 rounded-lg px-4 py-2 text-white font-bold hover:bg-red-400 transition"
                onClick={() => dispatch({type: 'remove-expense', payload: {id: expense.id}})}
            >Eliminar</button>

            <button
                className="bg-green-600 border-2 rounded-lg px-4 py-2 text-white font-bold hover:bg-green-400 transition"
                onClick={() => dispatch({type: 'get-expense-by-id', payload: {id: expense.id}})}
            >Editar</button>

            </div>

        </section>

    </>
  )
}
