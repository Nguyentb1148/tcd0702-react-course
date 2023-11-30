import React from "react";
import Search from "../components/Search";
import User from "../components/User";

export default class Body extends React.Component{
    render(){
        return(
            <div>
                <Search/>
                <User/>
            </div>
        )
    }
}

