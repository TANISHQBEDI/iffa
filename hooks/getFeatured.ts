export const getFeaturedContent = async (revalidateSeconds = 3600): Promise<ContentItem[]> => {
    const base = process.env.API_BASE_URL
    if (!base) throw new Error('API_BASE_URL is not set')
    const url = new URL('home/featured', base).toString()

    const res = await fetch(url, { next: { revalidate: revalidateSeconds } })
    if (!res.ok) {
        // Throw to hit Next.js error.js boundary as requested
        throw new Error(`Failed to fetch featured content: ${res.status} ${res.statusText}`)
    }
    const data = (await res.json()) as unknown
    if (!Array.isArray(data)) {
        throw new Error('Featured content response is not an array')
    }
    return data as ContentItem[]
}