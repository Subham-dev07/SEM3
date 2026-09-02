import React, { useReducer, useState } from 'react'
import './App.css'
import reducer from './Logic'

function App() {
  const [state, dispatch] = useReducer(reducer, { signal: 'yellow', count: 0  });

  return (
    <div className='container'>
      <div className='panel'>
        <p className='text'>Message</p>

        <div className='signal-box'>
          <div className='light light-red' style={{ visibility: state.signal === "red" ? 'visible' : 'hidden' }}></div>
          <div className='light light-yellow' style={{ visibility: state.signal === "yellow" ? 'visible' : 'hidden' }}></div>
          <div className='light light-green' style={{ visibility: state.signal === "green" ? 'visible' : 'hidden' }}></div>
        </div>

        <p className='text'>State : {state.count}</p>
      </div>

      <div className='controls'>
        <button className='btn' onClick={() => dispatch({ type: 'next' })}>Change Signal</button>
        <button className='btn btn-emergency' onClick={() => dispatch({ type: 'emergency' })}>Emergency</button>
      </div>

      <input
        className='input'
        type="text"
        placeholder="Type a message..."
      />
    </div>
  )
}

export default App