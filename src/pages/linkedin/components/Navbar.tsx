import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Search from './Search'
import { USER } from '../constants/user'
import { RiArrowDownSFill } from 'react-icons/ri'
import { HOME_ICON, NETWORK_ICON, JOBS_ICON, MESSAGING_ICON, NOTIFICATIONS_ICON, BUSINESS_ICON } from './icons'



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
          <div className="flex items-center gap-4 flex-1">
            <Link to="/" className="flex-shrink-0" aria-label="Home">
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
              className="border-right border-[#8c8c8c33]"
            />

            <div className="flex items-center">
              <NavbarDropdown
                label="For Business"
                icon={BUSINESS_ICON}
                isActive={activeItem === 6}
                handleClick={() => setActiveItem(6)}
              />

              <NavbarPremium label="Try Premium for NGN0" />
            </div>
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
      className={`navbar-item hover:text-black p-2 rounded-md cursor-pointer flex flex-col items-center relative transition-colors ${
        isActive ? 'text-black active-item' : 'text-[#00000099]'
      }`}
      onClick={handleClick}
      aria-label={label}
    >
      <span className="navbar-item-icon relative">
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-2.5 bg-[#d11124] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
            {badge > 9 ? '9+' : badge}
          </span>
        )}
      </span>
      <span className="text-xs font-[400] mt-1 hidden lg:block whitespace-nowrap">{label}</span>
    </button>
  )
}

type NavbarDropdownProps = {
    label: string
    icon: React.ReactNode
    isActive: boolean
    handleClick: () => void
    className?: string
}

const NavbarDropdown = ({ label, icon, isActive, handleClick, className }: NavbarDropdownProps) => {
  return (
    <button
      className={`navbar-item hover:text-black p-2 cursor-pointer flex flex-col items-center relative transition-colors ${
        isActive ? 'text-black active-item' : 'text-[#00000099]'
      } ${className || ''}`}
      onClick={handleClick}
      aria-label={label}
    >
      <span className="navbar-item-icon">{icon}</span>
      <span className="text-xs font-[400] mt-1 flex items-center gap-1 whitespace-nowrap hidden lg:inline-flex">
        {label}
        <span className="text-[10px]">
          <RiArrowDownSFill size={20} />
        </span>
      </span>
    </button>
  )
}

type NavbarPremiumProps = {
  label: string
}

const NavbarPremium = ({ label }: NavbarPremiumProps) => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#f3f2ef] transition-colors group">
      <span className="text-[#915907] transition-colors min-w-4 min-h-4 rounded-sm bg-[#915907]" />
      <span className="text-xs font-[400] text-[#0009] text-left">{label}</span>
    </button>
  )
}

export default Navbar