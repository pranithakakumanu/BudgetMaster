import React, { useEffect, useState } from "react";

const ExpenseTable = ({ expense, setExpense, totalAmount, setTotalAmount }) => {
    const [filterData, setFilterData] = useState(expense);

    useEffect(() => {
        setFilterData(expense);
    }, [expense]);

    useEffect(() => {
        let total = 0;
        filterData.forEach((element) => {
            if (!isNaN(parseFloat(element.amount))) {
                total += parseFloat(element.amount);
            }
        });
        setTotalAmount(total);
    }, [filterData]);

    const sortHandler = (e) => {
        const sortingOrder = e.target.id === "ascending" ? 1 : -1;
        const sortedData = [...filterData].sort((a, b) =>
            sortingOrder * (parseFloat(a.amount) - parseFloat(b.amount))
        );
        setFilterData(sortedData);
    };

    return (
        <div className="flex flex-col overflow-x-hidden bg-slate-300 w-full max-w-screen-xl mx-auto">
            <table className="w-full p-3">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount 
                            <span className="text-2xl mx-1 font-extrabold cursor-pointer" id="descending" onClick={sortHandler}>&uarr;</span>
                            <span className="text-2xl mx-1 font-extrabold cursor-pointer" id="ascending" onClick={sortHandler}>&darr;</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((element) => (
                        <tr key={element.id} className="bg-white">
                            <td className="text-center py-4 text-sm text-gray-900">{element.title}</td>
                            <td className="text-center py-4 text-sm text-gray-900">{element.category}</td>
                            <td className="text-center py-4 text-sm text-gray-900">{element.amount}</td>
                        </tr>
                    ))}
                    <tr className="bg-gray-50">
                        <td colSpan="2" className="text-center px-20 py-6 text-sm font-medium text-gray-900">Total</td>
                        <td className="text-center px-20 py-6 text-sm text-gray-900">{totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;
