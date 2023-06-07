import React, { useEffect } from "react";
import "./countriesList.css"
export default function Countries(){
    const [list,setlist] = React.useState([])
    const [allCountrie,setAllCountrie] = React.useState([])
    const [countries,setCountries] = React.useState(0)
    const [region,setRegion]  = React.useState("")
    useEffect(()=>{
        const fetchData = async ()  => {
            const dataJson = await fetch("https://restcountries.com/v3.1/all")
            const data = await dataJson.json()
            setAllCountrie(data)
            console.log(data)
            if(region===""){
                for(let i=countries;i<countries+9 && i<data.length;i++){
                    setlist((prev)=>[...prev,data[i]])
                }
            }
                else{
                    const countriesList = data.filter((contrie)=>contrie.region == region)
                    for(let i=countries;i<countries+9 && i<countriesList.length;i++){
                        setlist((prev)=>[...prev,countriesList[i]])
                    }
                }
            }
            fetchData()
    },[countries,region])
    function serschCountrie(countrie){
        setlist([])
        setCountries(0)
        for (let i=0; i<list.length ;i++){
            if(countrie===list[i].name.common){
                setlist(countrie)
            }
        }
    }
    function showMore(){
        setCountries((prev)=>prev+9)
    }
    function changeRegion(e){
        setRegion(e)
        setlist([])
        setCountries(0)
    }
    function chooseCountrie(e){
        for(let i=0;i<allCountrie.length;i++){
            if(allCountrie[i].name.common===e){
                setlist([allCountrie[i]])
            }
        }            
    }
    return(
        <div className="main">
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
                <div className="country">
                    <div style={{backgroundImage: `url(${item.flags.png})`}} className="flag"></div>
                    <span className="name" style={{fontWeight:800}}>{item.name.common}</span>
                    <span className="population">population:<span style={{fontWeight:300}}>{item.population}</span></span>
                    <span>region:<span style={{fontWeight:300}}>{item.region}</span></span>
                    <span className="capital">capital:<span style={{fontWeight:300}}>{item.capital}</span>{item.capital}</span>
                </div>
                )
                }
            </div>
            <button onClick={showMore} className="btn">more country</button>

        </div>
    )
}