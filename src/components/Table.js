import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = { firstRow: this.props.initialStart };  
  };

  nextPage = () => {
    this.setState(() => {
      const newRow = this.state.firstRow + 25;
      return {
        firstRow: newRow
      }
    });
  };

  prevPage = () => {
     this.setState(() => {
      const newRow = this.state.firstRow - 25;
      return {
        firstRow: newRow
      }
    });   
  };

  render() {
    const rows = this.props.rows.slice(this.state.firstRow, this.state.firstRow + this.props.perPage).map((row) => {
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
        <div className="pagination">
          <p>Showing {this.state.firstRow + 1} - {this.state.firstRow + this.props.perPage} routes of {this.props.rows.length} routes.</p>
          <button 
            disabled={this.state.firstRow === 0}
            onClick={this.prevPage}
          >Previous Page</button>
          <button
            disabled={this.state.firstRow >= this.props.rows.length - this.props.perPage}
            onClick={this.nextPage}
          >Next Page</button>
        </div>
      </div>
    );
  }
}

export default Table;