import styled from "styled-components";

export const UL = styled.ul`
    list-style: none;
`
export const ListItem = styled.li`
    position: relative;
    cursor: pointer;

    &::before {
        content: "";
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 1px;
        transition: transform .2s ease-out;
        transform: scale(0);
        bottom: 0;
    }

    &:hover::before {
        transform: translateY(150%) ;
        transform: scale(1, 0.5);
        transform-origin: left;
    }
`