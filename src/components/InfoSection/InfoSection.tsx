import styled from "styled-components"
import { Primary_Button } from "../elements/Buttons"
import { H2 } from "../elements/Headings"
import { P_Italic } from "../elements/Paragraphs"
import { Card } from "../layouts/Cards"
import { Container } from "../layouts/Container"
import { Section } from "../layouts/Section"

const InfoSectionContainer = styled(Section)`
    background-color: var(--bg-pink);
    padding: 2rem 0 2rem 0;
    border-bottom: 2px solid var(--color-black);
    border-top: 2px solid var(--color-black);
`

const InfoCard = styled(Card)`

    flex-basis: 60rem;
    text-align: center;
    padding: 2rem;
    box-shadow: 5px 5px var(--color-black);

    & > *:not(:last-child){
        margin-bottom: 20px;
    }
`

const CardContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
`

const InfoSection = () =>{
    return (
        <>
            <InfoSectionContainer>
                <Container>
                    <CardContainer>
                        <InfoCard>
                            <H2>Lorem ipsum dolor sit amet.</H2>
                        <P_Italic>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus ipsum voluptatem ea. Consectetur praesentium corporis consequatur unde numquam!</P_Italic>
                        </InfoCard>
                    </CardContainer>
                </Container>
            </InfoSectionContainer>
        </>
    )
}

export default InfoSection