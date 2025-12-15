import {
    Connections,
    CreateFeed,
    Navbar,
    Profile
} from "./components"


const LinkedIn = () => {
    return (
        <div className="min-h-screen bg-[#f4f2ee]">
            <Navbar />

            <div className="container mx-auto mt-[52px] pt-[52px] px-12">
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-4 relative">
                    <aside className="col-span-6 md:col-span-2 lg:col-span-2 sticky top-0">
                        <Profile />
                    </aside>
                    <main className="col-span-6 md:col-span-4 lg:col-span-4">
                        <div className="">
                            <CreateFeed />
                        </div>
                    </main>
                    <aside className="col-span-6 md:col-span-0 lg:col-span-3">
                        <Connections />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default LinkedIn