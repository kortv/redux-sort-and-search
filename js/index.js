import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store/configureStore';
import '../sass/main.scss';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
