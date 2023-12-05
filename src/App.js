import axios from "axios";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";


const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState({});

  const handleSearch = ({ text }) => {
    console.log(text);
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log("API response:", response.data.items);
        setUsersData(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const getDetails=(loginId)=>{
    axios.get(`https://api.github.com/users/${loginId}`).then((response)=>{
      console.log(response.data);
      setUserData(response.data);
    })
  }
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home usersData={usersData} handleSearch={handleSearch} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user/:loginId">
              <User getDetails={getDetails} userData={userData} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;