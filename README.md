# Finance Dashboard UI

A professional, role-based finance management dashboard built with React, Tailwind CSS, and Zustand. This project provides a clean interface for tracking transactions, visualizing financial data, and switching between user roles to demonstrate access control.

## Features

- **Role-Based Access Control**: Toggle between Admin and User roles to see modified UI and permissions.
- **Transaction Management**: Add, view, and categorize financial transactions with real-time updates.
- **Data Visualization**: Interactive charts powered by Recharts to visualize spending and income trends.
- **State Management**: Efficient global state handling using Zustand for seamless data flow across the application.
- **Responsive Design**: Fully responsive layout optimized for all screen sizes using Tailwind CSS 4.
- **Modern Tech Stack**: Built with React 19 and Vite for optimal performance and developer experience.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Charting Library**: Recharts
- **Icons/UI**: Modern CSS and standard components

## Project Structure

- `src/components`: Reusable UI components including charts, forms, and lists.
- `src/store.js`: Zustand store for handling global application state.
- `src/mockData.js`: Initial sample data for transactions and summaries.
- `src/App.jsx`: Main application container and layout logic.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd finance-dashboard-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
