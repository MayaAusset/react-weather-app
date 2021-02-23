import axios from "axios";

class WeatherService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }
  getLocation = (city) => {
    return this.service
                .get(`api/searchResult/${city}`)
                .then((res) => res);
  };
  getTest = () => {
    return this.service.get("api/testing").then((response) => console.log(response))
  }
}

export default WeatherService;
