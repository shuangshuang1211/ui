import * as React from 'react';
import "./Person.css";

const person = (props) =>{
    return(
        <div className="Person">
        <p onClick={props.myclick}> 我是 {props.name},今年 {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}></input> 
        </div>
    )
};

export default person;

