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

            <div className="container mx-auto mt-[52px] py-[52px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-4 relative">
                    <aside className="col-span-6 md:col-span-2 lg:col-span-2 sticky top-[104px]">
                        <Profile />
                    </aside>
                    <main className="col-span-6 md:col-span-4 lg:col-span-4">
                        <div className="">
                            <div className="mb-4">
                                <CreateFeed />
                            </div>

                            <div className="space-y-2">
                                {FEED.map((feed) => (
                                    <Feed
                                        key={feed.id}
                                        feed={feed}
                                    />
                                ))}
                            </div>
                        </div>
                    </main>
                    <aside className="col-span-6 md:col-span-0 lg:col-span-3 sticky top-[104px]">
                        <Connections />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default LinkedIn