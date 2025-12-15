import { useState, useRef, useEffect } from "react"
import Avatar from "./Avatar"
import { RECENT_PEOPLE, RECENT_SEARCH_TERMS } from "../constants/search"

const SEARCH_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" focusable="false">
        <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a1 1 0 001.41-1.41zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
    </svg>
)

const CLOCK_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" focusable="false">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
    </svg>
)

type SearchProps = {
    isMobile?: boolean
}

const Search = ({ isMobile = false }: SearchProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<boolean>(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
                setIsMobileDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    const handleInputFocus = () => {
        if (isMobile) {
            setIsMobileDropdownOpen(true)
        } else {
            setIsDropdownOpen(true)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        if (!isMobile) {
            setIsDropdownOpen(true)
        }
    }

    const handleClearRecent = () => {
        setIsDropdownOpen(false)
        setIsMobileDropdownOpen(false)
    }

    const handlePersonClick = (name: string) => {
        setSearchQuery(name)
        setIsDropdownOpen(false)
        setIsMobileDropdownOpen(false)
    }

    const handleSearchTermClick = (term: string) => {
        setSearchQuery(term)
        setIsDropdownOpen(false)
        setIsMobileDropdownOpen(false)
    }

    if (isMobile) {
        return (
            <div className="relative" ref={searchRef}>
                <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="p-2 text-[#00000099] hover:text-black transition-colors"
                    aria-label="Search"
                >
                    {SEARCH_ICON}
                </button>

                {/* Mobile Dropdown */}
                {isMobileDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[90vw] max-w-[400px] bg-white rounded-lg shadow-lg border border-[#8c8c8c33] z-50">
                        <div className="p-4">
                            <div className="relative mb-4">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00000099]">
                                    {SEARCH_ICON}
                                </div>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onFocus={handleInputFocus}
                                    className="w-full pl-10 pr-4 py-2 bg-white rounded-[35px] text-sm text-[#000000e6] placeholder:text-[#00000099] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2] transition-colors"
                                />
                            </div>

                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-semibold text-[#000000e6]">Recent</h3>
                                <button
                                    onClick={handleClearRecent}
                                    className="text-sm text-[#0a66c2] hover:underline"
                                >
                                    Clear
                                </button>
                            </div>

                            {/* Recent People */}
                            {RECENT_PEOPLE.length > 0 && (
                                <div className="mb-4">
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {RECENT_PEOPLE.map((person) => (
                                            <button
                                                key={person.id}
                                                onClick={() => handlePersonClick(person.name)}
                                                className="flex flex-col items-center gap-1 min-w-[60px] hover:opacity-80 transition-opacity"
                                            >
                                                <Avatar url={person.url} size="sm" />
                                                <span className="text-xs text-[#000000e6] text-center truncate w-full">
                                                    {person.name}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Recent Search Terms */}
                            {RECENT_SEARCH_TERMS.length > 0 && (
                                <div className="space-y-1">
                                    {RECENT_SEARCH_TERMS.map((searchTerm) => (
                                        <button
                                            key={searchTerm.id}
                                            onClick={() => handleSearchTermClick(searchTerm.term)}
                                            className="w-full flex items-center gap-3 p-2 hover:bg-[#f3f2ef] rounded-md transition-colors text-left"
                                        >
                                            <span className="text-[#00000099]">{CLOCK_ICON}</span>
                                            <span className="text-sm text-[#000000e6]">{searchTerm.term}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="flex-1 relative" ref={searchRef}>
            <div className="relative w-full">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00000099]">
                    {SEARCH_ICON}
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleInputFocus}
                    className="w-full pl-10 pr-4 py-2 bg-white rounded-[35px] border border-[#0000004d] text-sm text-[#000000e6] placeholder:text-[#00000099] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2] transition-colors w-full"
                />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-[#8c8c8c33] z-50">
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-[#000000e6]">Recent</h3>
                            <button
                                onClick={handleClearRecent}
                                className="text-sm text-[#0a66c2] hover:underline"
                            >
                                Clear
                            </button>
                        </div>

                        {/* Recent People */}
                        {RECENT_PEOPLE.length > 0 && (
                            <div className="mb-4">
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {RECENT_PEOPLE.map((person) => (
                                        <button
                                            key={person.id}
                                            onClick={() => handlePersonClick(person.name)}
                                            className="flex flex-col items-center gap-1 min-w-[60px] hover:opacity-80 transition-opacity"
                                        >
                                            <Avatar url={person.url} size="sm" />
                                            <span className="text-xs text-[#000000e6] text-center truncate w-full">
                                                {person.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recent Search Terms */}
                        {RECENT_SEARCH_TERMS.length > 0 && (
                            <div className="space-y-1">
                                {RECENT_SEARCH_TERMS.map((searchTerm) => (
                                    <button
                                        key={searchTerm.id}
                                        onClick={() => handleSearchTermClick(searchTerm.term)}
                                        className="w-full flex items-center gap-3 p-2 hover:bg-[#f3f2ef] rounded-md transition-colors text-left"
                                    >
                                        <span className="text-[#00000099]">{CLOCK_ICON}</span>
                                        <span className="text-sm text-[#000000e6]">{searchTerm.term}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
