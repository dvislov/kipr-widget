import React, { Component } from 'react';

export default class Checkbox extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label>
        <input type='checkbox' name={this.props.name} value={this.props.value} />
        {this.props.title}
      </label>
    );
  }
}
