import './App.css';
import Navbar from './components/header';
import Countries from './components/countriesList';
import { useState,useEffect } from 'react';
import Countrie from './components/countryInfo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [state,setState] = useState(false)          //state to detrminate whether it is night mode or day mode
  const [countrie ,setCountrie] = useState("")      //state to detrminate which contry was clicked
  const [countries,setCountries] = useState()       //state in which  all countrys objsects are saved
  const [borderCountrie,setBorderCountries] = useState()  //state in which the choosen country's boreders are saved
  /*function changeCountrie(c){
    setCountrie(c)
  }*/
  useEffect(()=>{                     //useffect so you dont get infinte loop
    function newCountry(){
        const bordercountry=[]        //array in which you can save the resulting objects
        if(countrie !== "" && countrie.borders){    //a condition so you dont get errore in case countrie is not yet choosen or it dos not have borders
            const border = Object.values(countrie.borders)   //transform the values of countrie.borders into an array (so you can go throught thought values) 
            for(let i=0; i<countries.length;i++){           //go throught all the countires 
                for(let j=0 ; j<border.length;j++){       // and comper the cca3 name with border arrya values
                    if(border[j]== countries[i].cca3){
                        bordercountry.push(countries[i])      //if true save the countrie object in bordercountry  array
                    }
                }
            }
        }
        else{
        }
        setBorderCountries(bordercountry)           //save the resulting arrray in borderCountrie state
    }
    newCountry()
},[countrie])
  return (
    <BrowserRouter>
      <Navbar
        changeState={()=>setState((prev)=>!prev)}       //toggle between night and day mood if botton in header is clicked
      />
      <Routes>
        <Route path='/' element={<Countries             //set countries component as default path 
        darckMode={state}                             //pass the state to countires to change toggle mode there
        Countrie={setCountrie}                  //pass clicked countrie object to App and saved in countries state
        Countries={setCountries}              //pass all countries after fetching to App component
        BorderCountrie={setBorderCountries}
        />}/>
        <Route path='/countrie' element={<Countrie    
        countrie={countrie}
        countries={countries}
        borderCountrie={borderCountrie}
        changeCountry={setCountrie}
        state={state}
        />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
