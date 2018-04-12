import React, { Component } from 'react';
import './../App.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstRow: this.props.initialStart,
    };  
  };


  render() {

    const rows = this.props.rows.slice(0, this.props.perPage).map((row) => {
      return (
        <tr>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className={this.props.className}>
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
        <div class="pagination">
          <p>Showing {this.state.firstRow} - {this.state.firstRow + this.props.perPage} routes of {this.props.rows.length} routes.</p>
          <button disabled>Previous Page</button>
          <button
            on
          >Next Page</button>
        </div>
      </div>
    );
  }
}

export default Table;