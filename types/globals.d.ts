export {};

declare global {
    type DisplayCardProps = {
        title: string;
        directorNames?: string[];
        imageUrl: string;
    }
}