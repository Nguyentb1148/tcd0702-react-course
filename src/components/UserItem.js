import React from "react";

export default class UserItem extends React.Component {
  render() {
    return (
      <div>
      {/* Displays the login name of the user */}
      <p>{this.props.user.login}</p>
      {/* Displays the HTML URL of the user's GitHub profile */}
      <p>{this.props.user.html_url}</p>
    </div>
    );
  }
}