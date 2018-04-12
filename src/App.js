import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import { getAirlineById, getAirportByCode } from './data.js';

//table - map over data, return row(obj is prop)
  //row - return 3 * td, [0], [1], [2]


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <p></p>
        </section>
        <DataTable />
      </div>
    );
  }
}

class DataTable extends Component {
  render() {
    const rows = data.routes.map((route) => {
      let { airline, src, dest } = route;
      return <TableRow airline={airline} src={src} dest={dest} />;
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

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{getAirlineById(this.props.airline)}</td>
        <td>{getAirportByCode(this.props.src)}</td>
        <td>{getAirportByCode(this.props.dest)}</td>
      </tr>      
    );
  }
}

export default App;