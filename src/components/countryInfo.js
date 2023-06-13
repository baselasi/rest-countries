import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './countryInfo.css'

export default function Countrie(props){
    const [countrie,setCountrie] = React.useState(props.countrie)  //a state the contiene the county object that have been passed from contries component throught App component
    const [borderCountrie,setBorderCountries] = React.useState(props.borderCountrie) // a state that contiene all border's counrty of country in the first state
    const currenciesKey = (()=> {if (countrie.currencies!==undefined){return Object.keys(countrie.currencies)}})() //the if condtion is there to prevent erroe in case countire.currencies dont exist
    const nativenamekey = (()=> {if (countrie.name.nativeName){return Object.keys(countrie.name.nativeName)}})() //tranfer nativanme into array so you can navigate using index insted of propeties name
    const languages = (()=> {if (countrie.languages){return Object.values(countrie.languages)}})() 
    const tld = (()=> {if (countrie.tld){return Object.values(countrie.tld)}})()  //transfer countrie.tld's values into array so can naviagte throught it
    useEffect(()=>{
        setBorderCountries(props.borderCountrie) //useEffect so you dont have infinte rerender
    },[props.borderCountrie])
    function handelClick(c){
        setCountrie(c)
        props.changeCountry(c) //pass the choosen country object to App coponent so you can find the border countrys
    }
    console.log(countrie)
    const navigate = useNavigate()
    function goBack(){
        navigate('/')
    }
    return(
        <div className={props.state ? "main-div darck" : "main-div"}>
        <main className="main-one">
            <div className="btn-continer-one"><button onClick={goBack} className={props.state ? "btn-one btn-dark" : "btn-one"}>back</button></div>
            <div className="main-continer">
                <div className="flags" style={{backgroundImage: `url(${countrie.flags.png})`}}></div>
                <div className="info-continer">
                    <h2>{countrie.name.common }</h2>
                    <div className="info-center">
                        <div className="info-left">
                            <div style={{fontWeight:300}}><span style={{fontWeight:600}}>Native name: </span >{nativenamekey ? countrie.name.nativeName[nativenamekey[0]].common : ""}</div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Population: </span><span>{countrie.population}</span></div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Region: </span><span>{countrie.region}</span></div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Subregion: </span><span>{countrie.subregion}</span></div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Capital: </span ><span>{countrie.capital}</span></div>
                        </div>
                        <div className="info-right">
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Top Level Domain: </span><span>{tld.map((tld)=><span>{tld};</span>)}</span></div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>Currencies: </span><span>{currenciesKey ? countrie.currencies[currenciesKey[0]].name : ""}</span></div>
                            <div style={{fontWeight:200}}><span style={{fontWeight:600}}>languages: </span><span>{languages?languages.map((lang)=><span>{lang}; </span>) : ""}</span></div>
                        </div>
                    </div>
                    <div className="border">
                        <span style={{fontWeight:600}}>Border Countries:</span> {borderCountrie.map((c)=><button className={props.state ? "border-botton btn-dark" : "border-botton"} onClick={()=>handelClick(c)}>{c.name.common}</button>)}
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}