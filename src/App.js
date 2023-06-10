import logo from './logo.svg';
import './App.css';
import Navbar from './components/header';
import Countries from './components/countriesList';
import { useState } from 'react';
import Home from './components/home';
import Countrie from './components/singleCoutnrie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [state,setState] = useState(false)
  const [countrie ,setCountrie] = useState()
  const [countries,setCountries] = useState()
  console.log(state)
  return (
    <BrowserRouter>
      <Navbar
        changeState={()=>setState((prev)=>!prev)}
      />
      <Routes>
        <Route path='/' element={<Countries 
        darckMode={state}
        Countrie={(e)=>setCountrie((prev)=>e)}
        Countries={setCountries}/>}/>
        <Route path='/countrie' element={<Countrie
        countrie={countrie}
        countries={countries}
        />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
