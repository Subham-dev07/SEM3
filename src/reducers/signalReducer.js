



export function signalReducer(state,action){
    switch(action.type){
        case 'changeSignal':
            if(state.color==="yellow") return {...state,color:'green'};
            if(state.color==="green") return {...state,color:'red'};
            else return {...state,color:'yellow'}
    }
}