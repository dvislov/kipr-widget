import React, { Component } from 'react';

export default class Select extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='kipr-widget__formControl'>
        <label className='kipr-widget__label'>{this.props.title}:</label>

        <select name={this.props.name} className='kipr-widget__select' disabled={this.props.disabled}>
          {this.props.options.map(function(option, i) {
            return <option value={option.value} key={i}> {option.title} </option>;
          })}
        </select>
    </div>
    );
  }
}
