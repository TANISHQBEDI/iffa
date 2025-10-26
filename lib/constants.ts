export const YEARS = [2025, 2024, 2023];

export type NavItem = {
    label: string;
    href?: string;             // direct link OR leave undefined to make it a trigger with children
    external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
    {
        href: 'https://www.eventbrite.com/e/iffa-awards-2025-tickets-1685823075199',
        label: 'Buy Tickets',
        external: true
    },
    {
        href: '/events',
        label: 'Events'
    },
    {
        href: '/partners-and-news',
        label: 'Partners & News'
    }
]


export const PLAYLIST_ID = "PLnYoY3EKzq0qe7TlzgkfjKNGPAgGoSfev";