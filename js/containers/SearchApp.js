import React, { Component, PropTypes } from 'react';
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

  onKeyUp(value) {
    this.store.dispatch(searchText(value));
  }

  activeUserChanged(id) {
    this.store.dispatch(changeActive(id));
  }

  onSorted(type) {
    this.store.dispatch(addFilter({type}));
  }

  render () {
    const state = this.store.getState();

    return (
      <div className="app container-fluid">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)} />

        <ToolBar onSorted={this.onSorted.bind(this)} />

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <UserDetail isFetching={state.isFetching} activeUser={state.activeUser} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserTable
              isFetching={state.isFetching}
              userData={state.filteredData}
              activeUserChanged={this.activeUserChanged.bind(this)}
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
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(SearchApp);
