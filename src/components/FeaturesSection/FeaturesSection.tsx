import styled from "styled-components";
import {H2} from "../elements/Headings";
import {P1} from "../elements/Paragraphs";
import {Container} from "../layouts/Container";
import {Section} from "../layouts/Section";

const GridSection = styled(Container)`
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    border: 1px solid black
`

const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
`
const ImageContainer = styled.div ``
const Img = styled.img `
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`

const FeatureSection = () => {
    return (
        <>
            <GridSection>
                <ImageContainer>
                    <Img src="img1.svg"/>
                </ImageContainer>
                <TextContainer>
                    <H2>Lorem ipsum dolor sit amet.</H2>
                    <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti!</P1>
                </TextContainer>
                <TextContainer>
                    <H2>Lorem ipsum dolor sit amet.</H2>
                    <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti!</P1>
                </TextContainer>
                <ImageContainer>
                    <Img src="img2.jpg"/>
                </ImageContainer>
                <ImageContainer>
                    <Img src="img3.jpg"/>
                </ImageContainer>
                <TextContainer>
                    <H2>Lorem ipsum dolor sit amet.</H2>
                    <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti!</P1>
                </TextContainer>
            </GridSection>
        </>
    )
}

export default FeatureSection;
