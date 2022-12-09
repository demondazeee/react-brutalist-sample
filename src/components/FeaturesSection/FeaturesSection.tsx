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
    grid-auto-rows: 1fr;

`

const FeaturesItem = styled.div`
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
`

const FeaturesItem2 = styled.div`
    padding: 20px;
    border-bottom: 2px solid #000;
    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`

const ImageContainer = styled.div`
    min-height: 100%;
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
                        <FeaturesItem>
                            <H2>Lorem ipsum dolor,</H2>
                           <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis recusandae debitis facere animi voluptate repellendus provident labore accusamus iusto.</P1>
                        </FeaturesItem>
                        <FeaturesItem2>
                            <ImageContainer>
                                <FeatureImg src="img2.jpg" />
                            </ImageContainer>
                        </FeaturesItem2>
                        <FeaturesItem>
                            <ImageContainer>
                                <FeatureImg src="img3.jpg" />
                            </ImageContainer>
                        </FeaturesItem>
                        <FeaturesItem2>
                           <H2>Lorem ipsum dolor,</H2>
                           <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis recusandae debitis facere animi voluptate repellendus provident labore accusamus iusto.</P1>
                        </FeaturesItem2>
                    </FeaturesContainer>
            </FeaturesSectionContainer>
        </>
    )
}

export default FeaturesSection