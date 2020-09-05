import React from 'react';
import { useSelector } from 'react-redux';

const Label = () => {

    const amounts = useSelector(state => state.transactions.map(transaction => transaction.amount));

    const income = amounts.length > 0 ? amounts.filter(amount => amount >= 0)
        .reduce((sum, num) => sum + num, 0).toFixed(2) : '0.00';

    const expense = amounts.length > 0 ? amounts.filter(amount => amount < 0)
        .reduce((sum, num) => sum + num, 0).toFixed(2) : '0.00';
    

    return(
        <div className="label-container">
            <div className="label expense-label">
                <div className="label-text">
                    <h2>EXPENSE</h2>
                    <p>$ {expense}</p>
                </div>
                <img src="/img/expense-logo.png" alt="expense-logo"/>
            </div>
            <div className="label income-label">
                <div className="label-text">
                    <h2>INCOME</h2>
                    <p>$ {income}</p>
                </div>
                <img src="/img/income-logo.png" alt="income-logo"/>
            </div>
        </div>
    )
}

export default Label;