import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "./components/Button"
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: [],
      name: "",
	    price: 0
    }

    this.handleButtonClick = this.handleButtonClick.bind(this) 
  }

  handleButtonClick(str) {

    this.setState({
      activeTab: str
    })
  }

  render() {
    console.log(this.state.activeTab)
    return (
      <div className="container">
        <div className="text-center mt-3">
          <h1>Bakery</h1>
          <div className="mt-5 d-flex justify-content-center">
            <Button value="add" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "add"}/>
            <Button value="list" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "list"}/>
            <Button value="pay" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "pay"}/>
          </div>
        </div>
        {this.state.activeTab ==="add" && <Add/>}
        {this.state.activeTab ==="list" && <List/>}
        {this.state.activeTab ==="pay" && <Pay/>}
      </div>
    )
  }

}  

export default App;
