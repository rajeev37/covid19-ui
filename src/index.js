import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <Container>
        <App />
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
