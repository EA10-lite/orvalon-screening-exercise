import { BiNews } from "react-icons/bi";
import { MdGroups, MdBookmark, MdEvent } from "react-icons/md";
import Avatar from "./Avatar";
import { USER } from "../constants/user";


const OTHER_LINKS = [
    {
        icon: <MdBookmark size={20} />,
        label: "Saved items",
    },
    {
        icon: <MdGroups size={20} />,
        label: "Groups",
    },
    {
        icon: <BiNews size={20} />,
        label: "Newsletters",
    },
    {
        icon: <MdEvent size={20} />,
        label: "Events",
    }
]

const Profile = () => {
    return (
        <div className="flex flex-col gap-2 sticky top-0">
            <div className="bg-white rounded-[8px] shadow-bg overflow-hidden">
                <div className="cover-photo">
                    <img
                        src="https://picsum.photos/200/300"
                        alt="cover"
                        className="w-full h-[58px] object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="">
                    <div className="profile-picture mt-[-36px]">
                        <div className="profile-picture-avatar ml-4">
                            <Avatar
                                url={USER.url}
                                size="lg"
                                className="rounded-full w-[72px] h-[72px]"
                            />
                        </div>

                        <div className="profile-picture-edit"></div>
                    </div>
                    <div className="px-4 pb-4">
                        <h4 className="text-2xl font-semibold">{USER.name}</h4>
                        <p className="text-sm text-gray-500">{USER.location}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-[8px] p-4 shadow-bg connection-card">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs leading-base font-[600] text-black">Connections</span>
                        <span className="text-xs leading-base font-[600] text-[#00000099]">Connect with alumni</span>
                    </div>
                    <span className="text-xs leading-base font-[600] text-[#0a66c2]">8</span>
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-bg flex flex-col gap-4">
                {OTHER_LINKS.map((link) => (
                    <div key={link.label} className="flex items-center gap-2">
                        {link.icon}
                        <span className="text-xs leading-base font-[600] text-black cursor-pointer hover:underline flex items-center gap-2">{link.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Profile;