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
import {SlArrowRight} from 'react-icons/sl';




const HeroContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
`

const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
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

const HeroTitle = styled.h1`
  font-size: 50px;
  margin-top: 35px;
  @media (max-width: 734px) {
    font-size: 32px;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: 0.004em;
  }
`

const HeroTitlePro = styled.h1`
  font-size: 50px;
  margin-top: 35px;
  color: #fff;
  @media (max-width: 734px) {
    font-size: 32px;
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: 0.004em;
  }
`

const HeroP = styled.p `
  font-size: 20px;
  &:hover {
    border-bottom: 2px solid #06c;
  }
`

const HeroTextPro = styled.p`
  color: #fff;
  margin-top: 10px;
  font-size: 30px;
  @media (max-width: 734px) {
    font-size: 19px;
    line-height: 1.125;
    font-weight: 400;
    letter-spacing: 0em;
  }
`

const HeroText = styled.p`
  margin-top: 10px;
  font-size: 32px;
  @media (max-width: 734px) {
    font-size: 19px;
    line-height: 1.125;
    font-weight: 400;
    letter-spacing: 0em;
  }
`

const HeroBoxLink = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`

const HeroIcon = styled.i`
  margin-left: 5px;
  font-weight: 700;
`

const HeroLink = styled.a`  
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 20px;
  color: #06c;
  font-size: 14px; 
`

export default function Hero() {

  const Icon = {
    size: '10px',
  }

  return (
    <HeroContainer>
        <HeroBox2>
            <HeroTitle>iPhone 14</HeroTitle>
            <HeroText>Maravilindo.</HeroText>
            <HeroBoxLink>
              <HeroLink>
                <HeroP>
                  Saiba Mais 
                </HeroP>               
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon> 
              </HeroLink> 
              <HeroLink>
                <HeroP>
                  Comprar  
                </HeroP> 
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon>
              </HeroLink>
            </HeroBoxLink>
        </HeroBox2>
        <HeroBox>
        <HeroTitlePro>iPhone 14 Pro</HeroTitlePro>
            <HeroTextPro>Pro. E além</HeroTextPro>
            <HeroBoxLink>
              <HeroLink>
                <HeroP>
                  Saiba Mais 
                </HeroP>               
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon> 
              </HeroLink> 
              <HeroLink>
                <HeroP>
                  Comprar  
                </HeroP> 
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon>
              </HeroLink>
            </HeroBoxLink>
        </HeroBox>
        <HeroMac>
        <HeroTitle>MacBook Air</HeroTitle>
            <HeroText>Espaço sem perder a fineza</HeroText>
            <HeroBoxLink>
              <HeroLink>
                <HeroP>
                  Saiba Mais 
                </HeroP>               
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon> 
              </HeroLink> 
              <HeroLink>
                <HeroP>
                  Comprar  
                </HeroP> 
                <HeroIcon>
                  <SlArrowRight {...Icon}/>
                </HeroIcon>
              </HeroLink>
            </HeroBoxLink>
        </HeroMac>
    </HeroContainer>
  )
}
