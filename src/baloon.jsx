import React from 'react'
import "./baloon.css"
import { useReducer } from 'react'
import baloonReducer from './baloonReducer';
function App() {
  const [state,dispatch]=useReducer(baloonReducer,{popped:false,pump:0})
  const size = 40 + state.pump * 18;
  return (
    <div className='container'>
     <div className='stage'>
      <div className='baloon'></div><div className='message' style={{fontSize:50,fontWeight:700}}>
        🔥Phat Gaya
      </div>
     </div>
      <div>
        <p className='text'>Pump Count {state.pump}/8</p>
        <button className='btn'  >Pump</button>
        <button className='btn'  >Reset</button>
      </div>
    </div>
  )
}

export default App