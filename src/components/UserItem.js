import React from "react";

const UserItem =(props)=>{
const {login,avatar_url,html_url}=props.user;
    return (
      <div div className="card text-center">
         <img
         src={avatar_url}
         className="round-img"
         alt="avatar"
         style={{width: "60px"}}/>
         <h3>{login}</h3>
         <a className="btn btn-primary btn-sm" href={html_url}>
         More </a> 
      </div>
    );
  }
export default UserItem;