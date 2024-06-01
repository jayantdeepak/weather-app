import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./seachbox.css"
import { useState } from 'react';


export default function SearchBox({updateinfo}){
  let[City,setCity]=useState("")
  let[Error,setError]=useState(false)
  
  const API_URL="https://api.openweathermap.org/data/2.5/weather"
  const API_KEY= "db6b8a95dea6f40fe5fae8dad03280d6"

  let getWeatherInfo=async()=>{
    let response=await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`)
    let jsonresponse=await response.json()
    
    let result={
      city:City,
      temp:jsonresponse.main.temp,
      tempMin:jsonresponse.main.temp_min,
      tempMax:jsonresponse.main.temp_max,
      humidity:jsonresponse.main.humidity,
      feelsLike:jsonresponse.main.feels_like,
      weather:jsonresponse.weather[0].description
    }
    console.log(result)
    return result
  }

  
  let handleChange=(e)=>{
    let cityname=e.target.value
    setCity(cityname)};

    let handleSubmit=async(e)=>{try{
      e.preventDefault()
      setCity("")
     let newinfo=await getWeatherInfo()
     updateinfo(newinfo)}catch{setError=true}

    }
    return(
        <div className='Searchbox'>
        
        <form><TextField onChange={handleChange} value={City} required id="outlined-basic" label="City Name" variant="outlined" />
        <br />
        <Button onClick={handleSubmit} variant="contained" type='submit' >
        Serach
      </Button>
      </form>
      {Error?<p>no found</p>:""}
        </div>
    )
}