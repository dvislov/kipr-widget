import React from 'react';
import App from './App';

require('./styles/app.css');

function renderToElements(toRender, elements) {
  for (var i = 0; i < elements.length; i++) {
    React.render(toRender, elements[i]);
  }
}

renderToElements(<App />, document.getElementsByClassName('awesome-widget'));
