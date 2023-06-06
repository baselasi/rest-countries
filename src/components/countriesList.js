import React, { useEffect } from "react";


export default function Countries(){
    const [list,setlist] = React.useState([])
    const [allCountrie,setAllCountrie] = React.useState([])
    /*const [asiaList,setAsialist] = React.useState([])
    const [europeList,setEuropelsit] = React.useState([])
    const [africaList,setAfricaList] = React.useState([])
    const [americaList,setAmericaList] = react.useState([])
    const*/
    const [countries,setCountries] = React.useState(9)
    const [region,setRegion]  = React.useState("")
   /* const ,fetchData = async ()  => {
        const dataJson = await fetch("https://restcountries.com/v3.1/all")
        const data = await dataJson.json()
        console.log(data)
        return data
    }
    const data = fetchData()
    console.log(data.PromiseResult) */
    useEffect(()=>{
        const fetchData = async ()  => {
            const dataJson = await fetch("https://restcountries.com/v3.1/all")
            const data = await dataJson.json()
            setAllCountrie(data)
            console.log(allCountrie)
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
            console.log(list)
    },[countries,region])
            /*if(regio===""){
                for(let i=countries;i<countries+9;i++){
                    setlsit((prev)=>[...prev,data[i]])
                   
                }
                /*let i=0
                while(list.length<countries){
                    setlsit((prev)=>[...prev,data[i]])
                    
                    
                }
            }*/
               /* let j=0
                let i=countries
                 while(j<9){
                    console.log(j)
                    if(data[i].region===regio){
                        console.log(data[i])
                        await setlist((prev)=>[...prev,data[i]])
                        console.log(list)
                        j++
                        
                    }
                    else{
                        console.log(data[i])
                    }
                    i++
                
            }*/
        function serschCountrie(countrie){
            for (let i=0; i<list.length ;i++){
                if(countrie===list[i].name.common){
                    setlist(countrie)
                }
            }

        }
        function showMore(){
            setCountries((prev)=>prev+9)
            console.log(countries)
        }
        function changeRegion(e){
            setRegion(e)
            setlist([])
            setCountries(9)

        }
    return(
        <div>
            <div>
            <input list="countries"/>
                <datalist   id="countires">
                    {list.map((countrie)=> <option value="Wafasf"/> )}
                </datalist>
            <input list="region"  onChange={()=>{changeRegion(event.target.value)}}/>
                <datalist id="region">
                    <option value="Asia"/>
                    <option value="Africa"/>
                    <option value="Americas"/>
                    <option value="Oceania"/>
                    <option value="Europe"/>
                </datalist>
            </div>
            <div >
                {
                    list.map((item)=><div><div></div><span>{item.altSpellings[0]}</span><span>{item.population}</span><span>{item.region
                    }</span><span>{item.capital}</span></div>)
                }
                <button onClick={showMore}>more country</button>
            </div>
        </div>
        
    )
}