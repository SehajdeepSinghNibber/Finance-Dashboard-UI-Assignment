import React, { useState } from 'react';
import { useFinanceStore } from '../store';

const TransactionForm = () => {
  const { addTransaction } = useFinanceStore();

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !amount || !category) {
      alert("Please fill in all fields.");
      return;
    }

    const newTransaction = {
      date,
      amount: parseFloat(amount),
      category,
      type
    };

    addTransaction(newTransaction);

    setDate("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Date</label>
        <input
          type="date"
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-300 focus:outline-none transition-all"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Amount</label>
        <input
          type="number"
          placeholder="Enter amount..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-300 focus:outline-none transition-all"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Category</label>
        <input
          type="text"
          placeholder="E.g. Rent, Salary, Food..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-300 focus:outline-none transition-all"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Type</label>
        <select
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-slate-300 focus:outline-none transition-all"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-slate-800 text-white font-bold rounded-lg shadow-lg hover:bg-slate-900 transition-transform active:scale-95 cursor-pointer text-sm"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
