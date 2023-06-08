import logo from './logo.svg';
import './App.css';
import Navbar from './components/header';
import Countries from './components/countriesList';
import { useState } from 'react';
function App() {
  const [state,setState] = useState(false)
  console.log(state)
  return (
    <>
    <Navbar
      changeState={()=>setState((prev)=>!prev)}
    />
    <Countries
      darckMode={state}
    />
    </>
  );
}

export default App;
