import { ReactElement } from 'react';
import { SocialMediaLink } from '../../../styles/components/ProfileHeader/SocialMediaIcon/SocialMediaIcon.style';

interface SocialMediaIconProps {
    link: string;
    icon: ReactElement;
}

export function SocialMediaIcon({ link, icon }: SocialMediaIconProps) {
    return (
        <SocialMediaLink href={link} target="_blank">
            {icon}
        </SocialMediaLink>
    );
}
