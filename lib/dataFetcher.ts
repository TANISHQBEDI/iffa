import { API_BASE_URL, CACHE_SECONDS } from "./constants";

const base = API_BASE_URL
if (!base) throw new Error('API_BASE_URL is not set')

// Generic fetch helper that applies Next.js cache revalidation and consistent error handling
async function fetchJson<T>(path: string, options?: { params?: Record<string, string | number | undefined>, revalidateSeconds?: number }): Promise<T> {
    const { params, revalidateSeconds } = { params: undefined, revalidateSeconds: CACHE_SECONDS, ...(options || {}) }

    const url = new URL(path, base)
    if (params) {
        Object.entries(params).forEach(([k, v]) => {
            if (v !== undefined && v !== null) url.searchParams.set(k, String(v))
        })
    }

    const res = await fetch(url.toString(), { next: { revalidate: revalidateSeconds }})
    if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`Failed to fetch ${url.toString()}: ${res.status} ${res.statusText} ${text ? `- ${text}` : ''}`)
    }

    return res.json() as Promise<T>
}

export const getFeaturedContent = async (year?: number, revalidateSeconds?: number): Promise<FeaturedContentDto[]> => {

    const data = await fetchJson<FeaturedContentDto[]>('home/featured', { params: { year }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Featured content response is not an array')
    return data
}

export const getAwardsYears = async (startYear?: number, endYear?: number, revalidateSeconds?: number): Promise<YearlyAwardsDto[]> => {
    const data = await fetchJson<YearlyAwardsDto[]>('awards/years', { params: { startYear, endYear }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Awards years response is not an array')
    return data
}

export const getSubmissionsForYear = async (year: number, revalidateSeconds?: number): Promise<FeaturedContentDto[]> => {
    if (!year) throw new Error('year is required')
    const data = await fetchJson<FeaturedContentDto[]>('awards/submissions', { params: { year }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Submissions response is not an array')
    return data
}

export const getNominationsForYear = async (year: number, revalidateSeconds?: number): Promise<FeaturedContentDto[]> => {
    if (!year) throw new Error('year is required')
    const data = await fetchJson<FeaturedContentDto[]>('awards/nominations', { params: { year }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Nominations response is not an array')
    return data
}

export const getWinnersForYear = async (year: number, revalidateSeconds?: number): Promise<FeaturedContentDto[]> => {
    if (!year) throw new Error('year is required')
    const data = await fetchJson<FeaturedContentDto[]>('awards/winners', { params: { year }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Winners response is not an array')
    return data
}

export const getDetailedWinnersForYear = async (year: number, revalidateSeconds?: number): Promise<WinnerDto[]> => {
    if (!year) throw new Error('year is required')
    const data = await fetchJson<WinnerDto[]>('awards/winners/detailed', { params: { year }, revalidateSeconds })
    if (!Array.isArray(data)) throw new Error('Detailed winners response is not an array')
    return data
}

export const getContentDetail = async (id: number, revalidateSeconds?: number): Promise<ContentDetailDto> => {
    if (!id) throw new Error('content id is required')
    return fetchJson<ContentDetailDto>(`content/${id}`, { revalidateSeconds })
}

export const getCrewDetail = async (id: number, revalidateSeconds?: number): Promise<CrewDetailDto> => {
    if (!id) throw new Error('crew id is required')
    return fetchJson<CrewDetailDto>(`crew/${id}`, { revalidateSeconds })
}
