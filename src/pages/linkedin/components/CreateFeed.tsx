import { USER } from '../constants/user'
import Avatar from './Avatar'
import { PiVideoFill } from 'react-icons/pi'
import { AiFillLayout } from 'react-icons/ai'
import { MdOutlinePhoto } from 'react-icons/md'

const FEED_ACTIONS = [
  { icon: <PiVideoFill size={20} color="#5f9b41" />, label: 'Video' },
  { icon: <MdOutlinePhoto size={20} color="#378fe9" />, label: 'Photo' },
  { icon: <AiFillLayout size={20} color="#e06847" />, label: 'Write Article' },
] as const

const CreateFeed = () => {
  return (
    <div className="bg-white sm:rounded-lg p-4 shadow-bg">
      <div className="flex items-center gap-2 mb-4">
        <Avatar url={USER.url} />
        <button
          type="button"
          className="w-full outline-none rounded-[35px] min-h-[48px] border border-[#0000004d] text-base font-[600] px-4 sm:px-6 text-left cursor-pointer hover:bg-[#0000000d] transition-all duration-300 text-[#000000bf]"
        >
          <span className="text-sm sm:text-base">Start a post</span>
        </button>
      </div>

      <div className="flex items-center justify-evenly gap-1 sm:gap-2">
        {FEED_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="flex items-center justify-center gap-1 sm:gap-2 cursor-pointer px-2 sm:px-4 py-2 text-sm sm:text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1"
          >
            <span className="flex-shrink-0">{action.icon}</span>
            <span className="hidden sm:inline text-sm font-[600] text-nowrap">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CreateFeed