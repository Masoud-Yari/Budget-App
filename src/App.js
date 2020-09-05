import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import Label from './components/Label';
import Chart from './components/Chart';
import History from './components/History';
import TransactionForm from './components/TransactionForm';


function App() {
  return (
    <>
    <Header />
    <div className="app">
      <Chart />
      <Label />
      <TransactionForm />
      <History />
    </div>
  </>
  );
}

export default App;
