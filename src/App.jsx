import { useReducer } from 'react';
import './App.css';
import Light from './Light';
import TrafficPolice from './TrafficPolice';
import { signalReducer } from './reducers/signalReducer';
import { trafficReducer } from './reducers/TrafficReducer';



function App() {
  const [signal,signalDispatch]=useReducer(signalReducer,{color:'yellow'});
  const [officer,tracfficDispatch]=useReducer(trafficReducer,'meLove');

  return (
   
      <div className="container">
      <Light  value={{signal:signal.color,dispatch:signalDispatch}}/>
      <TrafficPolice value={{name:officer,dispatch:tracfficDispatch}} />
    </div>
  );
}

export default App;