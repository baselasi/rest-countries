import React, { useEffect } from "react";
import "./countriesList.css"
import { useNavigate } from "react-router-dom";
export default function Countries(props){
    const [list,setlist] = React.useState([])          //state in wich contiene the country that you want to be  chowen
    const [allCountrie,setAllCountrie] = React.useState([])  //state that contiene all country objects that have been fetched
    const [countries,setCountries] = React.useState(0)      //number of country that tou want to be chooen
    const [region,setRegion]  = React.useState("")              //state to use when serching country by region
    useEffect(()=>{
        const fetchData = async ()  => {
            const dataJson = await fetch("https://restcountries.com/v3.1/all")
            const data = await dataJson.json()
            setAllCountrie(data)
            if(region===""){                                              
                for(let i=countries;i<countries+9 && i<data.length;i++){  //go throught fetched data and show 9 at first then add 9 every time you click the botton "more country"
                    setlist((prev)=>[...prev,data[i]])
                }
            }
                else{
                    const countriesList = data.filter((contrie)=>contrie.region == region)      //in case you choosen regian filter all the country with that regin   
                    for(let i=countries;i<countries+9 && i<countriesList.length;i++){  //show 9 country at time
                        setlist((prev)=>[...prev,countriesList[i]])
                    }
                }
            }
            fetchData()
    },[countries,region])
    const navigate = useNavigate()  
    function routeChange(object){
        navigate('/countrie')
        props.Countrie(object)  //pass the clicked country's object to the App component so you can pass the countrie component
        props.Countries(allCountrie)  //paa all fetched country to App component so you can pass the countrie component 
    
    }
    function showMore(){                //on clcik add 9 to countires state, this will activate useEffect and in return it will add 9 more countrys to list
        setCountries((prev)=>prev+9)
    }
    function changeRegion(e){    
        setRegion(e)   //on changing reagion use useeffect will be activate 
        setlist([])    
        setCountries(0)
    }
    function chooseCountrie(e){         //serching for country by name, this function can be move to useEffect by adding another if condition
        for(let i=0;i<allCountrie.length;i++){
            if(allCountrie[i].name.common===e){
                setlist([allCountrie[i]])
            }
        }            
    }
    return(
        <div className={props.darckMode ? "main darck" : "main"}>  
            <div className="input">
                <input list="countries" className="list" onChange={()=>chooseCountrie(event.target.value)}/>
                    <datalist   id="countries">
                        {allCountrie.map((countrie)=>  <option value={countrie.name.common}/> )}
                    </datalist>        
                <input list="region" className="list" onChange={()=>{changeRegion(event.target.value)}}/>
                    <datalist id="region">
                        <option value="Asia"/>
                        <option value="Africa"/>
                        <option value="Americas"/>
                        <option value="Oceania"/>
                        <option value="Europe"/>
                    </datalist>
            </div>
            <div className="country-list">
                {
                    list.map((item)=>
                    <div className="country" onClick={()=>routeChange(item)}>
                        <div style={{backgroundImage: `url(${item.flags.png})`}} className="flag"></div>
                        <span className="name" style={{fontWeight:800}}>{item.name.common}</span>
                        <span className="population">population:<span style={{fontWeight:300}}>{item.population}</span></span>
                        <span>region:<span style={{fontWeight:300}}>{item.region}</span></span>
                        <span className="capital">capital:<span style={{fontWeight:300}}>{item.capital}</span></span>
                    </div>
                    )
                }
            </div>
            <div className={props.darckMode ? "btn-continer darck" : "btn-continer"}>
            <button onClick={showMore} className="btn" >more country</button>
            </div>

        </div>
    )
}