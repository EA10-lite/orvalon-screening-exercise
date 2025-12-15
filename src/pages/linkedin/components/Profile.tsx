import { BiNews } from 'react-icons/bi'
import { MdGroups, MdBookmark, MdEvent } from 'react-icons/md'
import Avatar from './Avatar'
import { USER } from '../constants/user'
import { useState } from 'react'
import { RiArrowUpWideFill } from 'react-icons/ri'

const OTHER_LINKS = [
  { icon: <MdBookmark size={20} />, label: 'Saved items' },
  { icon: <MdGroups size={20} />, label: 'Groups' },
  { icon: <BiNews size={20} />, label: 'Newsletters' },
  { icon: <MdEvent size={20} />, label: 'Events' },
] as const

const Profile = () => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white sm:rounded-[8px] shadow-bg overflow-hidden">
        <div className="cover-photo">
          <img
            src="https://media.licdn.com/dms/image/v2/D5616AQFt0r2rrd62xA/profile-displaybackgroundimage-shrink_200_800/B56Zq6esNZH8AU-/0/1764065204416?e=1767225600&v=beta&t=d2bCJH88O0ppC3ev-0NT2ma1Hs4JYorGS1hcT1mnlU0"
            alt="cover"
            className="w-full h-[58px] object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <div className="profile-picture mt-[-36px]">
            <div className="profile-picture-avatar ml-4">
              <Avatar url={USER.url} size="lg" className="rounded-full w-[72px] h-[72px]" />
            </div>
            <div className="profile-picture-edit"></div>
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-[20px] font-semibold">{USER.name}</h4>
            <p className="text-xs text-gray-500">{USER.location}</p>
          </div>
        </div>
      </div>

      <div className={`bg-white sm:rounded-[8px] p-4 shadow-bg connection-card ${showMore ? 'block' : 'hidden md:block'}`}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-xs leading-base font-[600] text-black">Connections</span>
            <span className="text-xs leading-base font-[600] text-[#00000099]">Connect with alumni</span>
          </div>
          <span className="text-xs leading-base font-[600] text-[#0a66c2]">8</span>
        </div>
      </div>

      <div className={`bg-white sm:rounded-lg p-4 shadow-bg flex flex-col gap-4 ${showMore ? 'block' : 'hidden md:flex'}`}>
        {OTHER_LINKS.map((link) => (
          <div key={link.label} className="flex items-center gap-2">
            {link.icon}
            <span className="text-xs leading-base font-[600] text-black cursor-pointer hover:underline flex items-center gap-2">
              {link.label}
            </span>
          </div>
        ))}
      </div>

      <button
        className="flex items-center justify-center gap-1 md:hidden cursor-pointer w-full hover:bg-[#0000000d] transition-all duration-300 p-2 text-black rounded"
        onClick={() => setShowMore(!showMore)}
        aria-label={showMore ? 'Show less' : 'Show more'}
      >
        <span className="text-xs leading-base font-[600]">Show {showMore ? 'less' : 'more'}</span>
        <RiArrowUpWideFill className={`transition-transform ${showMore ? 'rotate-180' : ''}`} />
      </button>
    </div>
  )
}

export default Profile