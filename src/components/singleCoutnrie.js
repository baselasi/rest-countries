import React, { useEffect } from "react";
import Countries from "./countriesList";


export default function Countrie(props){
    const [coun,setCountrie] = React.useState()
    const [countries,setCountries] = React.useState()
    const [borderCountrie,setBorderCountries] = React.useState()
    useEffect(()=>{
    setCountrie((prev)=>props.countrie)

        console.log(coun)
        //console.log(coun.name)
    },[])

    console.log(coun)
    //const currenciesKey= Object.keys(coun.currencies)
    const nativenamekey = Object.keys(props.countrie.name.nativeName)
    const languages = Object.values(props.countrie.languages)
    const tld = Object.values(props.countrie.tld)
    return(
        <>
        <div><button>back</button></div>
        <mai>
            <div className="flag" style={{backgroundImage: `url(${props.countrie.flags.png})`}}></div>
            <div>
                <h2>{props.countrie.name.common}</h2>
                <div>
                    <div>
                        <h4>Native name:</h4><span>{props.countrie.name.nativeName[nativenamekey[0]].common}</span>
                        <h4>Population:</h4><span>{props.countrie.population}</span>
                        <h4>Region:</h4><span>{props.countrie.region}</span>
                        <h4>Subregion:</h4><span>{props.countrie.subregion}</span>
                        <h4>Capital:</h4><span>{props.countrie.capital}</span>
                    </div>
                    <div>
                        <h4>Top Level Domain:</h4><span>{tld.map((tld)=><span>{tld};</span>)}</span>
                        <h4>Currencies</h4><span>{/*props.countrie.currencies[currenciesKey[0]].name*/}</span>
                        <h4>languages</h4><span>{languages.map((lang)=><span>{lang}; </span>)}</span>
                    </div>
                </div>
            </div>
        </mai>
        </>
    )

}