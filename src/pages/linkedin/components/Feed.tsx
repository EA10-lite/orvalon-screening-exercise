import { FaPlus } from 'react-icons/fa'
import type { FeedPost } from '../constants/feed'
import { BsThreeDots } from 'react-icons/bs'
import Avatar from './Avatar'
import { IoIosSend } from 'react-icons/io'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'

const ACTIONS = [
  { icon: <AiOutlineLike size={18} />, label: 'Like' },
  { icon: <FaRegCommentDots size={18} />, label: 'Comment' },
  { icon: <FaRegHeart size={18} />, label: 'Repost' },
  { icon: <IoIosSend size={18} />, label: 'Send' },
] as const

const REACTIONS_URLS = [
  'https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt',
  'https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22',
  'https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8',
] as const

type ActionProps = {
  action: (typeof ACTIONS)[number]
}

const Action = ({ action }: ActionProps) => {
  return (
    <button className="flex items-center justify-center gap-1.5 cursor-pointer px-2 sm:px-4 py-2 text-sm sm:text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1">
      <span className="flex-shrink-0">{action.icon}</span>
      <span className="hidden sm:inline">{action.label}</span>
    </button>
  )
}

type FeedProps = {
  feed: FeedPost
}

const Feed = ({ feed }: FeedProps) => {
  return (
    <div className="bg-white sm:rounded-lg shadow-bg feed-card">
      <div className="card-header px-4 pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <Avatar url={feed.creator.picture} size="md" />
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-[600] text-[#000000e6] truncate">{feed.creator.name}</h4>
              <p className="text-xs text-gray-500 truncate">{feed.creator.title}</p>
              <p className="text-xs text-gray-500">{feed.timestamp}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <button className="hidden sm:flex items-center gap-1 cursor-pointer text-[#0a66c2] px-4 py-1 rounded-md text-sm font-[600] transition-all duration-300 hover:bg-[#0a66c20d] whitespace-nowrap">
              <FaPlus size={14} />
              <span>Follow</span>
            </button>
            <button className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full hover:bg-[#0000000d] transition-all duration-300 flex-shrink-0">
              <BsThreeDots size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="px-4 mb-2">
          <p className="text-sm text-[#000000e6] whitespace-pre-line leading-relaxed">{feed.content}</p>
        </div>
        {feed.images?.[0] && (
          <div className="w-full">
            <img
              src={feed.images[0]}
              className="w-full h-auto object-cover"
              loading="lazy"
              alt="Post content"
            />
          </div>
        )}
      </div>

      <div className="card-footer px-4 pb-2">
        <div className="flex items-center justify-between py-2 border-b border-[#0000000d]">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center">
              {REACTIONS_URLS.map((url) => (
                <img key={url} src={url} alt="reaction" className="ml-[-4px] first:ml-0 w-5 h-5" />
              ))}
            </div>
            <button className="text-sm font-[400] text-[#00000099] cursor-pointer hover:underline hover:text-[#0a66c2] transition-colors">
              {feed.metadata.likes} likes
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button className="text-sm font-[400] text-[#00000099] hover:underline hover:text-[#0a66c2] cursor-pointer transition-colors">
              {feed.metadata.comments} comments
            </button>
            <span className="text-sm text-[#00000099]">·</span>
            <button className="text-sm font-[400] text-[#00000099] hover:underline hover:text-[#0a66c2] cursor-pointer transition-colors">
              {feed.metadata.shares} reposts
            </button>
          </div>
        </div>

        <div className="flex items-center py-1">
          {ACTIONS.map((action) => (
            <Action key={action.label} action={action} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed