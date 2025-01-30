import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 5vh;
    color: var(--white-color);
    text-align: center;

    p {
        font-size: 0.9em;
    }

    a {
        transition: ease all 0.3s;
        opacity: 60%;

        &:link,
        &:visited {
            color: var(--white-color);
            text-decoration: none;
        }

        &:hover {
            border-bottom: 2px solid var(--primary-color);
        }
    }
`;
