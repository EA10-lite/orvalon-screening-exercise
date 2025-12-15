import { HiOutlinePhoto } from "react-icons/hi2";
import { USER } from "../constants/user";
import Avatar from "./Avatar";
import { PiVideoFill } from "react-icons/pi";

const ARTICLE_ICON = (
    <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="content-align-left-medium" type="content-align-left">
    <use href="#content-align-left-medium" width="24" height="24"></use>
</svg>
)

const CreateFeed = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-bg">
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
                <div className="flex items-center gap-2">
                    <PiVideoFill size={20} color={"#5f9b41"} />
                    <p className="text-sm font-[600]">Video</p>
                </div>
                <div className="flex items-center gap-2">
                    <HiOutlinePhoto size={20} color={"#378fe9"} />
                    <p className="text-sm font-[600]">Photo</p>
                </div>
                <div className="flex items-center gap-2">
                    <span>{ARTICLE_ICON}</span>
                    <p className="text-sm font-[600]">Write Article</p>
                </div>
            </div>
        </div>
    )
}

export default CreateFeed;