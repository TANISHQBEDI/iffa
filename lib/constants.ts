export const YEARS = [2025, 2024, 2023, 2022];

export const EVENT_SECTIONS = ['Submissions', 'Nominations', 'Winners'];

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


export const PLAYLIST_ID = process.env.PLAYLIST_ID;

export const API_BASE_URL = process.env.API_BASE_URL;

// Global cache duration used across client-side fetch helpers (seconds)
export const CACHE_SECONDS = 2 * 60 * 60; // 2 hours

export const FOOTER_ACKNOWLEDGEMENT = `We acknowledge the Traditional Owners of the land where we work and live. 
We pay our respects to Elders past, present and emerging. 
We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities 
who also work and live on this land.`

export const FOOTER_LINKS = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact-us'
    },
    {
        label: 'IFFA Global',
        href: '/ambassadors'
    },
    {
        label: 'Partner with us',
        href: '/partner-with-us'
    }
]

export const FOOTER_SOCIALS: SocialLink[] = [
    { label: 'Facebook', href: 'https://www.facebook.com/iffaawardss', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/iffaawards/', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iffaawards/', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCO2xJ6Cw1-5o1iolIJtO4yQ', icon: 'youtube' },
]
