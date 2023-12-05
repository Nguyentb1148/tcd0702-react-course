import React from "react"
import { useState } from "react";

const Search=(props)=> {

   const[text,setText]=useState("");

    const handleClick=(e)=>{
        e.preventDefault();//prevent the default  form submission behavior
        console.log(text);
        props.handleSearch(text);// calls the handleSearch method passed down as a prop from the parent compoment('App')
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
        setText({text:e.target.value})
        // use to update the compoment state with the new input value
    }
        return(
            <div>
                <from>
                    <input type="text" placeholder="Search" onChange={handleChange}/>
                    <button onClick={handleClick} className="btn btn-dark btn-block">Search</button>
                </from>
            </div>
        )
    }
export default Search;