import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = () =>  {
  const [personState, switchPersonState] = useState({
    persons: [
      { name: 'Max', age: 34},
      { name: 'Miya', age: 16},
      { name: 'Mina', age: 26}
    ]
  });


  const [otherState, switchotherState] = useState('some other value')

  const switchNameHandler = () => {
    
    switchPersonState({
      persons: [
        { name: 'Max', age: 34},
        { name: 'Miya', age: 16},
        { name: 'Michale', age: 26}
      ]
    })
  
    switchotherState('some other value!!!!')
  }


    return (
      <div className="App">
        <h1>Hi, i am react App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `I'm not a child`))
}

export default App;
