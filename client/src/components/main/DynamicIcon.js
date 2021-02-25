import React from 'react';
import sun from "../../assets/sun.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import haze from "../../assets/haze.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import thunderstorm from "../../assets/thunderstorm.png";
import "./SearchResult.css"

const DynamicIcon = ({weather}) => {
    return (
        <div>
            {
                (weather.weather[0].main === "Clear") ? 
                (<img src={sun} alt="sun" className="dynamicIcon" />)
                : 
                (weather.weather[0].main === "Drizzle") ? 
                (<img src={drizzle} alt="drizzle" className="dynamicIcon" />)
                : 
                (weather.weather[0].main === "Rain")? 
                (<img src={rain} alt="rain" className="dynamicIcon" />)
                : 
                (weather.weather[0].main === "Snow") ? 
                (<img src={snow} alt="snow" className="dynamicIcon" />)
                : 
                (weather.weather[0].main === "Cloud") ? 
                (<img src={cloud} alt="cloud" className="dynamicIcon" />)
                : 
                weather.weather[0].main === "Thunderstorm" ? 
                (<img src={thunderstorm} alt="thunderstorm" className="dynamicIcon"/>)
                : 
                (<img src={haze} alt="haze" className="dynamicIcon" />)
            }
        </div>
    )
}

export default DynamicIcon
