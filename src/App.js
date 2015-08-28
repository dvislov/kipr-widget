import config from './config.js';
import React, { Component } from 'react';

export default class App extends Component {

  redirectSearchExtend() {
    window.location.href = config.host + config.searchPathExternal;
  }

  render() {
    return (
      <div>
        <h1>Поиск</h1>
        <select placeholder='Тип'>
          <option></option>
        </select>

        <a onClick={this.redirectSearchExtend}>Расширенный поиск</a>
      </div>
    );
  }
}
