import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Character from "./components/Character"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
    }

    this.componentDidMount = this.componentDidMount.bind(this) 
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  handleFavoriteClick(character) {
    const favoriteCharacter = {}
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(result => {
        this.setState({ 
          characters: result
        })
        console.log(result)
      })   
  }
 

  render() {
    console.log(this.state)
    return (
      <div className="container mt-5">
        <h1 className="text-center">Game of thrones</h1>
        <div className="row mt-5">
          {this.state.characters.map(character => (
            <Character character={character} key={character.id}/>
          ))}
         </div>
      </div>
    )
  }

}  

export default App;
