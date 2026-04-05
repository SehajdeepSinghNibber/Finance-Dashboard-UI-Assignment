import React from 'react';
import { useFinanceStore } from '../store';

const TransactionList = () => {
  const { getData, role, deleteTransaction, searchQuery, setSearchQuery, sortBy, setSortBy } = useFinanceStore();
  const { sorted } = getData(), del = deleteTransaction;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
        <h2 className="text-xl font-bold text-slate-800">Transactions List</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search category or text..."
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm transition-all focus:ring-2 focus:ring-slate-300 focus:outline-none w-full md:w-48"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm w-full md:w-32"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Latest Date</option>
            <option value="amount">High Amount</option>
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="py-20 text-center">
            <p className="text-slate-400 font-medium italic">No transactions found matching your criteria.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-700">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-4 py-3 font-semibold text-xs tracking-wider uppercase text-slate-400">Date</th>
                <th className="px-4 py-3 font-semibold text-xs tracking-wider uppercase text-slate-400">Category</th>
                <th className="px-4 py-3 font-semibold text-xs tracking-wider uppercase text-slate-400">Amount</th>
                <th className="px-4 py-3 font-semibold text-xs tracking-wider uppercase text-slate-400">Type</th>
                {role === 'Admin' && <th className="px-4 py-3 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {sorted.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-4 py-4 font-medium text-slate-500">{t.date}</td>
                  <td className="px-4 py-4 font-bold text-slate-800">{t.category}</td>
                  <td className={`px-4 py-4 font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${t.type === 'income' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                      {t.type}
                    </span>
                  </td>
                  {role === 'Admin' && (
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={() => del(t.id)}
                        className="text-rose-300 hover:text-rose-600 transition-colors font-medium cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransactionList;