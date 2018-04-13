import React, { Component } from 'react';
import './App.css';

import data from './data.js';
import { getAirlineById, getAirportByCode } from './data.js';

import Table from './components/Table.js';
import Select from './components/Select.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      airline: 'All Airlines',
      airport: 'All Airports',
    };
  };

  selectAirline = (airline) => {
    this.setState({ airline });
  };

  selectAirport = (airport) => {
    this.setState({ airport });
  };

  formatValue = (property, value) => {

  };

  render() {

    const filteredAirlines = data.airlines;
    const filteredAirports = data.airports;

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

    if (this.state.airport !== 'All Airports') {
      rows = rows.filter(row => {
        return (row[1] === this.state.airport) || (row[2] === this.state.aiport);
      });
    }

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Select 
            options={filteredAirlines} 
            valueKey="id" 
            titleKey="name"
            allTitle="All Airlines" 
            value={this.state.airline} 
            onSelect={this.selectAirline}
          />
          <Select 
            options={filteredAirports}
            valueKey="id" 
            titleKey="name"
            allTitle="All Airports" 
            value={this.state.airport}
            onSelect={this.selectAirport}
          />
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