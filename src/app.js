import React, { Component } from "react";

import UserList from "./components/userList";

class App extends Component {
  render() {
    return (
      <div>
        <h2>My Users</h2>
        <p>
          <UserList />
        </p>
      </div>
    );
  }
}

export default App;
