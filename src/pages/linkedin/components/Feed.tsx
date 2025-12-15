import { FaPlus, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import type { FeedPost } from "../constants/feed";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "./Avatar";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";


const ACTIONS = [
    {
        icon: <AiOutlineLike size={18} />,
        label: "Like",
        onClick: () => {},
    },
    {
        icon: <FaRegCommentDots size={18} />,
        label: "Comment",
        onClick: () => {},
    },
    {
        icon: <FaRegHeart size={18} />,
        label: "Repost",
        onClick: () => {},
    },
    {
        icon: <IoIosSend size={18} />,
        label: "Send",
        onClick: () => {},
    },
]

const REACTIONS_URLS = [
    "https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt",
    "https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22",
    "https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
]

const Feed = ({ feed }: { feed: FeedPost }) => {
    return (
        <div className="bg-white sm:rounded-lg shadow-bg feed-card">
            <div className="card-header px-4 pt-4 pb-2">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                        <Avatar
                            url={feed.creator.picture}
                            size="md"
                        />

                        <div className="">
                            <h4 className="text-sm font-[600] text-[#000000e6]">{feed.creator.name}</h4>
                            <p className="text-xs text-gray-500">{feed.creator.title}</p>
                            <p className="text-xs text-gray-500">{feed.timestamp}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <button className="flex items-center gap-1 cursor-pointer text-[#0a66c2] px-4 py-1 rounded-md text-sm font-[600] transition-all duration-300 hover:bg-[#0a66c20d]/90">
                            <FaPlus size={14} />
                            <span>Follow</span>
                        </button>

                        <button className="flex items-center justify-center gap-1 cursor-pointer w-8 h-8 rounded-full hover:bg-[#0000000d] transition-all duration-300 flex-1">
                            <BsThreeDots />
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="px-4 mb-2">
                    <p className="text-sm text-[#000000e6]">
                        {feed.content}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img
                        src={feed.images?.[0]}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="card-footer px-4">
                <div className="flex items-center justify-between py-2 border-b border-[#0000000d]">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {REACTIONS_URLS?.map((url) => (
                                <img
                                    src={url}
                                    key={url}
                                    className="ml-[-4px] first:ml-0"
                                />
                            ))}
                        </div>
                        <p className="text-sm font-[400] text-[#00000099] cursor-pointer hover:underline hover:text-[#0a66c2]">{feed.metadata.likes} likes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-[400] text-[#00000099] hover:underline hover:text-[#0a66c2] cursor-pointer">
                            {feed.metadata.comments} comments
                        </p>
                        <p className="text-sm text-[#00000099]">.</p>
                        <p className="text-sm font-[400] text-[#00000099] hover:underline hover:text-[#0a66c2] cursor-pointer">
                            {feed.metadata.shares} reposts
                        </p>
                    </div>
                </div>

                <div className="flex items-center py-2">
                    {ACTIONS?.map((action) => (
                        <Action key={action.label} action={action} />
                    ))}
                </div>
            </div>
        </div>
    )
}


type ActionProps = {
    action: typeof ACTIONS[number];
}

const Action = ({ action }: ActionProps) => {
    return (
        <button className="flex items-center justify-center gap-1 cursor-pointer px-4 py-2 text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1">
            {action.icon}
            <span>{action.label}</span>
        </button>
    )
}

export default Feed;