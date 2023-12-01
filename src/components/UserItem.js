import React from "react";

export default class UserItem extends React.Component {
  render() {
    return (
      <div div className="card text-center">
         <img
         src={this.props.user.avatar_url}
         className="round-img"
         alt="avatar"
         style={{width: "60px"}}/>
         <h3>{this.props.user.login}</h3>
         <a className="btn btn-primary btn-sm" href={this.props.user.html_url}>
         More </a> 
      </div>
    );
  }
}