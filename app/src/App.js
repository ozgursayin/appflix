//import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./layouts/MovieList";

function App() {
  localStorage.clear();
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <MovieList page="search" />} />
          <Route
            path="/watchlist"
            component={() => <MovieList page="watchlist" />}
          />
          <Route
            path="/favorites"
            component={() => <MovieList page="favorites" />}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          {/* <Route path="/details" component={MovieDetails} /> */}
          <Route
            path="/details/:mediaType/:id"
            component={() => <MovieDetails page="details/:mediaType/:id" />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
