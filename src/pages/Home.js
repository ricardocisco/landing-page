import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import HeroContainer from '../components/HeroContainer/HeroContainer';
import Carousel from '../components/Carrosel/Carrosel';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
    display: block;
    height: 100vh;
`

export default function Home() {
  return (
    <Container>
        <Navbar/>
        <Hero/>
        <HeroContainer />
        <Carousel/>
        <Footer/>
    </Container>
  )
}
