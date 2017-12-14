import React, { Component } from 'react';
import AvatarCard from './components/AvatarCard'
import Avatars from './Avatars.json'
import './App.css';
import shuffle from 'shuffle-array';



class App extends Component {
state = {
  Avatars,



};


setSelected = (id) => {
  console.log(id);
  shuffle(this.state.Avatars);
  this.setState({ selected: true,  });
  

  const newState = { ...this.state };
  console.log(newState);
  

  if (newState.selected === true){
    console.log("yay")
  
  }
}

  componentWillMount() {
    console.log("component will mount called");
    console.log(Avatars);

  }



  handleClick = (id) => {
    if (this.state.Avatars.selected === true){
      console.log("is true");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Monster Memory Game</h1>
        </header>
        <div className='container'>
        {this.state.count}
          <div className='row'>
        {this.state.Avatars.map(avatar => {
          return (
       <AvatarCard
       key={avatar.id}
       name={avatar.name}
       id={avatar.id}
       image={avatar.image}
       selected={avatar.selected}
       setSelected={this.setSelected}
       onClick={this.handleClick.bind(this)}
     

      
        />
        )
        })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
