import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: ''
    }
    this.add = this.add.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);

  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  updateQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  add() {
    this.props.addItem(this.state.description, this.state.quantity);
    this.setState({
      description: '',
      quantity: ''
    })
  }

  render () {
    return (<div>
      Description: <input onChange={this.updateDescription} value={this.state.description}></input>
      <br />
      Quantity: <input onChange={this.updateQuantity} value={this.state.quantity}></input>
      <button onClick={this.add}>Add Grocery</button>
    </div>);
  }
}

export default AddGrocery;
