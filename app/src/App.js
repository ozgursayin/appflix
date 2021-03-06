//import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./layouts/MovieList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  localStorage.removeItem("query");

  return (
    <HashRouter>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          component={() => <MovieList page="search" />}
        />
        <PrivateRoute
          path="/watchlist"
          component={() => <MovieList page="watchlist" />}
        />
        <PrivateRoute
          path="/favorites"
          component={() => <MovieList page="favorites" />}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute
          path="/details/:mediaType/:id"
          component={() => <MovieDetails page="details/:mediaType/:id" />}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
