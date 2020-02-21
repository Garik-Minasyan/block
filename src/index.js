import React from 'react';
import ReactDOM from 'react-dom';

import './component.css';

import Conteiner from './component';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Conteiner />, document.getElementById('root'));


serviceWorker.unregister();
