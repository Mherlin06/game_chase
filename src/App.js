import './App.css';
import {PureCompo,PureCompoProps} from './React_Components/PureCompo';
import {StateCompo} from './React_Components/StateCompo';
import { Component } from 'react';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      stateApp : ""
    }
  }
  inputChange = (valeur) => {
    console.log(valeur)
    this.setState({stateApp : valeur})
  }
  render(){

    let labels = [];
    labels.push("Durant");
    labels.push("nGolo");
    labels.push("Ja");
    labels.push("kyrie");

    return (
      <div className="App">
        <header className="App-header">
          {labels.map((player)=> <StateCompo label={player} inputChange={this.inputChange}> </StateCompo>)}

          <PureCompo> </PureCompo>

          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={30}> </PureCompoProps> : <div></div>}

          <StateCompo label={"Mherlin06"} inputChange={this.inputChange}> </StateCompo>
        

         </header>
      </div>
    );
  }
}

export default App;
