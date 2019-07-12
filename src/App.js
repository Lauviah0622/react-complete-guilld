import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 34 },
      { name: 'Miya', age: 16 },
      { name: 'Michale', age: 26 }
    ],
    otherState: 'some other value'

  }

  switchNameHandler = (newName) => {
    console.log(this)
    //Dont do this: this.setstate.persons[0].name = 'Maxiliaob'
    this.setState({
      persons: [
        { name: newName , age: 34 },
        { name: 'Miya', age: 16 },
        { name: 'Michale', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    console.log(event.target)
    this.setState({
      persons: [
        { name: 'Max' , age: 34 },
        { name: event.target.value, age: 16 },
        { name: 'Michale', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solod #eee',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, i am react App</h1>
        {/* 盡量不要用arrow annymous function 這樣會造成react刷新太多次導致效率不好(?j為什麼？) */}
        <button 
        style={style}
        onClick={() => this.switchNameHandler('YAZP!!!')}
        >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // 盡量用bind，可是這兩個插在哪裡？
          click={this.switchNameHandler.bind(this, 'NOOOO!!')}changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
        );
    
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `I'm not a child`))
      }
    }
    
    
    
    
    export default App;
