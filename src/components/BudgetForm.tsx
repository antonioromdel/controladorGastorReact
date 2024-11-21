 
import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"


export default function BudgetForm() {

    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    // calcular y memorizar el valor de la constante isValid
    const isValid = useMemo(() => {
        return isNaN(budget) || budget < 1
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'add-budget', payload:{budget}})
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto:
                </label>
                <input 
                    id="budget"
                    type="number" 
                    className="w-full bg-white border border-gray-200 p-2" 
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={(e : React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.valueAsNumber)}
                    onFocus={(e : React.FocusEvent<HTMLInputElement, Element>) => e.target.value=""}
                    />
            </div>
            <input 
                type="submit"
                value="Definir Presupuesto"
                className="bg-blue-600 hover:bg-blue-700 transition cursor-pointer w-full p-2 rounded-lg text-white font-black uppercase disabled:opacity-40"
                disabled={isValid}
                />
        </form>
    </>
  )
}
