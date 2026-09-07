

function TrafficPolice({value}) {
  
  const {name,dispatch}=value
  return (
    <div className="officer-box">
      <h1>OnDuty : {name}</h1>
      <button className="btn officer-btn" onClick={()=>dispatch({type:'changeName'})}>Change Police</button>
    </div>
  )
}

export default TrafficPolice