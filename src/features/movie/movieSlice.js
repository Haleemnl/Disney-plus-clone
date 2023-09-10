import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    // status: 'idle',
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        // Use the PayloadAction type to declare the contents of `action.payload`
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },

});


export const { increment, decrement, setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
