import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';


import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Router,
} from "react-router-dom";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/login' element={<Login />} />

          {/* we use /:id in the details so as to direct us to the specific id of thr card we clicked */}
          <Route path='/detail/:id' element={<Detail />} />

          <Route path='/' element={<Home />} />

        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
