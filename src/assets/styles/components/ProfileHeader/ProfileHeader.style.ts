import styled from 'styled-components';

export const ProfileContainer = styled.div`
    text-align: center;

    img {
        width: 120px;
        border: 2px solid var(--border-color);
        border-radius: 50%;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 600;
        margin: 1vh 0;
    }

    p {
        font-size: 1em;
        opacity: 60%;
    }
`;

export const SocialMediaIconsContainer = styled.div`
    margin-top: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
