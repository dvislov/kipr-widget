import config from './config.js';
import React, { Component } from 'react';

import Select from './components/Select.js';

export default class App extends Component {

  redirectSearchExtend() {
    window.location.href = config.host + config.searchPathExternal;
  }

  prepareParam (name) {
    return config.getParamPrefix + '[' + name +']';
  }

  render() {
    return (
      <div>
        <form method='get' action={config.host + config.searchPath}>
          <h1>Поиск</h1>

          <Select
            name={this.prepareParam(config.getParams.duration.name)}
            title={config.getParams.duration.title}
            options={config.getParams.duration.values}
            />

          От
          <select>
            <option></option>
          </select>
          До
          <select>
            <option></option>
          </select>
          Спален
          <select>
            <option></option>
          </select>
          Тип
          <select>
            <option></option>
          </select>
          Регион
          <select>
            <option></option>
          </select>
          <input type='checkbox' /> С бассейном
          <input type='checkbox' /> Пешком до пляжа

          <a onClick={this.redirectSearchExtend}>Расширенный поиск</a>

          <button type='submit'>Найти</button>
        </form>
      </div>
    );
  }
}
