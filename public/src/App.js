import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Chat from './pages/chat';
import axios from 'axios';

export default function App(){
  axios.defaults.baseURL = "http://localhost:5000/v1"
  return <BrowserRouter>
    <Routes>
      <Route path={"register"} element={<Register />} />
      <Route path={"login"} element={<Login />} />
      <Route path={"/"} element={<Chat />} />

    </Routes>
  </BrowserRouter>
}