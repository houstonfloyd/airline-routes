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

  clearFilters = () => {
    this.setState({
      airline: 'All Airlines',
      airport: 'All Airports',
    });
  };

  formatValue = (property, value) => {

  };

  render() {

    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    let filteredRoutes = data.routes.filter(route => {
      return (getAirlineById(route.airline) === this.state.airline || this.state.airline === 'All Airlines') && 
             (getAirportByCode(route.src) === this.state.airport || getAirportByCode(route.dest) === this.state.airport || this.state.airport === 'All Airports');
    });

    const filteredAirlines = data.airlines.map(airline => {
      const active = !!filteredRoutes.find(route => route.airline === airline.id);
      return Object.assign({}, airline, {active});
    });

    const filteredAirports = data.airports.map(airport => {
      const active = !!filteredRoutes.find(route => {
        return (route.src === airport.code) || (route.dest === airport.code);
      });
      return Object.assign({}, airport, {active});
    });

    filteredRoutes = filteredRoutes.map((route) => {
      let airline = getAirlineById(route.airline);
      let src = getAirportByCode(route.src);
      let dest = getAirportByCode(route.dest);
      
      return [airline, src, dest];
    });

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
          <button onClick={this.clearFilters}>Clear Filters</button>
          <Table
            className="routes-table"
            columns={columns} 
            rows={filteredRoutes}
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