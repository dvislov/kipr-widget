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

          <Select
            name={this.prepareParam(config.getParams.priceFrom.name)}
            title={config.getParams.priceFrom.title}
            options={config.getParams.priceFrom.values}
            />

          <Select
            name={this.prepareParam(config.getParams.priceTo.name)}
            title={config.getParams.priceTo.title}
            options={config.getParams.priceTo.values}
            />

          <Select
            name={this.prepareParam(config.getParams.bedrooms.name)}
            title={config.getParams.bedrooms.title}
            options={config.getParams.bedrooms.values}
            />

          <Select
            name={this.prepareParam(config.getParams.realtyType.name)}
            title={config.getParams.realtyType.title}
            options={config.getParams.realtyType.values}
            />

          <Select
            name={this.prepareParam(config.getParams.region.name)}
            title={config.getParams.region.title}
            options={config.getParams.region.values}
            />


          <input type='checkbox' /> С бассейном
          <input type='checkbox' /> Пешком до пляжа

          <a onClick={this.redirectSearchExtend}>Расширенный поиск</a>

          <button type='submit'>Найти</button>
        </form>
      </div>
    );
  }
}
