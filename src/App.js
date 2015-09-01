import config from './config.js';
import React, { Component } from 'react';

import Select from './components/Select.js';
import RentSelect from './components/RentSelect.js';

export default class App extends Component {
  constructor () {
    super();

    this.prepareParam = this.prepareParam.bind(this);
    this.changeFormActionUrl = this.changeFormActionUrl.bind(this);
    this.redirectSearchExtend = this.redirectSearchExtend.bind(this);

    this.state = {
      formActionUrl: config.formActionUrls.rentShort
    };
  }

  redirectSearchExtend () {
    window.location.href = config.host + config.searchPathExternal;
  }

  prepareParam (name) {
    return config.getParamPrefix + '[' + name +']';
  }

  changeFormActionUrl (selectValue) {
    let newUrl = config.searchPathExternal;

    switch (selectValue) {
      case 'short_rent':
        newUrl = config.formActionUrls.rentShort;
        break;
      case 'long_rent':
        newUrl = config.formActionUrls.rentLong;
        break;
      case 'sale':
        newUrl = config.formActionUrls.sale;
        break;
    };

    this.setState({formActionUrl: newUrl});
  }

  render() {
    console.log('render!');
    return (
      <div className='kipr-widget'>
        <form
            className='kipr-widget__form'
            method='get'
            action={config.host + this.state.formActionUrl} >

          <h6 className='kipr-widget__header'>Поиск</h6>

          <div className='kipr-widget__row kipr-widget__row--type-flex'>
            <div className='kipr-widget__column'>
              <RentSelect
                name={this.prepareParam(config.getParams.duration.name)}
                title={config.getParams.duration.title}
                options={config.getParams.duration.values}
                onChange={this.changeFormActionUrl}
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
