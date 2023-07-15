import React from 'react';
import styled from 'styled-components';
import {AiFillApple} from 'react-icons/ai';
import {SlArrowRight} from 'react-icons/sl'; 
// Fotos Desktop
import HeroWatch from '../../components/Hero/images/promo_apple_watch_series_8tablet.jpg'
import HeroMac from '../../components/Hero/images/promo_ipadprotablet.jpg'
import HeroStudio from '../../components/Hero/images/promo_mac_studio.jpg'
import HeroMacPro from '../../components/Hero/images/promo_mac_pro.jpg'
import HeroAirPods from '../../components/Hero/images/promo_airpods_pro.jpg'
import HeroFitness from '../../components/Hero/images/promo_fitness.jpg'

// Fotos Mobile
import HeroWatchMobile from '../../components/Hero/images/promo_apple_watch_series_8mobile.jpg'
import HeroMacMobile from '../../components/Hero/images/promo_ipadpro_refreshmobile.jpg'
import HeroStudioMobile from '../../components/Hero/images/promo_mac_studiomobile.jpg'
import HeroMacProMobile from '../../components/Hero/images/promo_mac_promobile.jpg'
import HeroAirPodsMobile from '../../components/Hero/images/promo_airpods_promobile.jpg'
import HeroFitnessMobile from '../../components/Hero/images/promo_fitnessmobile.jpg'

const Hero = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    overflow-x: hidden;
    gap: 10px;
    padding: 10px;
    @media (max-width: 1068px) {
        grid-template-columns: 1fr;
    }
`

const HeroWth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroWatch});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroWatchMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const HeroBoxMac = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroMac});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroMacMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const HeroBoxStudi = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroStudio});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroStudioMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const HeroBoxPro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroMacPro});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroMacProMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const HeroAir = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroAirPods});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroAirPodsMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const HeroFitnes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${HeroFitness});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 1262px 580px;
    height: 580px;
    width: 100%;
    @media (max-width: 768px) {
        background-image: url(${HeroFitnessMobile});
        width: 100%;
        height: 548px;
        background-size: 734px 548px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`
// TEXTOS

const HeroTitle = styled.h1`
    display: flex;
    align-self: center;
    font-size: 40px;
    margin-top: 35px;
    color: #fff;
    @media (max-width: 734px) {
        font-size: 32px;
        line-height: 1.125;
        font-weight: 600;
        letter-spacing: 0.004em;
  }
`

const HeroTitlePro = styled.h1`
    display: flex;
    align-self: center;
    font-size: 40px;
    margin-top: 35px;
    color: #000;
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
  color: #000;
  margin-top: 10px;
  font-size: 20px;
  @media (max-width: 734px) {
    font-size: 19px;
    line-height: 1.125;
    font-weight: 400;
    letter-spacing: 0em;
  }
`

const HeroText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
  @media (max-width: 734px) {
    font-size: 19px;
    line-height: 1.125;
    font-weight: 400;
    letter-spacing: 0em;
  }
`
const HeroTextWth = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #FF2D00;
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

export default function HeroContainer() {

    const Icon = {
        size: '10px',
      }

  return (
    <Hero>
        <HeroWth>
        <HeroTitle><AiFillApple/> WATCH</HeroTitle>
            <HeroTextWth>SERIES 8</HeroTextWth>
            <HeroText>Um grande salto para sua saúde.</HeroText>
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
        </HeroWth>
        <HeroBoxMac>
        <HeroTitle>AirPad Pro</HeroTitle>
            <HeroText>Com a potência do M2</HeroText>
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
        </HeroBoxMac>
        <HeroBoxStudi>
        <HeroTitlePro>Mac Studio</HeroTitlePro>
            <HeroTextPro>Com a potência do M2 Max e M2 Ultra.</HeroTextPro>
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
        </HeroBoxStudi>
        <HeroBoxPro>
        <HeroTitlePro>Mac Pro</HeroTitlePro>
            <HeroTextPro>Com a revolução do chip da Apple.</HeroTextPro>
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
        </HeroBoxPro>
        <HeroAir>
        <HeroTitle>AirPods Pro</HeroTitle>
            <HeroText>E refez-se o som.</HeroText>
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
        </HeroAir>
        <HeroFitnes>
        <HeroTitlePro><AiFillApple/>Fitness+</HeroTitlePro>
            <HeroTextPro>De HIIT a yoga, treinos para todos os gostos.</HeroTextPro>
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
        </HeroFitnes>
    </Hero>
  )
}
