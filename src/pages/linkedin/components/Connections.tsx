import { BsInfoSquareFill } from 'react-icons/bs'
import Avatar from './Avatar'
import { FaPlus } from 'react-icons/fa'
import { CONNECTIONS } from '../constants/connections'

const FOOTER_LINKS = [
  'About',
  'Accessibility',
  'Help Center',
  'Privacy Policy',
  'Cookie Settings',
  'Copyright Policy',
  'Brand Policy',
  'Guest Controls',
  'Languages',
] as const

type ConnectionProps = {
  connection: (typeof CONNECTIONS)[number]
}

const Connection = ({ connection }: ConnectionProps) => {
  return (
    <div className="flex items-start gap-2">
      <Avatar url={connection.url} size="md" />
      <div className="flex-1 min-w-0">
        <h5 className="text-sm font-[600] text-[#000000e6] truncate">{connection.name}</h5>
        <p className="text-xs text-gray-500 mb-2.5 line-clamp-2">{connection.title}</p>
        <button className="flex items-center gap-1 border border-[#000000bf] py-1 px-3 sm:px-4 rounded-[35px] text-xs sm:text-sm font-[600] text-[#000000bf] hover:ring-inset hover:ring-1 hover:ring-[#000000bf] hover:bg-[#0000000d] cursor-pointer transition-all duration-300 whitespace-nowrap">
          <FaPlus size={14} className="sm:w-4 sm:h-4" />
          <span>Follow</span>
        </button>
      </div>
    </div>
  )
}

const Connections = () => {
  return (
    <>
      <div className="bg-white sm:rounded-lg p-4 shadow-bg mb-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm sm:text-base font-[600] text-[#000000e6]">Add to your feed</h4>
          <button className="cursor-pointer hover:opacity-80 transition-opacity">
            <BsInfoSquareFill color="#000000e6" size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {CONNECTIONS.map((connection) => (
            <Connection key={connection.id} connection={connection} />
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-[104px] lg:self-start">
        <div className="w-full rounded-lg overflow-hidden bg-white shadow-bg flex items-center justify-center mb-4">
          <img
            src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
            className="max-w-[350px] max-h-[250px] object-cover"
            loading="lazy"
            alt="LinkedIn ad"
          />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 mx-2 sm:mx-4">
          {FOOTER_LINKS.map((link) => (
            <button
              key={link}
              className="text-xs sm:text-sm font-[400] text-[#00000099] hover:underline hover:text-[#0a66c2] cursor-pointer transition-colors"
            >
              <span>{link}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Connections