import SearchBox from './search'
import InfoBox from './infoBox'
import { useState } from 'react'
export default function WeatherApp(){
    let[info,setinfo]= useState({ 
        city:"indore",
        feelsLike: 34.74,
        humidity: 23,
        temp: 36.05,
        tempMax: 38.05,
        tempMin: 36.05,
        weather: "haze"
           })

let updateinfo=(newinfo)=>{
    setinfo(newinfo)

}
    return(<>
        <div style={{textAlign:"center"}}><h2>weather app</h2></div>
<SearchBox updateinfo={updateinfo} />
<InfoBox info={info}/></>
    )
}