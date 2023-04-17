import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100vh;
  position: relative;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth !important;
  overflow-y: auto;
  scrollbar-width: none;
  overscroll-behavior-y: contain;
  -ms-overflow-style: none;
  color: white;
  background: radial-gradient(100% 225% at 0% 0%, #DE3E3E 0%, #17115C 100%), radial-gradient(100% 225% at 100% 0%, #FF9040 0%, #FF0000 100%), linear-gradient(180deg, #CE63B7 0%, #ED6283 100%), radial-gradient(100% 120% at 75% 0%, #A74600 0%, #000000 100%), linear-gradient(310deg, #0063D8 0%, #16009A 50%);
  background-blend-mode: overlay, color-dodge, color-burn, color-dodge, normal;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
