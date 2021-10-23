import "./App.css";
import "./assets/css/fonts.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RoutePage from "./Pages/RoutePage";
import Error from "./Pages/Error";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/players/:player" component={RoutePage} />
      <Route path="/teams/:team" component={RoutePage} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default App;
