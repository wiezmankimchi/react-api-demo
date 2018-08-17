import React, { Component } from "react";

import Avatar from "./avatar";
import TaskButton from "./taskButton";

export default class UserRow extends Component {
  render() {
    return (
      <div>
        <tr>
          <td className="avatar">Avatar</td>
          <td className="name">Jon Hilton</td>
          <td className="summary">36 / Lead Developer</td>
          <td className="actions">
            <TaskButton />
          </td>
        </tr>
      </div>
    );
  }
}
