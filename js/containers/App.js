import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../store/configureStore';
import SearchApp from './SearchApp';
import { fetchUsers } from '../actions';


export default class App extends Component {

  componentDidMount() {
    store.dispatch(fetchUsers(store));
  }

  render() {
    return (
      <Provider store={store}>
        <SearchApp store={store} />
      </Provider>
    );
  }
}
