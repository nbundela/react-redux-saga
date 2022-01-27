import React,{Component} from 'react';
import {connect} from 'react-redux';
import { getUserRequest, createUserRequest, deleteUserRequest } from '../actions/users';
import NewUser from './NewUser';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({
      firstName, 
      lastName
    })
  }

  onHandleDeleteUser = (id) => {
    this.props.deleteUserRequest(id)
  }
  
  render(){
    const users = this.props.users;
    return (
      <div style={{margin: '0 auto', maxWidth:'600px'}}>
        <NewUser onSubmit={this.handleSubmit}/>
        <UserList users={users.items} onDeleteUser={this.onHandleDeleteUser}/>
      </div>
    )
  }
}

// export default connect(null, {
//   getUserRequest
// })(App)
export default connect((({users}) => ({users})), {
  getUserRequest,
  createUserRequest,
  deleteUserRequest
})(App)
