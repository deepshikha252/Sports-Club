import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : '',
    token: localStorage.getItem('token') || null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state,action){
        state.user = action.payload;
    },
    setToken(state,action){
        state.token = action.payload
        localStorage.setItem('token',action.payload);
    }
  }
});

export const {addUser,setToken} = userSlice.actions

export default userSlice.reducer;