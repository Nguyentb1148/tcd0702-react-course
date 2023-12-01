import React from "react"

export default class Search extends 
React.Component{

    state={
        text:"",// store string to search input
    };

    handleClick=(e)=>{
        e.preventDefault();//prevent the default  form submission behavior
        console.log(this.state.text);
        this.props.handleSearch(this.state.text);// calls the handleSearch method passed down as a prop from the parent compoment('App')

    }

    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({text:e.target.value})// use to update the compoment state with the new input value
    }
    render(){
        return(
            <div>
                <from>
                    <input type="text" placeholder="Search" onChange={this.handleChange}/>
                    <button onClick={this.handleClick} className="btn btn-dark btn-block">Search</button>
                </from>
            </div>
        )
    }
}