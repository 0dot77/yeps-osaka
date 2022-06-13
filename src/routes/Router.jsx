import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import RealTimeWishes from './RealTimeWishes';
import Interviews from './Interviews';
import WishAndTemple from './WishAndTemple';
import WebGame from './WebGame';

//test
import TestNavContainer from '../test/TestNavContainer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/realtime-wishes" element={<RealTimeWishes />}></Route>
        <Route path="/interviews" element={<Interviews />}></Route>
        <Route path="/wish-and-temple" element={<WishAndTemple />}></Route>
        <Route path="/web-game" element={<WebGame />}></Route>
        //test
        <Route path="/test" element={<TestNavContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
