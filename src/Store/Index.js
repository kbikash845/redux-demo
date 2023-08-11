// import {createStore} from 'redux';
import {configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import AuthReducer from './Auth';
  

 const store=configureStore({
    reducer:{counter:counterReducer,auth:AuthReducer}
 })
 
  
export default store; 