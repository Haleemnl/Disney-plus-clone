import React, { useEffect } from 'react'

import styled from 'styled-components'
// IMPORT Auth and provider from firebase
import { auth, provider } from '../firebase'
import { Link, Navigate, useNavigate } from 'react-router-dom'

// import select & useSelector
import {
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin,


} from '../features/user/userSlice'

import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

    // save them in a vaiable
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const navigate = useNavigate();

    useEffect(() => {

        auth.onAuthStateChanged(async (user) => {

            if (user) {
                dispatch(setUserLogin({

                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }))
                navigate('/')
            }

        })

    }, [])


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {

                // console.log(result); >>> 1:20:50

                // save result.user in a variable
                let user = result.user

                dispatch(setUserLogin({

                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }))

                navigate('/')
            })
    }


    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                navigate('/login')
            })
    }


    return (
        <Nav>

            <Logo src='/images/logo.svg' />
            {

                !userName ?
                    <LoginContainer>
                        <Login onClick={signIn}>login</Login>
                    </LoginContainer> :
                    <>

                        <NavMenu>


                            <a href="">
                                <img src="/images/home-icon.svg" alt="" />
                                <span>HOME</span>
                            </a>

                            <a href="">
                                <img src="/images/search-icon.svg" alt="" />
                                <span>SEARCH</span>
                            </a>

                            <a href="">
                                <img src="/images/watchlist-icon.svg" alt="" />
                                <span>WATCHLIST</span>
                            </a>

                            <a href="">
                                <img src="/images/original-icon.svg" alt="" />
                                <span>ORIGINALS</span>
                            </a>

                            <a href="">
                                <img src="/images/movie-icon.svg" alt="" />
                                <span>MOVIES</span>
                            </a>

                            <a href="">
                                <img src="/images/series-icon.svg" alt="" />
                                <span>SERIES</span>
                            </a>


                        </NavMenu>

                        <UserImg

                            onClick={signOut}

                            src='/images/haleem.jpeg' />

                    </>
            }




        </Nav >
    )
}



const Nav = styled.nav`
background-color: black;
height: 70px;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`

const Logo = styled.img`
width: 80px;

`

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left:25px ;
align-items: center;

a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
        height: 20px;
    }

    span{
        font-size: 13px;
        color: white;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content: '';
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            transform: scaleX(0);
            opacity: 0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
    }

    &:hover{

        span:after{
     transform: scaleX(1);
     opacity: 1;
        }
    }
}
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    
    
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 15px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.8);
transform: all 0.2s ease 0s;
cursor: pointer;

 
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`