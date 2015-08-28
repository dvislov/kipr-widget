import React, { Component } from 'react';

export default class Select extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <select name={this.props.name}>
        <option value=''>{this.props.title}</option>

        {this.props.options.map(function(option) {
          return <option value={option.value}>{option.title}</option>;
        })}

      </select>
    );
  }
}
