import React from 'react';
import styled from 'styled-components';
import HeroMedia from '../Hero/images/hero_iphone14_bg.jpg'
import HeroImg from '../Hero/images/hero_iphone14spring.jpg'

const HeroContainer = styled.div`
    display:flex;
    justify-content: center;
`

const HeroBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${HeroMedia});
  background-repeat: no-repeat;
  background-size: 100% 500px;
  @media (max-width: 1068px){
    width: 100vw;
    height: 100vh;
    background-image: url(${HeroImg});
  }
`

export default function Hero() {
  return (
    <HeroContainer>
        <HeroBox>
        </HeroBox>
    </HeroContainer>
  )
}
