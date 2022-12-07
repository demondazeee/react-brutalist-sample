import styled from "styled-components"
import { H1, H2 } from "../elements/Headings"
import { P1 } from "../elements/Paragraphs"
import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"


const FeaturesSectionContainer = styled(Section)`
    border-bottom: 2px solid var(--color-black);

    & ${Container} {
        padding: 0;
    }
`

const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`

const FeaturesItem = styled.div`
    background-color: #87E911 ;
`

const FeaturesItem2 = styled.div`
    padding: 20px;
`

const ImageContainer = styled.div`
    max-height: 100%;
    border-right: 2px solid #000;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const FeatureImg = styled.img`
    height:100%; 
    width: 100%; 
    object-fit: cover; 
`

const FeaturesSection = () =>{
    return (
        <>
            <FeaturesSectionContainer>
                <Container>
                    <FeaturesContainer>
                        <FeaturesItem>
                            <ImageContainer>
                                <FeatureImg src="img1.svg" />
                            </ImageContainer>
                        </FeaturesItem>
                        <FeaturesItem2>
                           <H2>Lorem ipsum dolor,</H2>
                           <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis recusandae debitis facere animi voluptate repellendus provident labore accusamus iusto.</P1>
                        </FeaturesItem2>
                    </FeaturesContainer>
                </Container>
            </FeaturesSectionContainer>
        </>
    )
}

export default FeaturesSection