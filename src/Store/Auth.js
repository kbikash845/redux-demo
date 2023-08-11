import { createSlice } from "@reduxjs/toolkit";

const initialAuthState={
    isAuthentication:false,
}
const AuthSlice=createSlice({
name:'authentication',
 initialState:initialAuthState,
 reducers:{
    login(state){
        state.isAuthentication=true;
    },
    logOut( state){  
        state.isAuthentication=false;
    }
 }
});
export const authActions=AuthSlice.actions;
export default AuthSlice.reducer;