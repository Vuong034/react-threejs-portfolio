import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar.jsx'
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 1000px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #02c6c9;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 1000px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #02c6c9;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1000px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  color: white;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 5s infinite ease alternate;
  @media only screen and (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  @keyframes animate {
    to {
      transform: translatey(50px);
      transform: rotate(10deg);
    }
  }
`;

const Hero = () => {
    return (
      <Section>
        <Navbar />
        <Container>
          <Left>
            <Title>Design. Integrate. Support.</Title>
            <WhatIDo>
              <Line />
              {/* replace with item */}
              <Subtitle>My Goal is</Subtitle>
            </WhatIDo>
            <Desc>
              Creating and maintaining innovative experiences that drive productivity.
            </Desc>
            <Button>Learn More</Button>
          </Left>
          <Right>
            {/* <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Suspense>
            </Canvas>*/}
            <Img src="./img/ship2.svg" /> 
          </Right>
        </Container>
      </Section>
    )
}

export default Hero