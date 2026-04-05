import React from 'react';
import { useFinanceStore } from '../store';

const RoleSwitcher = () => {
  const { role, setRole } = useFinanceStore();

  return (
    <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
      <button
        onClick={() => setRole('Admin')}
        className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
          role === 'Admin' 
          ? 'bg-slate-800 text-white shadow-lg active:scale-95' 
          : 'text-slate-500 hover:bg-white hover:text-slate-700 cursor-pointer'
        }`}
      >
        Admin
      </button>
      <button
        onClick={() => setRole('Viewer')}
        className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
          role === 'Viewer' 
          ? 'bg-slate-800 text-white shadow-lg active:scale-95' 
          : 'text-slate-500 hover:bg-white hover:text-slate-700 cursor-pointer'
        }`}
      >
        Viewer
      </button>
    </div>
  );
}

export default RoleSwitcher;