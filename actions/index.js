'use strict';

function addColumn (ev) {
  ev.preventDefault();
  
  const updatedTable = this.state.table.map(row => [...row, '']);
  
  this.setState({
    table: updatedTable
  });

}

function addRow (ev) {
  ev.preventDefault();
  
  this.setState({
    table: [...this.state.table, this.state.table[0].map(() => '')]
  });
}

function changeCell (rowIndex, columnIndex, ev) {

}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  });
}

function removeRow (ev) {
}

function removeColumn (ev) {
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
