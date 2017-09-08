import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from './components/router'

ReactDOM.render(<App />,
    document.getElementById('root')
);
registerServiceWorker();
