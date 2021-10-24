import "./App.css";
import "./assets/css/fonts.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RoutePage from "./Pages/RoutePage";
import Error from "./Pages/Error";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/players/:player" component={RoutePage} />
      <Route exact path="/teams/:team" component={RoutePage} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default App;
