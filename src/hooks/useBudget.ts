import { useContext } from "react"
import { BudgetContext } from "../reducers/BudgetContext"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    return context
}