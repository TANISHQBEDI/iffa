export {};
declare global {
    type DisplayCardProps = {
        title: string;
        directorNames?: string[];
        imageUrl?: string;
        size?: 'sm' | 'md' | 'lg';
        id: number | string;
    }

    type ContentItem = {
        contentId: number;
        title: string;
        portraitImageUrl: string;
        landscapeImageUrl: string;
        directors: string[];

    }

    // --- DTOs used by public API ---
    export type FeaturedContentDto = {
        contentId: number;
        title: string;
        portraitImageUrl: string | null;
        landscapeImageUrl: string | null;
        directors: string[];
    }

    export type SubmissionSummaryDto = {
        submissionId: number;
        contentId: number;
        title: string;
        directors?: string[];
        awardCategoryName?: string | null;
        editionYear?: number;
        submissionYear?: number;
        crewMemberName?: string | null;
        nominated?: boolean;
        winner?: boolean;
        featured?: boolean;
    }

    export type YearlyAwardsDto = {
        year: number;
        submissions: SubmissionSummaryDto[];
        nominations: SubmissionSummaryDto[];
        winners: SubmissionSummaryDto[];
    }

    export type WinnerDto = {
        submissionId: number;
        editionYear: number;
        contentId: number;
        contentTitle: string;
        contentPortraitImage?: string | null;
        awardCategoryId: number;
        awardCategoryName: string;
        crewMemberId?: number | null;
        crewMemberName?: string | null;
    }

    export type CrewMemberSummary = {
        id: number;
        name: string;
        photoUrl?: string | null;
        roles?: string[];
    }

    export type ContentDetailDto = {
        id: number;
        title: string;
        synopsis?: string | null;
        releaseDate?: string | null;
        portraitImageUrl?: string | null;
        landscapeImageUrl?: string | null;
        contentType?: string | null;
        genres?: string[];
        languages?: string[];
        countries?: string[];
        crew?: CrewMemberSummary[];
    }

    export type CrewDetailDto = {
        id: number;
        name: string;
        imageUrl?: string | null;
        biography?: string | null;
        description?: string | null;
        contents?: { id: number; title: string; imageUrl?: string | null }[];
    }

    export type SocialLink = {
        label: string
        href: string
        icon: 'facebook' | 'instagram' | 'linkedin' | 'youtube'
    }

    export type NavItem = {
        label: string;
        href: string;             // direct link OR leave undefined to make it a trigger with children
        external?: boolean;
    };

    export type ContactSubmission = {
        id: number
        fullName: string
        phone: string
        address: string
        company: string
        email: string
        message: string
        createdAt: string
    }
}