import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import HeroContainer from '../components/HeroContainer/HeroContainer';

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
    </Container>
  )
}
