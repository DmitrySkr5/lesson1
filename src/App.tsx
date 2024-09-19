import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  let myName: string = "Dima";
  let age: number = 25;
  let animalUrl: string = "https://i0.wp.com/thepixelnomad.com/wp-content/uploads/2023/11/210920-Shire-Rookhills-Emperor047-edit.jpg?fit=1500%2C1000&ssl=1";

  let userName: string = "Dima";
  let lastLogin: string = "16/9/24";

  return (
    <div className="App">
      <Navbar user={userName} lastLogin = {lastLogin}/>
      <Home  userName = {userName}/>
      <h1>{myName}</h1>
      <p>Hello from App component</p>
      <img src={animalUrl} alt="Horse picture" />
      <div>Animal age is {age + 10}</div>
      <p>{Math.random() * 100}</p>
      <Footer developerName = {myName}/>
    </div>
  );
}

export default App;
