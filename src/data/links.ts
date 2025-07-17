export interface LinkItem {
    id: number;
    link: string;
    text: string;
}

export const links: LinkItem[] = [
    { id: 1, link: 'https://arturbomtempo.dev/', text: 'Portfólio' },
    {
        id: 2,
        link: 'https://www.youtube.com/@ArturBomtempoDev',
        text: 'Canal do YouTube',
    },
    {
        id: 3,
        link: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0U0VHBLeUpCYVR1TmRsdS1SakN5Z0pWTE1Vd3xBQ3Jtc0tuaUh4RDdaeThpTUtYVTk1QmxHaWttUzlNUFZ0Sk5BYmtUbFBKQ0dTN2hBbmg0NVFuNEx4ZkhEYTZrcFQxYmZlUFUxZ0FVR25KaktRaGU0WDlteTNGcklXOTE5UFg4bHQ2bmZoV0V4M3NXUEs5QzNHQQ&q=https%3A%2F%2Fdiscord.gg%2FPerNehkHE3&v=f_1wsIr-hQw',
        text: 'Comunidade do Discord',
    },
    { id: 4, link: 'https://medium.com/@arturbomtempo', text: 'Artigos no Medium' },
    { id: 5, link: 'https://materials.arturbomtempo.dev/', text: 'Meus Materiais' },
    { id: 6, link: 'https://www.npmjs.com/~arturbomtempo', text: 'Perfil no NPM' },
    { id: 7, link: 'mailto:arturbcolen@gmail.com', text: 'E-mail' },
    { id: 8, link: 'mailto:https://orcid.org/0009-0006-2046-455X', text: 'OrcID' },
];
