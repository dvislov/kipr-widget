import React, { Component } from 'react';

export default class RentSelect extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(this.refs.rentType.getDOMNode().value);
  }

  render() {
    return (
      <div className='kipr-widget__selectControl'>
        <label className='kipr-widget__label'>{this.props.title}:</label>

        <select
          ref='rentType'
          name={this.props.name}
          className='kipr-widget__select'
          onChange={this.handleChange} >

          {this.props.options.map(function(option, i) {
            return <option value={option.value} key={i}> {option.title} </option>;
          })}

        </select>
    </div>
    );
  }
}
