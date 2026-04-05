import React from 'react';
import { useFinanceStore } from '../store';

const Insights = () => {
  const { getData } = useFinanceStore();
  const { hCat, hAmt, avg, sav } = getData();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-8 h-full">
      <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">Key Insights</h2>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider uppercase">Top Spending Category</p>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">{hCat}</h3>
          <span className="bg-rose-50 text-rose-600 px-2 py-1 rounded-lg text-xs font-bold leading-tight uppercase tracking-tight antialiased">
            -${hAmt.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider uppercase">Average Expense Size</p>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">${avg.toLocaleString()}</h3>
          <p className="text-xs text-slate-500 italic">Per transaction</p>
        </div>
      </div>

      <div className="space-y-2 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
        <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider uppercase">Savings Rate</p>
        <div className="flex items-end justify-between mt-1">
          <h3 className="text-3xl font-extrabold text-emerald-600">{sav}%</h3>
        </div>
        <p className="text-[10px] text-emerald-800 font-medium italic mt-2">Percentage of income you saved this period.</p>
      </div>
    </div>
  );
}

export default Insights;
