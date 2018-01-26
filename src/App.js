import React, { Component } from 'react';
import AvatarCard from './components/AvatarCard'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {


  render() {
    return (
      <div>
      <Navbar />
      <AvatarCard />
      <Footer />
      </div>
    );
  }
}

export default App;
