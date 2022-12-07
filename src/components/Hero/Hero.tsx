import styled from "styled-components"
import { Primary_Button } from "../elements/Buttons"
import { H1, H2 } from "../elements/Headings"
import { P1 } from "../elements/Paragraphs"
import { Card } from "../layouts/Cards"
import { Container } from "../layouts/Container"
import Header from "../layouts/Header"
import NavBar from "../NavBar/NavBar"

const NavHeader = styled.header`
    border-bottom: 2px solid #000;
    margin-bottom: 10%;
`
const HeroGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const HeroItems2 = styled(HeroItems)`
    display: flex;
    align-items: center;

`

const HeroButton = styled.div``


const HeroCard = styled(Card)`
    border-radius: .5rem;
    max-width: 15rem;
    position: relative;
    padding: 1rem 2rem;

    & > *:not(:last-child){
        margin-bottom: 10px;
    }
`
const HeroCard2 = styled(HeroCard)`
    background-color: #E11845;
    position: absolute;
    top: -3%;
    left: 5%;
    height: 100%;
    width: 100%;
    z-index: -1;
`

const HeroCard3 = styled(HeroCard)`
    background-color: #8931EF;
    position: absolute;
    top: -5%;
    left: 9%;
    height: 100%;
    width: 100%;
    z-index: -2;
`

const Hero = () =>{
    return (
        <>
           <NavHeader>
                <Container>
                    <NavBar />
                </Container>
            </NavHeader>
            <Header>
                <HeroGrid>
                    <HeroItems>
                        <H1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, possimus.</H1>
                        <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro.</P1>
                        <HeroButton>
                            <Primary_Button>Sign Up</Primary_Button>
                        </HeroButton>
                    </HeroItems>
                    <HeroItems2>
                        <HeroCard>
                            <H2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</H2>
                            <P1>Lorem ipsum dolor sit amet.</P1>
                            <HeroCard2 />
                            <HeroCard3 />
                        </HeroCard>
                        
                    </HeroItems2>
                </HeroGrid>
            </Header>
           
        </>
    )
}

export default Hero