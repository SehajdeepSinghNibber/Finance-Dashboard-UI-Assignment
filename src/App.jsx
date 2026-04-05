import React from 'react';
import { useFinanceStore } from './store';
import SummaryCards from './components/SummaryCards';
import OverviewChart from './components/OverviewChart';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Insights from './components/Insights';
import RoleSwitcher from './components/RoleSwitcher';

const App = () => {
  const { role } = useFinanceStore();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 lg:p-8">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b pb-4 border-slate-200">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Finance Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage your income and tracking expenses effortlessly.</p>
        </div>
        <div className="flex items-center gap-4">
          <RoleSwitcher />
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        <SummaryCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <OverviewChart />
          </div>
          <div>
            <Insights />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <TransactionList />
          </div>

          {role === 'Admin' ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold mb-6 text-slate-800">Add New Transaction</h2>
              <TransactionForm />
            </div>
          ) : (
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <p className="text-amber-800 font-medium italic">
                You are in <strong>Viewer</strong> mode. Switching to Admin will enable adding and deleting transactions.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>&copy; 2024 Project Eclipse - Finance Dashboard UI</p>
      </footer>
    </div>
  );
}

export default App;
