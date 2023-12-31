import React from 'react'
import styled from 'styled-components'

export default function Login() {
    return (
        <Container>

            <BackGround>
                <img src="images/login-background.jpg" alt="" />
            </BackGround>

            <CTA>

                <CTALogoOne src='images/cta-logo-one.svg' />

                <SignUp>GET ALL THERE</SignUp>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi, impedit fugit assumenda delectus dolore officiis possimus similique aliquam quod. Assumenda, maxime suscipit quis sunt facilis laboriosam fuga qui voluptas.
                </Description>

                <CTALogoTwo src='images/cta-logo-two.png' />
            </CTA>

        </Container>
    )
}


const Container = styled.div`
min-height: calc(100vh - 70px);
position: relative;
display: flex;
align-items: top;
justify-content: center;

`

const BackGround = styled.div`
position: fixed;
top:0;
bottom: 0;
right: 0;
left: 0;
z-index: -1;
opacity: 0.7;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    margin-top: 100px;

    display: flex;
    flex-direction: column; 
    align-items: center;

`

const CTALogoOne = styled.img`
    

`

const CTALogoTwo = styled.img`
 width: 90% ;

`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top:8px ;
margin-bottom: 12px;

&:hover{
    background: #0483ee ;
}
`

const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`