import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import RealTimeWishes from '../components/RealTimeWishes';
import Interviews from '../components/Interviews';
import WishAndTemple from '../components/WishAndTemple';
import WebGame from '../components/WebGame';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/real-time-wishes" element={<RealTimeWishes />}></Route>
        <Route path="/interviews" element={<Interviews />}></Route>
        <Route path="/wish-and-temple" element={<WishAndTemple />}></Route>
        <Route path="/go-temple" element={<WebGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
