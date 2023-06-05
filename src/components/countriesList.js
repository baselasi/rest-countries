import React, { useEffect } from "react";


export default function Countries(){
    const [list,setlist] = React.useState([])
    /*const [asiaList,setAsialist] = React.useState([])
    const [europeList,setEuropelsit] = React.useState([])
    const [africaList,setAfricaList] = React.useState([])
    const [americaList,setAmericaList] = react.useState([])
    const*/
    const [countries,setCountries] = React.useState(0)
    const [regio,setRegion]  = React.useState("Asia")
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
            /*if(regio===""){
                for(let i=countries;i<countries+9;i++){
                    setlsit((prev)=>[...prev,data[i]])
                   
                }
                /*let i=0
                while(list.length<countries){
                    setlsit((prev)=>[...prev,data[i]])
                    
                    
                }
            }*/
                let j=0
                let i=countries
                while(j<9){
                    console.log(j)
                    if(data[i].region===regio){
                        console.log(data[i])
                        console.log(regio)
                        console.log(data[i].region)
                        setlist((prev)=>[...prev,data[i]])
                        j++
                        
                    }
                    
                    i++
                
            }
            }
            fetchData()
        }
        ,[countries])
        function showMore(){
            setCountries((prev)=>prev+9)
        }
    return(
        <div >
            {
                list.map((item)=><div><div></div><span>{item.altSpellings[0]}</span><span>{item.population}</span><span>{item.region
                }</span><span>{item.capital}</span></div>)
            }
            <button onClick={showMore}>more country</button>
        </div>
    )
}