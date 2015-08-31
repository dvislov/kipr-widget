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
            action={config.host + config.searchPathRent} >

          <h6 className='kipr-widget__header'>Поиск</h6>

          <div className='kipr-widget__row kipr-widget__row--type-flex'>
            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.duration.name)}
                title={config.getParams.duration.title}
                options={config.getParams.duration.values}
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
                name={this.prepareParam(config.getParams.beds.name)}
                title={config.getParams.beds.title}
                options={config.getParams.beds.values}
                />
            </div>
          </div>

          <div className='kipr-widget__row kipr-widget__row--type-flex'>
            <div className='kipr-widget__column'>
              Here is Datepicker
            </div>
            <div className='kipr-widget__column'>
              <Select
                name={this.prepareParam(config.getParams.daysCount.name)}
                title={config.getParams.daysCount.title}
                options={config.getParams.daysCount.values}
                />
            </div>
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
