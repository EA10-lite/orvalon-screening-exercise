import {
    Connections,
    CreateFeed,
    Feed,
    Navbar,
    Profile
} from "./components"
import { FEED } from "./constants/feed"


const LinkedIn = () => {
    return (
        <div className="min-h-screen bg-[#f4f2ee]">
            <Navbar />

            <div className="container mx-auto mt-[52px] py-[52px]">
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-4 relative">
                    <aside className="col-span-1 md:col-span-2 lg:col-span-2 lg:sticky top-[104px] h-fit">
                        <Profile />
                    </aside>
                    <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-4">
                        <main className="w-full">
                            <CreateFeed />
                            <div className="my-2">
                                <div className="flex items-center gap-2">
                                    <hr className="flex-1 text-[#8c8c8c33]" />
                                    <p className="text-xs text-[#00000099]">Sort by: <span className="font-[600] text-black">Recent</span></p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {FEED.map((feed) => (
                                    <Feed
                                        key={feed.id}
                                        feed={feed}
                                    />
                                ))}
                            </div>
                        </main>
                        <aside className="md:block lg:hidden">
                            <Connections />
                        </aside>
                    </div>
                    <aside className="hidden lg:block lg:col-span-3 h-fit">
                        <Connections />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default LinkedIn