import { create } from 'zustand';
import MOCK_TRANSACTIONS from './mockData';

export const useFinanceStore = create((set, get) => ({
  transactions: M OCK_TRANSACTIONS,
  role: 'Admin',
  searchQuery: '',
  sortBy: 'date',

  setRole: (role) => set({ role }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSortBy: (sortBy) => set({ sortBy }),

  addTransaction: (t) => set((s) => ({ transactions: [...s.transactions, { ...t, id: Date.now() }] })),
  deleteTransaction: (id) => set((s) => {
    const idx = s.transactions.findIndex(t => t.id === id);
    if (idx !== -1) s.transactions.splice(idx, 1);
    return { transactions: [...s.transactions] };
  }),

  getData: () => {
    const { transactions, searchQuery, sortBy } = get();
    const q = searchQuery.toLowerCase();
    
    const sorted = transactions
      .filter(t => t.category.toLowerCase().includes(q) || t.type.toLowerCase().includes(q) || t.amount.toString().includes(q))
      .sort((a,b) => sortBy === 'amount' ? b.amount-a.amount : new Date(b.date)-new Date(a.date));

    
    const iItems = transactions.filter(t => t.type==='income'), eItems = transactions.filter(t => t.type==='expense');
    const inc = iItems.reduce((s,t)=>s+t.amount,0), exp = eItems.reduce((s,t)=>s+t.amount,0);

    
    const map = {};
    eItems.forEach(t => map[t.category] = (map[t.category]||0)+t.amount);
    const top = Object.entries(map).sort((a,b)=>b[1]-a[1])[0] || ['N/A', 0];
    
    const chartMap = {};
    transactions.forEach(t => {
      chartMap[t.date] = chartMap[t.date] || { date: t.date, income: 0, expense: 0 };
      chartMap[t.date][t.type] += t.amount;
    });
    const chart = Object.values(chartMap).sort((a,b) => new Date(a.date)-new Date(b.date));

    return { sorted, inc, exp, bal: inc-exp, hCat: top[0], hAmt: top[1], avg: eItems.length ? (exp/eItems.length).toFixed(0) : 0, sav: inc ? (((inc-exp)/inc)*100).toFixed(1) : 0, chart };
  }
}));
