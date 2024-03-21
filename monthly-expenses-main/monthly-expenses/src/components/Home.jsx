import React, { useState, useEffect } from 'react';
import BudgetControl from './BudgetControl';
import AddForm from './AddForm';
import ExpenseTable from './ExpenseTable';
import Header from './Header';

const Home = () => {
    const [formData, setFormData] = useState({ title: '', category: '', amount: '' });
    const [getID, setGetID] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [monthlyBudget, setMonthlyBudget] = useState(0); // New state for monthly budget
    const [expense, setExpense] =useState(()=>{
        return (JSON.parse(localStorage.getItem('expense')))?(JSON.parse(localStorage.getItem('expense'))):[];
    });

    useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expense));
    }, [expense]);

    return (
        <div className='relative w-[100vw] h-full bg-custom-background overflow-x-hidden'>
            <Header />
            <div className="min-w-[300px] max-w-full max-h-[900px] flex flex-col items-center mt-7 mx-auto p-2">
                <BudgetControl setMonthlyBudget={setMonthlyBudget} monthlyBudget={monthlyBudget} totalExpense={totalAmount} />
                <AddForm setGetID={setGetID} getID={getID} formData={formData} setFormData={setFormData} setExpense={setExpense} expense={expense}></AddForm>
                <ExpenseTable expense={expense} setExpense={setExpense} totalAmount={totalAmount} setTotalAmount={setTotalAmount}></ExpenseTable>
            </div>
        </div>
    );
};

export default Home;
