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

