import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // initial state

    name: '',
    email: '',
    photo: ''
}


const userSlice = createSlice({
    name: 'user',
    initialState,

    // reducer
    reducers: {
        // actions, When i log in remember
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        // When i logout, forget
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }

})

// export actions
export const { setUserLogin, setSignOut } = userSlice.actions;

// export select, get access to each ... in any of our other files
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;


// export reducers
export default userSlice.reducer;