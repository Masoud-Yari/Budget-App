import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../actions/action';

const History = () => {

    const transactions = useSelector(state => state.transactions);
    const dispatch = useDispatch();

    return(
        <div className="history-container">
            <h2>History:</h2>
            <ul className="history-list">
                { transactions.length > 0 ? transactions.map(transaction => {
                    return (
                        <li className={`list-item ${transaction.amount < 0 ? 'expense' : 'income'}`} key={transaction.id} >
                            <span className="item-title">{ transaction.title }</span>
                            <span className="item-amount">$ { transaction.amount }</span>
                            <button className="delete-btn" onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button>
                        </li>
                    );
                }) : 'No History'}
            </ul>
        </div>
    )
}

export default History;