/**
 * @author Hugues Mourice
 * Licence
 * Premier composent pure React
 */
import React from "react";
import './PureCompo.css';

export function PureCompo(){
    return (
        <div>
            <h6 className="pure-h6">Pure Compo</h6>
        </div>
    )
} 

export function PureCompoProps({label, age}){
    return (
        <div>
            <h6 className="pureprops-h6">Pure Compo Props {label} {age} ans</h6>
        </div>
    )
} 

