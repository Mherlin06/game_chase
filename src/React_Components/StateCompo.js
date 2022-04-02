/**
 * @author Hugues Mourice
 * Licence
 * Premier composent pure React
 */
 import React from "react";
 import './StateCompo.css';


 export class StateCompo extends React.Component {
    constructor(props){
         super(props);
         this.state = {nom : ""};
    }
    
    handleChange = (event) => {
                this.setState({nom : event.target.value});
                this.props.inputChange(event.target.value);
    }

    render(){
        return (
            <div className="state-h6">

                <h6>Compo State {this.props.label}</h6>
                <input type="text" value={this.state.nom} onChange={this.handleChange}></input>
            </div>)
    }
 }
