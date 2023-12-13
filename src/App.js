import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import GithubState from "./context/github/githubState";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

const App = () => {
  return (
    <GithubState>
      <Router> 
        <div className="App">
          <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user/:loginId">
              <User  />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    </GithubState>
  );
};

export default App;