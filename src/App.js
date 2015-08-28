import config from './config.js';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Поиск</h1>
        <select placeholder='Тип'>
          <option></option>
        </select>
      </div>
    );
  }
}
