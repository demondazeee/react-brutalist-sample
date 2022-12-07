import styled from "styled-components";

export const Primary_Button = styled.a`
    cursor: pointer;
    display: inline-block;
    color: #fff;
    background-color: var(--bg-blue);
    padding: .5rem 2rem;
    border: 1.5px solid #000;
    transition: all .2s ease-out;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 2px 2px #000;
    }

    &:active {
        transform: translate(-1px, -1px);
        box-shadow: 1px 1px #000;
    }
`