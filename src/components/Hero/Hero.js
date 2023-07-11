import React from 'react';
import styled from 'styled-components';
import HeroMedia from '../Hero/images/hero_iphone14_bg.jpg'
import HeroImg from '../Hero/images/hero_iphone14spring.jpg'
import HeroImg2 from '../Hero/images/hero_iphone14_yellow.jpg'
import HeroMacImg from '../Hero/images/hero_macbook_air_15.jpg'
import HeroMacMobile from '../Hero/images/hero_macbook_air_15_Mobile.jpg'
import HeroYellowMobile from '../Hero/images/hero_iphone14_yellowMobile.jpg'
import HeroyellowTablet from '../Hero/images/hero_iphone14_yellowTablet.jpg';
import HeroIphone14 from '../Hero/images/hero_iphone14pro_springTablet.jpg';
import HeroMacTablet from '../Hero/images/hero_macbook_air_15_tablet.jpg';


const HeroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
`

const HeroBox = styled.div`
  width: 100%;
  height:736px;
  background-size: 3008px 736px;
  background-image: url(${HeroMedia});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1068px) {
    width: 100%;
    height: 694px;
    background-size: 1068px 694px;
    background-repeat: no-repeat;
    background-image: url(${HeroIphone14});
  }

  @media (max-width: 734px){
    width: 100%;
    height: 548px;
    background-image: url(${HeroImg});
    background-size: 734px 548px;
    background-repeat: no-repeat;
  }
`

const HeroMac = styled.div`
  width: 100%;
  height:736px;
  background-size: 3008px 736px;
  background-image: url(${HeroMacImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1068px) {
    width: 100%;
    height: 694px;
    background-size: 1068px 694px;
    background-repeat: no-repeat;
    background-image: url(${HeroMacTablet});
  }

  @media (max-width: 734px){
    width: 100%;
    height: 548px;
    background-image: url(${HeroMacMobile});
    background-size: 734px 548px;
    background-repeat: no-repeat;
  }
`

const HeroBox2 = styled.div`
  width: 100%;
  height:736px;
  background-size: 3008px 736px;
  background-image: url(${HeroImg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1068px) {
    width: 100%;
    height: 694px;
    background-size: 1068px 694px;
    background-repeat: no-repeat;
    background-image: url(${HeroyellowTablet});
  }

  @media (max-width: 734px){
    width: 100%;
    height: 548px;
    background-image: url(${HeroYellowMobile});
    background-size: 734px 548px;
    background-repeat: no-repeat;
  }
`

export default function Hero() {
  return (
    <HeroContainer>
        <HeroBox2/>
        <HeroBox/>
        <HeroMac/>
    </HeroContainer>
  )
}
