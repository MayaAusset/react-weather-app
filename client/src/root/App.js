import "./App.css";
import NavBar from "../components/main/NavBar";
import { Route, Switch } from "react-router-dom";


import SearchBar from "../components/main/SearchBar";
import LocationResult from "../components/locationResults/LocationResult";
import LocationResultCard from "../components/locationResults/LocationResultCard";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/results" component={LocationResult} />
        <Route path="/weatherResults" component={LocationResultCard} />
      </Switch>
    </div>
  );
}

export default App;
