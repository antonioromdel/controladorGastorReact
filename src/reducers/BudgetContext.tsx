import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { budgetActions, budgetReducer, BudgetState, initialState } from "./budgetReducer"

type BudgetContextProps ={
    state: BudgetState
    dispatch: Dispatch<budgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
