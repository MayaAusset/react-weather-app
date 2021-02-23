import axios from "axios";

class WeatherService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, 
    });
  }
  getLocation = (city) => {
    return this.service
                .get(`api/searchResult/${city}`)
                .then((res) => res);
  };
}

export default WeatherService;
