'use strict';

function addColumn (ev) {
    ev.preventDefault();

  const updatedTable = this.state.table
    .map(row => [...row, '']);

  this.setState({
    table: updatedTable
  });
}

function addRow (ev) {
}

function changeCell (rowIndex, columnIndex, ev) {
}

function focusCell (rowIndex, columnIndex) {
}

function blurCell () {
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
