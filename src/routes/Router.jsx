import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealTimeWishes from './RealTimeWishes';
import Interviews from './Interviews';
import WishAndTemple from './WishAndTemple';
import WebGame from './WebGame';
import Main from './Main';
import Exhibition from './Exhibition';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/realtime-wishes" element={<RealTimeWishes />}></Route>
          <Route path="/interviews" element={<Interviews />}></Route>
          <Route path="/wish-and-temple" element={<WishAndTemple />}></Route>
          <Route path="/web-game" element={<WebGame />}></Route>
        </Route>
        <Route path="/exhibition" element={<Exhibition />}>
          <Route path="/exhibition/realtime-wishes" element={<RealTimeWishes />}></Route>
          <Route path="/exhibition/interviews" element={<Interviews />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
