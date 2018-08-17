import React, { Component } from "react";

import UserRow from "./row";

export default class UserList extends Component {
  render() {
    return (
      <div>
        <table>
          <UserRow />
          <UserRow />
        </table>
      </div>
    );
  }
}
