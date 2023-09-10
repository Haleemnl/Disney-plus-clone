import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }


    return (


        <Carousel  {...settings}>

            <Wrap>


                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type="/images/slider-badging.webp"
                    />
                    <img
                        src="/images/slider-badging.webp"
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
                        type="/images/slider-badag.webp"
                    />
                    <img
                        src="/images/slider-badag.webp"
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
                        type="/images/slider-scale.webp"
                    />
                    <img
                        src="/images/slider-scale.webp"
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
                        type="/images/slider-scales.webp"
                    />
                    <img
                        src="/images/slider-scales.webp"
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>


            </Wrap>

        </Carousel >
    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;

ul li button {
    &:before{
        font-size: 10px;
        color: white;
    }
}

li.slick-active button::before{

}

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
cursor: pointer;
    img{
        border: 3px solid transparent;
         border-radius: 4px;
        width: 100%;
        height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition-duration: 300ms;

    &:hover{
        border: 4px solid rgba(249,249,249,0.8);
    }
    }

`