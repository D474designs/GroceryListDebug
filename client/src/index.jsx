import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  addGroceryItem(description, quantity) {
    //Fill this out with axios
  }

  getGroceries() {
    //Fill this out with axios
  }

  componentDidMount() {
    this.getGroceries();
  }

  render() {
    return (<div>
      <h1>Grocery List</h1>
      <AddGrocery addItem={this.addGroceryItem}/>
      <GroceryList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
