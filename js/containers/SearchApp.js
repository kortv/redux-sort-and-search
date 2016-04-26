import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchBar, ToolBar, UserTable, UserDetail } from '../components';
import * as actions from '../actions';

const { searchText, changeActive, addFilter } = actions;

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onKeyUp = (e) => {
    this.store.dispatch(searchText(e.target.value));
  }

  onSorted = (type) => {
    this.store.dispatch(addFilter({ type }));
  }

  activeUserChanged = (id) => {
    this.store.dispatch(changeActive(id));
  }

  render() {
    const state = this.store.getState();

    return (
      <div className="app container-fluid">
        <SearchBar onKeyUp={this.onKeyUp} />

        <ToolBar onSorted={this.onSorted} />

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <UserDetail isFetching={state.isFetching} activeUser={state.activeUser} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserTable
              isFetching={state.isFetching}
              userData={state.filteredData}
              activeUserChanged={this.activeUserChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(SearchApp);
