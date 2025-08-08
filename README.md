# Redux-Saga API Integration Demo

A modern React + Vite project demonstrating Redux Toolkit and Redux-Saga for API integration.

## 🔧 Tech Stack
- **React** with **Vite**
- **React Router DOM** for routing
- npm install react-router-dom
- **Redux Toolkit** for state management
- **Redux-Saga** for handling asynchronous actions
- npm install @reduxjs/toolkit react-redux redux-saga axios
- **Framer Motion** for animations
- npm install framer-motion

---

## 📁 Folder Structure  

redux-saga-integration-demo/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components (forms, buttons, etc.)
│ ├── pages/ # Application pages (e.g. Dashboard, Login)
│ ├── redux/
│ │ ├── actions/ # Redux action creators
│ │ ├── reducers/ # Slice reducers
│ │ ├── sagas/ # Redux-Saga generators (API calls & side effects)
│ │ └── store.js # Configured Redux store with middleware
│ ├── services/ # API services / HTTP request functions
│ ├── styles/ # Global / shared CSS files
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point with router + Redux provider
├── .gitignore
├── package.json
└── vite.config.js



## 🚀 Getting Started

```bash
npm install
npm run dev
