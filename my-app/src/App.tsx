import React from 'react';
import logo from './logo.svg';
import './App.css';

type actionType = {
    type: 'INC' | 'RES'
}

function App() {
    const initialState = 0;
    const reducer = (state: number, action: actionType) => {
        switch (action.type){
            case "INC":
                return state + 1;
            case "RES":
                return state = 0
            default:
                return state
        }
    }
    let state = reducer(initialState, {type: 'INC'})
    let state2 = reducer(initialState, {type: 'RES'})

  return (
    <div className="App">
       state:  {state}
        <br/>
       state2: {state2}
    </div>
  );
}

export default App;
