import * as React from 'react';
import './Header.css';

const header=(props)=>{
    const assignClasses=[];
      if(props.persons.length<=2){
        assignClasses.push('red');
    
      }
      if(props.persons.length<=1){
        assignClasses.push('bold');
      }
      
    const style={
        width:'30%',
        margin:'10px auto',
        backgroundColor:'green',
        padding:'10px',
        font: 'inherit',
        border: '1px solid #eee',
        cursor:'poniter'
      };
      if(props.showPersons){
        style.backgroundColor="red";
    }
      return(
    <div>
        <p className={assignClasses.join(" ")}>hello,world!</p> 
        <button style={style} onClick={props.click}>Hidden</button> 
    </div>
      )
}

export default header;