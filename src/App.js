import config from './config.js';
import React, { Component } from 'react';

import Select from './components/Select.js';
import Checkbox from './components/Checkbox.js';

export default class App extends Component {

  redirectSearchExtend() {
    window.location.href = config.host + config.searchPathExternal;
  }

  prepareParam (name) {
    return config.getParamPrefix + '[' + name +']';
  }

  render() {
    return (
      <div className='kipr-widget'>
        <form
            className='kipr-widget__form'
            method='get'
            action={config.host + config.searchPath} >

          <h6 className='kipr-widget__header'>Поиск</h6>

          <div className='kipr-widget__row'>
            <Select
              name={this.prepareParam(config.getParams.duration.name)}
              title={config.getParams.duration.title}
              options={config.getParams.duration.values}
              />
          </div>

          <div className='kipr-widget__row kipr-widget__row--type-flex'>
            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.priceFrom.name)}
                title={config.getParams.priceFrom.title}
                options={config.getParams.priceFrom.values}
                />
            </div>

            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.priceTo.name)}
                title={config.getParams.priceTo.title}
                options={config.getParams.priceTo.values}
                />
            </div>
          </div>

          <div className='kipr-widget__row kipr-widget__row--type-flex'>
            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.bedrooms.name)}
                title={config.getParams.bedrooms.title}
                options={config.getParams.bedrooms.values}
                />
            </div>
            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.realtyType.name)}
                title={config.getParams.realtyType.title}
                options={config.getParams.realtyType.values}
                />
            </div>
          </div>

          <div className='kipr-widget__row'>
            <Select
              name={this.prepareParam(config.getParams.region.name)}
              title={config.getParams.region.title}
              options={config.getParams.region.values}
              />
          </div>

          <div className='kipr-widget__row'>
            <Checkbox
              name={this.prepareParam(config.getParams.swimmingPool.name)}
              title={config.getParams.swimmingPool.title}
              value={config.getParams.swimmingPool.value}
              />

            <Checkbox
              name={this.prepareParam(config.getParams.nextToBeach.name)}
              title={config.getParams.nextToBeach.title}
              value={config.getParams.nextToBeach.value}
              />
          </div>

          <div className='kipr-widget__formActions'>
            <a className='kipr-widget__extendSearchLink' onClick={this.redirectSearchExtend}>Расширенный поиск</a>

            <button className='kipr-widget__button' type='submit'>Найти</button>
          </div>
        </form>
      </div>
    );
  }
}
