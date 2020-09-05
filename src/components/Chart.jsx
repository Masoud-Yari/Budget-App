import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {

    const amounts = useSelector(state => state.transactions.map(transaction => transaction.amount));

    const income = amounts.length > 0 ? amounts.filter(amount => amount >= 0)
        .reduce((sum, num) => sum + num, 0).toFixed(2) : 1;

    const expense = amounts.length > 0 ? amounts.filter(amount => amount < 0)
        .reduce((sum, num) => sum + num, 0).toFixed(2) : 1;

    const data = {
        datasets: [{
            data: [income, expense],
            backgroundColor: ['rgb(87, 200, 169)', 'rgb(255, 135, 52)']
        }],
    
        labels: [
            'Income',
            'Expense'
        ]
    };

    return(
        <div className="chart">
            <Doughnut 
                data={data} 
                option={{ responsive: true }}
            />
        </div>
    )
}

export default Chart;