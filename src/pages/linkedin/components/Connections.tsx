import { BsInfoSquareFill } from "react-icons/bs";
import Avatar from "./Avatar";
import { FaPlus } from "react-icons/fa";
import { CONNECTIONS } from "../constants/connections";

const Connections = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-bg">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-[600] text-[#000000e6]">Add to your feed</h4>
                <BsInfoSquareFill color={"#000000e6"} />
            </div>

            <div className="flex flex-col gap-4">
                {CONNECTIONS.map((connection) => (
                    <Connection
                        key={connection.id}
                        connection={connection}
                    />
                ))}
            </div>
        </div>
    )
}

type ConnectionProps = {
    connection: typeof CONNECTIONS[number];
}

const Connection = ({ connection }: ConnectionProps) => {
    return (
        <div className="flex items-start gap-2">
            <Avatar url={connection.url} size="md" />
            <div className="">
                <h5 className="text-sm font-[600] text-[#000000e6]">{connection.name}</h5>
                <p className="text-xs text-gray-500 mb-2.5">{connection.title}</p>

                <button className="flex items-center gap-1 border border-[#000000bf] py-1 px-4 rounded-[35px] text-base font-[600] text-[#000000bf] hover:ring-inset hover:ring-1 hover:ring-[#000000bf] hover:bg-[#0000000d] cursor-pointer transition-all duration-300">
                    <FaPlus size={16} />
                    <span>Follow</span>
                </button>
            </div>
        </div>
    )
}

export default Connections;