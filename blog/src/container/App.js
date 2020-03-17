import  React,{Component} from 'react';
// import logo from './logo.svg';
import '../App.css';
import Persons from '../component/Persons/Persons';
import Header from '../component/Header/Header'

// function App() {
//   return (
//     <div className="App">
//       <p>hello,world!</p>
//       <Person name="shuang" age="23" />
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    console.log("App constructor is running",props)
  }
  componentWillMount(){
    console.log("App willMount is running")
  }
  componentDidMount(){
    console.log("App didlMount is running")
  }
  state={
      persons:[
        {id:1,name:"wang",age:"6"},
        {id:2,name:"hes",age:"8"},
        {id:3,name:"xiaoly",age:"6"}
    ],
      others: "姓名年龄",
      showPerson: false
    
  }
    changeAgeHandler = (newname,newage) =>{
        this.setState(
          {
            persons:[
              {id:1,name:newname,age:65},
              {id:2,name:"hes4",age:newage},
              {id:3,name:"xiaoly4",age:75}
          ]
          }
          // console.log("hello")
        )
    }
    changeNameHandler = (event,id)=>{
        const personIndex = this.state.persons.findIndex(person =>{
              return person.id === id
        })
        // const person = this.state.persons[personIndex];
        const person = {
          ...this.state.persons[personIndex]
        }
        person.name= event.target.value;
        const persons=[...this.state.persons];
        persons[personIndex]=person;

        this.setState(
          {
            persons:persons
          }
        )
      // this.setState(
      //   {
      //     persons:[
      //       {name:event.target.value,age:65},
      //       {name:"hes4",age:45},
      //       {name:"xiaoly4",age:75}
      //   ]
      //   }
      // )
    }

    togglePersonHandler = ()=>{
      const changePerson=this.state.showPerson;
        this.setState({showPerson:!changePerson}) 
    }

    delPersonhandler = (pIndex) =>{
      const persons=[...this.state.persons];
      persons.splice(pIndex,1);
      this.setState({
        persons:persons
      })
    }
    render(){
      // const style={
      //   width:'30%',
      //   margin:'10px auto',
      //   backgroundcolors:'green',
      //   padding:'10px',
      //   font: 'inherit',
      //   border: '1px solid #eee',
      //   cursor:'poniter'
      // };
      console.log("App render is running")
      let persons = null;
      if(this.state.showPerson){
        persons = <Persons 
                    persons={this.state.persons}
                    click={this.delPersonhandler}
                    changed={this.changeNameHandler}
                    ></Persons>
            //  (
        //   <div>
        //     {
        //       this.state.persons.map((person,index) =>{
        //          return <Person 
        //          changed={(event)=> this.changeNameHandler(event,person.id)}
        //         //  myclick={this.delPersonhandler.bind(this,index)}
        //          myclick={()=> this.delPersonhandler(index)} 
        //          key={person.id} 
        //          name={person.name} 
        //          age={person.age}></Person>
              
        //       })
        //     }
        //           {/* <Person name="shuang" age="23" />
        //           <Person name="hong" age="25">React</Person>
        //           <Person changed={this.changeNameHandler}
        //           name={this.state.persons[0].name}
        //             age={this.state.persons[0].age}></Person>
        //             <Person myclick={this.changeAgeHandler.bind(this,"jerry",666)}
        //           name={this.state.persons[1].name}
        //             age={this.state.persons[1].age}></Person> */}
        //     </div> 
        // )
      }
      
      return (
        <div className="App">
          <Header persons={this.state.persons}
                  click={this.togglePersonHandler}
                  showPersons={this.state.showPerson}
          ></Header>
         {/* <p className={classes.join(" ")}>hello,world!</p> 
        
         <button style={style} onClick={this.togglePersonHandler}>Hidden</button>          */}
         {persons}
         {/* {this.state.showPerson ?
            <div>
                  <Person name="shuang" age="23" />
                  <Person name="hong" age="25">React</Person>
                  <Person changed={this.changeNameHandler}
                  name={this.state.persons[0].name}
                    age={this.state.persons[0].age}></Person>
                    <Person myclick={this.changeAgeHandler.bind(this,"jerry",666)}
                  name={this.state.persons[1].name}
                    age={this.state.persons[1].age}></Person>
            </div> : null
            
         } */}
     </div>
      );
    }
}

export default App;
