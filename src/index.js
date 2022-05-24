import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Legger til bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Legger til css styling
import './assets/style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
