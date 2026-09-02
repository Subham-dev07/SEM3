


function reducer(state,action){
    switch(action.type){
        case 'next':
            if(state.signal==="red") return{signal:'yellow',count:state.count+1}
            if(state.signal==="yellow") return{signal:'green',count:state.count+1}
            else return {signal:'red',count:state.count+1}
        case 'emergency':
            return {signal:'green',count:0}
    }

}
export default reducer;