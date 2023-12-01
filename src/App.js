import './App.css';
import Navbar from './layout/Navbar';
import Users from './components/User';
import Search from './components/Search';
import axios from 'axios';
import { Component } from 'react';
class App extends Component{

  state ={
    usersData:[],// object usersData to store user data
    searchText:"",// add empty string for search input
  };

  // make a request to api github  to search  users name  base on provided text
  handleSearch=(text)=>{
    console.log(text);
    axios.get(`https://api.github.com/search/users?q=${text}`)
    .then((response)=>{
      console.log(response);
      this.setState({usersData: response.data.items});
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
         <Search handleSearch={this.handleSearch}/>
         <Users usersData={this.state.usersData}/>
        </div>
      </div>
    );
  }
}
export default App;

