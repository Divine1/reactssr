import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.buttonClicked.bind(this);
  }
  buttonClicked(){
    console.log("in buttonClicked")
    
  }
  render() {
    return (
      <div className="App">
        <div>
          app component
        </div>
        <div>
          header
        </div>
        <div>
          body
          <button onClick={()=> this.buttonClicked()}>
          click me
          </button>
        </div>
        <div>footer</div>
      </div>
    );
  }
}

export default App;
