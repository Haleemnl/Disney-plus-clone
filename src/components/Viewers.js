import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
    return (
        <Container>

            <Wrap>

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/viewers-disney.webp"
                    />
                    <img
                        src="/images/viewers-disney.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </Wrap>
            <Wrap>

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/viewers-marvel.webp"
                    />
                    <img
                        src="/images/viewers-marvel.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </Wrap>
            <Wrap>

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/viewers-national.webp"
                    />
                    <img
                        src="/images/viewers-national.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </Wrap>
            <Wrap>

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/viewers-pixar.webp"
                    />
                    <img
                        src="/images/viewers-pixar.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </Wrap>
            <Wrap>

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/viewers-starwars.webp"
                    />
                    <img
                        src="/images/viewers-starwars.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </Wrap>

        </Container>
    )
}


const Container = styled.div`
margin-top: 30px;
display: grid;
/* important */
grid-template-columns: repeat(5, minmax(0, 1fr));
padding: 20px 0 26px;
grid-gap: 25px;
`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249,249,249);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    img {
        width: 100%;  
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`