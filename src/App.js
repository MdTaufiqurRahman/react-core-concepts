import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name : 'Phone', price:'$55'},
  {name : 'Mobile', price:'$55'},
  {name : 'Drone', price:'$455'}]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Price List</p>
      <Counter></Counter>
      <Users></Users>

        <Product name = {products[0].name} price = {products[0].price}></Product>
        <Product name = {products[1].name}price ={products[1].price}></Product>
        <Product name = {products[2].name} price = {products[2].price}></Product>        

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount (count+1);

  
  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick = {() => setCount (count-1)}>Decrease</button>
      <button onClick = {() => setCount (count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
  {users.map(user => <li>{user.body} , {user.title}</li>)}
      </ul>
    </div>
  )
}

function Product(props){
  const ProductStyle = {
    border : '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue',
    height : '200px',
    width : '200px',
    float : 'left',
    margin : '10px'
  }
  console.log(props);
  return(
    <div style = {ProductStyle}>
      <h4>{props.name}</h4>
  <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
