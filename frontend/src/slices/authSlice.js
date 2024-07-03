import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.
        getItem('userInfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCrdentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
    }

});

export const { setCrdentials } = authSlice.actions;

export default authSlice.reducer;