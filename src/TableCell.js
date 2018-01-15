import React, { Component } from 'react'

class TableCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
      const product = this.props.product.name.common;
      const { isOpen } = this.state;
      const cell = isOpen ? <div>{product.url}</div> : null;

      return (
        <div>
          <div onClick = {this.toggleOpen.bind(this)}>{product.text}</div>
          {cell}
        </div>
      )
  }

  toggleOpen(ev) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default TableCell
