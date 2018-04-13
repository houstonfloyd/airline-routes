import React, { Component } from 'react';

class Select extends Component {

  handleChange = (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.value);
  };

  render() {
    const options = this.props.options.map((option) => {
      return (
        <option>{option.name}</option>
      );
    });

    return (
      <select value={this.props.value} onChange={this.handleChange}>
        <option>{this.props.allTitle}</option>
        { options }
      </select>
    );

  }
}

export default Select;
