import React from 'react';
import UserItem from '../components/UserItem';
 class Users extends React.Component{
    
    render() {
      return (
       <div style={userStyle}>
         {this.props.usersData.map((user)=>(
          <UserItem key={user.id} user={user}/>))}
        </div>
      );
    }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;