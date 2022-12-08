import styled from "styled-components";

export const Primary_Button = styled.a`
    font-size: 2rem;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    background-color: var(--bg-blue);
    padding: .5rem 2rem;
    border: 2px solid #000;
    transition: all .2s ease-out;

    &:hover {
        transform: translate(-5px, -5px);
        box-shadow: 5px 5px #000;
    }

    &:active {
        transform: translate(-3px, -3px);
        box-shadow: 3px 3px #000;
    }
`