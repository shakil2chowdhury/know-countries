import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {

  return (
    <div>
    <Router>
      <Switch>
          <Route path="/country/:countryName">
            <CountryDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
