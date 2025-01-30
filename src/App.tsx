import { LinksContainer, MainContainer } from './assets/styles/pages/Home/Home.style';
import { Footer } from './components/Footer';
import { LinkButton } from './components/LinkButton';
import { ProfileHeader } from './components/ProfileHeader';

export function App() {
    return (
        <>
            <MainContainer>
                <ProfileHeader />
                <LinksContainer>
                    <LinkButton
                        link="https://www.youtube.com/@ArturBomtempoDev"
                        text="Acompanhe o canal do YouTube"
                    />
                    <LinkButton
                        link="https://discord.gg/6gbYPRKx"
                        text="Faça parte da nossa comunidade do Discord"
                    />
                    <LinkButton link="https://arturbomtempo.dev/" text="Acesse meu portfólio" />
                    <LinkButton
                        link="mailto:arturbcolen@gmail.com"
                        text="Entre em contato comigo por e-mail"
                    />
                    <LinkButton
                        link="https://open.spotify.com/user/ogddurx9hwlbmrom6wokt87je?si=95ba43077b9a42c3"
                        text="Ouça minhas playlists no Spotify"
                    />
                </LinksContainer>
                <Footer />
            </MainContainer>
        </>
    );
}
