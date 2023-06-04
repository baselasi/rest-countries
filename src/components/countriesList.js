import React, { useEffect } from "react";


export default function Countries(){
    const [list,setlsit] = React.useState([])
    /*const [asiaList,setAsialist] = React.useState([])
    const [europeList,setEuropelsit] = React.useState([])
    const [africaList,setAfricaList] = React.useState([])
    const [americaList,setAmericaList] = react.useState([])
    const*/
    const [countries,setCountries] = React.useState(0)
    const [region,setRegion]  = React.useState("Asia")
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
            if(region===""){
                /*for(let i=countries;i<countries+9;i++){
                    setlsit((prev)=>[...prev,data[i]])
                    console.log(list)
                    console.log(data[i])
                    console.log(list[i])
                }*/
                let i=0
                while(list.length<countries){
                    setlsit((prev)=>[...prev,data[i]])
                    i++
                }
            }
            else{
                let i=0
                while(list.length<countries){
                    if(data[i].region===region){
                        setlsit((prev)=>[...prev,data[i]])
                        i++
                    }
                }
            }
            console.log(list)
            }
            fetchData()
            console.log(list)
        }
        ,[countries,region])
        function showMore(){
            setCountries((prev)=>prev+9)
            console.log(countries)
        }
    return(
        <div >
            {
                list.map((item)=><div><div></div><span>{item.name.common}</span><span>{item.population}</span><span>{item.region
                }</span><span>{item.capital}</span></div>)
            }
            <button onClick={showMore}>more country</button>
        </div>
    )
}