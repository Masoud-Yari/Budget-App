import { v4 as uuidv4 } from 'uuid';

const initState = {
    transactions: []
};

export const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [
                    {
                        id: uuidv4(), 
                        title: action.payload.title, 
                        amount: action.payload.amount
                    }, 
                    ...state.transactions
                ]
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
    }
}