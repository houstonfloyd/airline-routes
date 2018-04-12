import React, { Component } from 'react';
import './App.css';

import data from './data.js';
import { getAirlineById, getAirportByCode } from './data.js';

import Table from './components/Table.js';


class App extends Component {
  render() {

    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    const rows = data.routes.map((route) => {
      let airline = getAirlineById(route.airline);
      let src = getAirportByCode(route.src);
      let dest = getAirportByCode(route.dest);
      
      return [airline, src, dest];
    });    

    const formatValue = (property, value) => {

    }

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
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
  }
}

export default App;