import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../actions/action';

const TransactionForm = () => {

    const [newTransaction, setNewTransaction] = useState({
        title: '', 
        amount: 0
    });
    const dispatch = useDispatch();
    const [select, setSelect] = useState('income');

    
    const handleChange = e => {
    
        if(e.target.name === 'title') {
            setNewTransaction({
                ...newTransaction,
                title: e.target.value
            });
        }else if(e.target.name === 'amount' ) {
            setNewTransaction({
                ...newTransaction,
                amount: select === 'income' ? parseFloat(e.target.value) : -parseFloat(e.target.value)
            });
        }
        
    }

    const handleSelectChange = e => {
        
        setSelect(e.target.value);

        setNewTransaction({
            ...newTransaction, 
            amount: -newTransaction.amount
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTransaction(newTransaction));
    }

    return(
        <div className="transaction-container">
            <h2>Add New Transaction:</h2>
            <form className="transaction-form" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" required onChange={handleChange} />
                <input type="number" name="amount" min="1.00" step="1" placeholder="Amount" required onChange={handleChange}/>
                <select name="type" id="type" placeholder="Type" onChange={handleSelectChange} >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <input type="submit" value="ADD"/>
            </form>
        </div>
    )
}

export default TransactionForm;