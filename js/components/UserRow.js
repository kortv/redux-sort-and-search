import React, { Component } from 'react';

export default class UserRow extends Component {

  handleClick = () => {
    this.props.activeUserChanged(this.props.user.get('id'));
  }

  render() {
    const userData = this.props.user;

    return (
      <tr onClick={this.handleClick}>
        <td>
          <img src={`images/${userData.get('image')}.svg`} className="user-image" />
        </td>
        <td>{userData.get('name')}</td>
        <td>{userData.get('age')}</td>
        <td>{userData.get('phone')}</td>
      </tr>
    );
  }
}
