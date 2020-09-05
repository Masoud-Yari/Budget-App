import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const amounts = useSelector(state => state.transactions.map(transaction => transaction.amount));

    const balance = amounts.length > 0 ? amounts.reduce((sum, num) => sum + num, 0).toFixed(2) : '0.00';

    return(
        <div className="header">
            <div className="logo-container">
                <img className="app-logo" src="/img/saving-white.png" alt="logo"/>
                <h1>M.Y Budget App</h1>
            </div>
            <h2 className="balance">BALANCE : <br/><span>$ { balance }</span></h2>
        </div>
    )
}

export default Header;