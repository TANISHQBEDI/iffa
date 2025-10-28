export { };

declare global {
    type DisplayCardProps = {
        title: string;
        directorNames?: string[];
        imageUrl: string;
    }

    type ContentItem = {
        contentId: number;
        title: string;
        portraitImageUrl: string;
        landscapeImageUrl: string;
        directors: string[];

    }

    export type SocialLink = {
        label: string
        href: string
        icon: 'facebook' | 'instagram' | 'linkedin' | 'youtube'
    }
}