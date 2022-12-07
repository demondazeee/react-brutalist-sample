import styled from "styled-components"
import { H2 } from "../elements/Headings"
import { Link } from "../elements/Links"
import { ListItem, UL } from "../elements/Lists"

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 0;
`

const NavLinkLists = styled(UL)`
    display: flex;
    gap: 1.6rem;
`

const NavBar = () =>{
    return (
        <>
            <Nav>
                <H2>Logo</H2>
                <NavLinkLists>
                    <ListItem>
                        <Link>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link>About</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Services</Link>
                    </ListItem>
                </NavLinkLists>
            </Nav>
        </>
    )
}

export default NavBar