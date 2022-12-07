import { ReactNode } from "react"
import styled from "styled-components"
import { Container } from "./Container"

type StyleProps = {
    mb?: string
}

const HeaderContainer = styled.header`
    color: #000;
    margin-bottom: ${({mb}: StyleProps) => mb ? `${mb}px` : '150px'};
`


type HeaderProps = {
    marginBottom?: string
    children: ReactNode
}


const Header = ({marginBottom,children}: HeaderProps) =>{
    return (
        <>
            <HeaderContainer mb={marginBottom}>
               <Container>
                {children}
               </Container>
            </HeaderContainer>
        </>
    )
}

export default Header