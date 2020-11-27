//import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import MovieDetails from "./components/MovieDetails";
import WatchList from "./components/Watchlist";
import Favorites from "./components/Favorites";
import Movie from "./layouts/Movie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Movie page="search" />} />

          <Route
            path="/watchlist"
            component={() => <Movie page="watchlist" />}
          />
          <Route
            path="/favorites"
            component={() => <Movie page="favorites" />}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/movie-details" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
