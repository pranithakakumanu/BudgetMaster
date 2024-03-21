import React, { useState, useEffect } from 'react';
import InputControl from './InputControl';

const BudgetControl = ({ monthlyBudget, setMonthlyBudget, totalExpense }) => {
    const [error, setError] = useState('');

    // Function to validate budget
    const validateBudget = () => {
        if (totalExpense > monthlyBudget) {
            setError('Total expense exceeds monthly budget!');
            // Show alert if total expense exceeds monthly budget
            alert('Total expense exceeds monthly budget!');
        } else {
            setError('');
        }
    };

    // Call validateBudget whenever monthlyBudget or totalExpense changes
    useEffect(() => {
        validateBudget();
    }, [monthlyBudget, totalExpense]);

    const handleBudgetChange = (e) => {
        setMonthlyBudget(parseInt(e.target.value));
    };

    return (
        <div className="min-w-[300px] max-w-[600px] mt-7 mx-auto p-2">
            <InputControl
                label={"Monthly Budget"}
                name={"monthlyBudget"}
                type={"number"}
                value={monthlyBudget}
                onChange={handleBudgetChange}
                id={"monthlyBudget"}
                placeholder={"Enter Monthly Budget"}
                error={error}
            />
        </div>
    );
};

export default BudgetControl;
