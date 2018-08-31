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
    axios.post(`/data`, { description, quantity })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  getGroceries() {
    //Fill this out with axios
    axios.get(`/data`)
  .then(res => {
    const data = res.data;
    this.setState({ description, quantity});
  });
  }

  componentDidMount() {
    this.getGroceries();
  }

  render() {
    return (<div>
      <h1>Grocery List</h1>
      <AddGrocery addItem={description, quantity}/>
      <GroceryList list={description, quantity}/>

//       <ul>
//   { this.state.data.map(data => <li>{data.description} {data.quantity}</li>)}
// </ul>

  // <div>
  //   <form onSubmit={this.handleSubmit}>
  //     <label>
  //       Person Name:
  //       <input type="text" name="name" onChange={this.handleChange} />
  //     </label>
  //     <button type="submit">Add</button>
  //   </form>
  // </div>

    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
