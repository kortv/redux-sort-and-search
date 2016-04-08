import React, { Component } from 'react';

export default class UserDetail extends Component {

  render() {
    const UserDetails = this.props.activeUser;

    const detailMarkup = !UserDetails ? (
      <h3>Nothing found :(</h3>
    ) : (
      <div className="thumbnail">
        <img src={`images/${UserDetails.get('image')}.svg`} />
        <div className="thumbnail-caption">
          <h3>{UserDetails.get('name')}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>{UserDetails.get('age')}</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>{UserDetails.get('image')}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{UserDetails.get('phone')}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Favorite phrase:</b><br />
            {UserDetails.get('phrase')}
          </p>
        </div>
      </div>
    );

    const loading = <span></span>;

    return this.props.isFetching ? loading : detailMarkup;
  }
}
