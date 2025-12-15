import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Search from "./Search"
import { USER } from "../constants/user"

const HOME_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
    </svg>
)

const NETWORK_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
    </svg>
)

const JOBS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
    </svg>
)

const MESSAGING_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
    </svg>
)

const NOTIFICATIONS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
    </svg>
)

const BUSINESS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
    </svg>  
)

const PREMIUM_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
    </svg>
)


const CHEVRON_DOWN_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16" focusable="false">
        <path d="M8 11L3 6h10z"></path>
    </svg>
)

const NAV_ITEMS = [
    { label: "Home", icon: HOME_ICON },
    { label: "My Network", icon: NETWORK_ICON },
    { label: "Jobs", icon: JOBS_ICON },
    { label: "Messaging", icon: MESSAGING_ICON },
    { label: "Notifications", icon: NOTIFICATIONS_ICON, badge: 12 },
]

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<number>(0)

    return (
        <header className="bg-white fixed top-0 z-[105] border-b border-[#8c8c8c33] w-full">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex-shrink-0">
                            <FaLinkedin size={40} color="#0a66c2" />
                        </Link>

                        <div className="hidden md:block flex-1">
                            <Search isMobile={false} />
                        </div>

                        <div className="md:hidden">
                            <Search isMobile={true} />
                        </div>
                    </div>

                    <nav className="flex items-center gap-1">
                        {NAV_ITEMS.map((item, index) => (
                            <NavbarItem
                                key={item.label}
                                label={item.label}
                                icon={item.icon}
                                isActive={activeItem === index}
                                badge={item.badge}
                                handleClick={() => setActiveItem(index)}
                            />
                        ))}

                        <NavbarDropdown
                            label="Me"
                            icon={<Avatar size="sm" url={USER.url} />}
                            isActive={activeItem === 5}
                            handleClick={() => setActiveItem(5)}
                        />

                        <NavbarDropdown
                            label="For Business"
                            icon={BUSINESS_ICON}
                            isActive={activeItem === 6}
                            handleClick={() => setActiveItem(6)}
                        />

                        <NavbarPremium label="Try Premium for NGN0" icon={PREMIUM_ICON} />
                    </nav>
                </div>
            </div>
        </header>
    )
}

type NavbarItemProps = {
    label: string
    icon: React.ReactNode
    isActive: boolean
    badge?: number
    handleClick: () => void
}

const NavbarItem = ({ label, icon, isActive, badge, handleClick }: NavbarItemProps) => {
    return (
        <button
            className={`navbar-item hover:text-black p-2 rounded-md cursor-pointer flex flex-col items-center min-w-[80px] relative transition-colors
                ${isActive ? "text-black active-item" : "text-[#00000099]"}`}
            onClick={handleClick}
        >
            <span className="navbar-item-icon relative">
                {icon}
                {badge && (
                    <span className="absolute -top-1 -right-1 bg-[#d11124] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                        {badge > 9 ? "9+" : badge}
                    </span>
                )}
            </span>
            <span className="text-xs font-[400] mt-1 hidden lg:block">{label}</span>
        </button>
    )
}

type NavbarDropdownProps = {
    label: string
    icon: React.ReactNode
    isActive: boolean
    handleClick: () => void
}

const NavbarDropdown = ({ label, icon, isActive, handleClick }: NavbarDropdownProps) => {
    return (
        <button
            className={`navbar-item hover:text-black p-2 rounded-md cursor-pointer flex flex-col items-center min-w-[80px] relative transition-colors
                ${isActive ? "text-black active-item" : "text-[#00000099]"}`}
            onClick={handleClick}
        >
            <span className="navbar-item-icon">{icon}</span>
            <span className="text-xs font-[400] mt-1 flex items-center gap-1">
                {label}
                <span className="text-[10px]">{CHEVRON_DOWN_ICON}</span>
            </span>
        </button>
    )
}

type NavbarPremiumProps = {
    label: string
    icon: React.ReactNode
}

const NavbarPremium = ({ label, icon }: NavbarPremiumProps) => {
    return (
        <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#f3f2ef] transition-colors group">
            <span className="text-[#915907] transition-colors">
                {icon}
            </span>
            <span className="text-xs font-[400] text-[#0009]">
                {label}
            </span>
        </button>
    )
}

export default Navbar