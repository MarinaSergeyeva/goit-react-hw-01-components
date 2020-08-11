import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.getElementById('root'),
);
