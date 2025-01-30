import styled from 'styled-components';

export const Button = styled.a`
    width: 100%;
    margin-bottom: 2vh;
    border-radius: 5px;
    padding: 16px 44px;
    background-color: var(--white-color);
    color: var(--bg-color);
    text-align: center;
    text-decoration: none;
    transition: ease all 0.3s;

    &:link,
    &:visited {
        color: var(--bg-color);
    }

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;
