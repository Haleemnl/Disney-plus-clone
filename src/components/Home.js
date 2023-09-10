import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from '../firebase.js'

import ImgSlider from './imgSlider.js'
import Viewers from './Viewers.js'
import Movies from './Movies.js'

import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice.js'

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {

        
    db.collection('movies').onSnapshot((snapshot) => {
        let tempMovies = snapshot.docs.map((doc) => {
            // console.log(doc.data());

            return { id: doc.id, ...doc.data() }
        })

        // console.log(tempMovies);
        dispatch(setMovies(tempMovies))

    })


    }, [])





    return (
        <Container>

            <ImgSlider />
            <Viewers />
            <Movies />


        </Container>

    )
}



const Container = styled.main`
 min-height: calc( 100vh - 70px );
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
&:before{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

`



