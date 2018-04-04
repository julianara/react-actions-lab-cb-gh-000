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
  const updatedRow = [...this.state.table[rowIndex]];
  updatedRow[columnIndex] = ev.target.value;
  const updatedTable = [...this.state.table];
  updatedTable[rowIndex] = updatedRow;
  
  this.setState({
    table: updatedTable
  });

}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  });
}

function blurCell () {
  this.setState({
    focused: null
  });
}

function removeRow (ev) {
  ev.preventDefault();
  if (this.state.table.length > 1) {
    const updatedTable = this.state.table.slice(0, -1);

    this.setState({
      table: updatedTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(this.state.table[0].length > 1) {
    const updatedTable = this.state.table.slice(0, -1)
  }
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
