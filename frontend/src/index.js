import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { Search } from './components/search/Search';
import { Dashboard } from './components/dashboard/Dashboard';
import { Bookpage } from './components/bookpage/Bookpage';
import { Addbook } from './components/addbook/Addbook';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />}  />
      <Route path="/register" element={<Registration />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookpage" element={<Bookpage />} />
      <Route path="/addbook" element={<Addbook />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
