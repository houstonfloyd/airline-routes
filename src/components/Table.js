import React, { Component } from 'react';
import './../App.css';

class Table extends Component {
  render() {

    const rows = this.props.rows.map((row) => {
      return (
        <tr>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Source Airport</th>
            <th>Destination Airport</th>
          </tr>
        </thead>
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}

export default Table;