import React, { Component } from 'react';

export default class Select extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='kipr-widget__selectControl'>
        <label className='kipr-widget__label'>{this.props.title}:</label>

        <select name={this.props.name} className='kipr-widget__select'>
          {this.props.options.map(function(option) {
            return <option value={option.value}> {option.title} </option>;
          })}
        </select>
    </div>
    );
  }
}
