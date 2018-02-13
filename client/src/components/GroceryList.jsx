import React from 'react';
import GroceryItem from './GroceryItem.jsx'
const GroceryList = (props) => (
  <div className="groceries">
  {props.list.map((item, index) => <GroceryItem item={item} key={index}/>)}
  </div>
)

export default GroceryList;
