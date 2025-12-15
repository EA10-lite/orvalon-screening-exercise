import { USER } from "../constants/user";
import Avatar from "./Avatar";
import { PiVideoFill } from "react-icons/pi";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoto } from "react-icons/md";

const CreateFeed = () => {
    return (
        <div className="bg-white sm:rounded-lg p-4 shadow-bg">
            <div className="flex items-center gap-2 mb-4">
                <Avatar 
                    url={USER.url}
                />
                <button
                    type="button"
                    className="w-full outline-none rounded-[35px] min-h-[48px] border border-[#0000004d] text-base font-[600] px-6 text-left cursor-pointer hover:bg-[#0000000d] transition-all duration-300"
                >
                    <span>Start a post</span>
                </button>
            </div>
            <div className="flex items-center justify-evenly">
                <button className="flex items-center justify-center gap-1 cursor-pointer px-4 py-2 text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1">
                    <PiVideoFill size={20} color={"#5f9b41"} />
                    <p className="text-sm font-[600]">Video</p>
                </button>
                <button className="flex items-center justify-center gap-1 cursor-pointer px-4 py-2 text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1">
                    <MdOutlinePhoto size={20} color={"#378fe9"} />
                    <p className="text-sm font-[600]">Photo</p>
                    </button>
                <button className="flex items-center justify-center gap-1 cursor-pointer px-4 py-2 text-base leading-2xl font-[600] text-[#000000bf] hover:bg-[#0000000d] transition-all duration-300 rounded-md flex-1">
                    <AiFillLayout size={20} color={"#e06847"} />
                    <p className="text-sm font-[600]">Write Article</p>
                </button>
            </div>
        </div>
    )
}

export default CreateFeed;