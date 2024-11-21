
export type budgetActions = {
    type: 'add-budget',
    payload: {budget: number} 
} | {type: 'show-modal'} | // | significa unión 
    {type: 'close-modal'}


export type BudgetState = {
    budget: number
    modal: boolean
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: budgetActions
) => {
    
    if(action.type === 'add-budget'){
        return{
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === "show-modal"){
        return{
            ...state,
            modal: true
        }
    }

    if(action.type === "close-modal") {
        return {
            ...state,
            modal: false
        }
    }

    return state

}