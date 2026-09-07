


function Light({value}) {
 const {signal,dispatch}=value
  
  return (
    <div className="signal-box">
      <div className={`light light-red ${signal === 'red' ? 'active' : ''}`}></div>
      <div className={`light light-yellow ${signal === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light light-green ${signal === 'green' ? 'active' : ''}`}></div>
        <button className="btn" onClick={()=>dispatch({type:'changeSignal'})}>
        Change Signal
      </button>
    </div>
  );
}

export default Light;