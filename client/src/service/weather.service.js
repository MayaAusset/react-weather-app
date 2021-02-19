import axios from "axios";

class WeatherService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }
  getLocation = () => {
    return this.service.get("/api/searchResult").then((response) => response);
  };
}

export default WeatherService;
