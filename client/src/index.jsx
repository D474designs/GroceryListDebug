import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import $ from 'jquery';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
  }

  addGroceryItem(description, quantity) {
    $.ajax({
      method: "POST",
      url: "/groceries",
      contentType: 'application/json',
      data: JSON.stringify({
        description: description,
        quantity: quantity
      })
    }).done(() => {
      this.getGroceries();
    });
  }

  getGroceries() {
    $.ajax({
      url: '/groceries',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
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
