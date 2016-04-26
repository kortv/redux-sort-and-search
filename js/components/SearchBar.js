import React from 'react';

export default function SearchBar(props) {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="searchbar form-group">
            <input
              type="text"
              onKeyUp={props.onKeyUp}
              className="form-control"
              placeholder="Search people by name..."
            />
          </div>
        </div>
      </div>
    );
}
