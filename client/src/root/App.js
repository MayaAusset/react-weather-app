import "./App.css";
import { Route, Switch } from "react-router-dom";

import SearchBar from "../components/main/SearchBar";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchBar} />
      </Switch>
    </div>
  );
};

export default App;
