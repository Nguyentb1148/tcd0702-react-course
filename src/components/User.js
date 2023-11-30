import React from 'react';
import UserItem from '../components/UserItem';
export default  class Users extends React.Component{
    state={
        users: [
            {
              login: "mojombo",
              id: 1,
              avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
              html_url: "https://github.com/mojombo",
            },
            {
              login: "defunkt",
              id: 2,
              avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
              html_url: "https://github.com/defunkt",
            },
            {
              login: "pjhyett",
              id: 3,
              avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
              html_url: "https://github.com/pjhyett",
            },
          ],
    };

    handeClick=()=>{
        console.log("click me")
    }
    render() {
      return (
        <div>
          {/* Mapping through the 'users' array in the state and rendering UserItem component for each user */}
          {this.state.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
          {/* Button triggering the handleClick method when clicked */}
          <button onClick={this.handleClick}>Click</button>
        </div>
      );
    }
}