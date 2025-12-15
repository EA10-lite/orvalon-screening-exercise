// Recent search data for the search dropdown
export type RecentPerson = {
    id: number
    name: string
    title?: string
    url: string
}

export type RecentSearchTerm = {
    id: number
    term: string
}

export const RECENT_PEOPLE: RecentPerson[] = [
    {
        id: 1,
        name: "Geno Jose",
        url: "https://picsum.photos/200/300?random=1",
    },
    {
        id: 2,
        name: "Joseph Chacko",
        url: "https://picsum.photos/200/300?random=2",
    },
    {
        id: 3,
        name: "Gunjan Thapa",
        url: "https://picsum.photos/200/300?random=3",
    },
    {
        id: 4,
        name: "Ashish Agrawal",
        url: "https://picsum.photos/200/300?random=4",
    },
]

export const RECENT_SEARCH_TERMS: RecentSearchTerm[] = [
    {
        id: 1,
        term: "Siddarth P neobase",
    },
    {
        id: 2,
        term: "joseph chacko pitchmatter",
    },
    {
        id: 3,
        term: "oluwadunsin",
    },
]

