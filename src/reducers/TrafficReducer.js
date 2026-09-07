




export function trafficReducer(state,action){
    switch(action.type){
        case 'changeName':
            if(state==='meLove') return state='Tuhin'
            else return 'meLove'
    }
}
