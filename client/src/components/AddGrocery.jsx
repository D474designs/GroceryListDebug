import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (<div>
      Description: <input ></input>
      <br />
      Quantity: <input ></input>
      <button>Add Grocery</button>
    </div>);
  }
}

export default AddGrocery;

