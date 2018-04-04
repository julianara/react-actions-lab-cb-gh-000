'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null,
       table: [
        ['']
      ]
    };
    this.handleAddColumn = actions.addColumn(this);
    this.handleAddRow = actions.addRow(this);
    this.handleRemoveColumn = actions.removeColumn(this);
    this.handleRemoveRow = actions.removeRow(this);
    this.handleChangeCell = actions.changeCell(this);
  }

  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn}>Add Column</button>
          {' '}
          <button onClick={this.handleAddRow}>Add Row</button>
          {' '}
          <button onClick={this.handleRemoveColumn}>Remove Column</button>
          {' '}
          <button onClick={this.handleRemoveRow}>Remove Row</button>
        </div>

        <Table table={this.state.table}
                onBlur={this.handleBlur}
                onChange={this.handleChangeCell}/>

        <div className='spreadsheet__focused'>
        </div>
      </div>
    );
  }
}
