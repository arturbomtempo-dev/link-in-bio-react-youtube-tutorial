export interface LinkItem {
    id: number;
    link: string;
    text: string;
}

export const links: LinkItem[] = [
    {
        id: 1,
        link: 'https://www.youtube.com/@ArturBomtempoDev',
        text: 'Acompanhe o canal do YouTube',
    },
    {
        id: 2,
        link: 'https://discord.gg/6gbYPRKx',
        text: 'Faça parte da nossa comunidade do Discord',
    },
    { id: 3, link: 'https://arturbomtempo.dev/', text: 'Acesse meu portfólio' },
    { id: 4, link: 'mailto:arturbcolen@gmail.com', text: 'Entre em contato comigo por e-mail' },
    {
        id: 5,
        link: 'https://open.spotify.com/user/ogddurx9hwlbmrom6wokt87je?si=95ba43077b9a42c3',
        text: 'Ouça minhas playlists no Spotify',
    },
];
