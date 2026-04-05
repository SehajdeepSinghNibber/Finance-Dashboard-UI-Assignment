import React from 'react';
import { useFinanceStore } from '../store';

const SummaryCards = () => {
  const { getData } = useFinanceStore();
  const { inc, exp, bal } = getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between space-x-4 mb-4">
          <p className="text-slate-500 font-medium">Total Balance</p>
        </div>
        <h3 className="text-3xl font-bold text-slate-800">${bal.toLocaleString()}</h3>
        <p className="text-xs text-slate-400 mt-2">Overall net balance available from your transactions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between space-x-4 mb-4">
          <p className="text-slate-500 font-medium">Total Income</p>
        </div>
        <h3 className="text-3xl font-bold text-emerald-600">${inc.toLocaleString()}</h3>
        <p className="text-xs text-slate-400 mt-2">Sum of all incoming salary and freelance income</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between space-x-4 mb-4">
          <p className="text-slate-500 font-medium">Total Expenses</p>
        </div>
        <h3 className="text-3xl font-bold text-rose-600">${exp.toLocaleString()}</h3>
        <p className="text-xs text-slate-400 mt-2">Total money spent across all categories</p>
      </div>
    </div>
  );
}

export default SummaryCards;