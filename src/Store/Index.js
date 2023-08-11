import {createStore} from 'redux';
const initialState={counter:0,showCounter:true}
const counterReducer=(state=initialState,action)=>{
    // if(action.type==='increment'){
    //     return{
    //         counter:state.counter+2,
    //     }
    // }
    if(action.type==='increase'){
        return{
            counter:state.counter+action.value,
            showCounter:state.showCounter
        }
    }

    if(action.type==='decrease'){
        return{
            counter:state.counter-action.value,
            showCounter:state.showCounter
        }
    }
    if(action.type==='toggle'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter

        }
    }
    // if(action.type==='decrement'){
    //     return{
    //         counter:state.counter-2,
    //     }
    // }
    return state;
}

 const store=createStore(counterReducer);

export default store; 