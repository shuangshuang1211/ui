import * as React from 'react';
import  Person from './Person.jsx';

const persons = (props) =>{
    return props.persons.map((person,index) =>{
        return (
            <Person 
               myclick={()=> props.click(index)}
               changed={(event)=> props.changed(event,person.id)}
               name={person.name}
               age={person.age}
               key={person.id}
            ></Person>
        )
    })
}

export default persons;