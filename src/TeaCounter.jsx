import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderTea, reset, teaReady } from './redux/teaSlice'

function TeaCounter() {
  
    const order = useSelector(state => state.tea.order)
    const tea = useSelector(state => state.tea.tea)
    const dispatch = useDispatch()

    return (
    <div className="tea-card">
        <h1 className="tea-title">Lets have chai ☕</h1>

        <div className="cup-area">
          <div className={`cup ${tea ? 'cup--ready' : ''}`}>
            <div className="cup__liquid"></div>
          </div>
          <div className="steam"><span></span><span></span><span></span></div>
          <div className="saucer"></div>
        </div>

        <p className={`status ${tea ? 'status--ready' : 'status--idle'}`}>
          {tea ? "Chai ready! ☕" : "No Orders Yet"}
        </p>

        <button
          className="btn btn--primary"
          onClick={() => dispatch(order ? reset() : orderTea())}
        >
          {order ? "Reset" : "Order Tea"}
        </button>
    </div>
    )
}

export default TeaCounter
