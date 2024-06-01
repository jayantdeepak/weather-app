import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"

export default function InfoBox({info}){
    let coldurl="https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let rainurl="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    let hoturl="https://media.istockphoto.com/id/533903266/photo/sunny-berlin-street-life-defocused-image.webp?b=1&s=170667a&w=0&k=20&c=lal4ZXUW_EugBsrkZnt3p19d331jCfSbBdzYBftFbTw="
    return(<div className="InfoBox">
    <div className='CardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.temp>30?hoturl
            :info.temp>22&&info.humidity>65?rainurl
            :coldurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div>temperature={info.temp}&deg;C</div> 
        <div>humidity={info.humidity}</div> 
        <div>Min Temp={info.tempMin}</div> 
        <div>Max Temp={info.tempMax}</div> 
        <div>Feels like {info.weather}={info.feelsLike}</div> 
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>)

}