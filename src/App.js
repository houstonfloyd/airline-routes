import React, { Component } from 'react';
import './App.css';

import data from './data.js';
import { getAirlineById, getAirportByCode } from './data.js';

import Table from './components/Table.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { airline: 'All Airlines' };
  };

  select = (e) => {
    const airline = e.target.value;
    this.setState({ airline: airline });
  };

  formatValue = (property, value) => {

  };

  render() {

    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    let rows = data.routes.map((route) => {
      let airline = getAirlineById(route.airline);
      let src = getAirportByCode(route.src);
      let dest = getAirportByCode(route.dest);
      
      return [airline, src, dest];
    });

    if (this.state.airline !== 'All Airlines') {
      rows = rows.filter(row => row[0] === this.state.airline);
    }

    const options = data.airlines.map((airline) => {
      return (
        <option onClick={this.select}>{airline.name}</option>
      );
    });

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <select onChange={this.select}>
            <option>All Airlines</option>
            { options }
          </select>
          <Table
            className="routes-table"
            columns={columns} 
            rows={rows}
            format={this.formatValue}
            initialStart={0}
            perPage={25}
           />
        </section>
      </div>
    );
  };
};

export default App;