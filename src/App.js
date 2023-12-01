import './App.css';
import Navbar from './layout/Navbar';
import Users from './components/User'
import axios from 'axios';
import { Component } from 'react';
class App extends Component{

  state ={
    usersData:[],
  };
  componentDidMount() {
    // axios make a get request to github api, then update compoment's state with 
    // the fetched user data when the request is successfull
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({ usersData: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}
export default App;

