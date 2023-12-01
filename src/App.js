import './App.css';
import { useState } from 'react';
import Navbar from './layout/Navbar';
import Users from './components/User';
import Search from './components/Search';
import axios from 'axios';
import { Component } from 'react';
const App=()=>{

  const[usersData,setUsersData]=useState([]);
  const[searchText,setSeachText]=useState("")
  ;
  // make a request to api github  to search  users name  base on provided text
  const handleSearch=(text)=>{
    console.log(text);
    axios.get(`https://api.github.com/search/users?q=${text}`)
    .then((response)=>{
      console.log(response);
      setState({usersData: response.data.items});
    });
  }
    return (
      <div className="App">
        <Navbar />
        <div className="container">
         <Search handleSearch={handleSearch}/>
         <Users usersData={usersData}/>
        </div>
      </div>
    );
  }

export default App;

