import { Link } from 'react-router-dom'
import { FaLinkedin, FaTasks, FaShoppingBag } from 'react-icons/fa'

const Home = () => {
    const exercises = [
        {
            id: 1,
            title: 'LinkedIn UI Replication',
            description: 'Pixel-perfect UI replica with full responsiveness across all devices',
            icon: FaLinkedin,
            path: '/linkedin',
            color: 'bg-blue-600 hover:bg-blue-700',
        },
        {
            id: 2,
            title: 'Interactive Todo List',
            description: 'Task management with local storage persistence and filtering',
            icon: FaTasks,
            path: '/todo',
            color: 'bg-green-600 hover:bg-green-700',
        },
        {
            id: 3,
            title: 'Product Listing',
            description: 'API integration with search functionality and error handling',
            icon: FaShoppingBag,
            path: '/products',
            color: 'bg-purple-600 hover:bg-purple-700',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
                <header className="text-center mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Frontend Developer
                    <span className="block text-blue-600 dark:text-blue-400">Screening Exercises</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Select an exercise to view and interact with the application
                </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {exercises.map((exercise) => {
                    const Icon = exercise.icon
                    return (
                    <Link
                        key={exercise.id}
                        to={exercise.path}
                        className="group block"
                        aria-label={`Navigate to ${exercise.title}`}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 sm:p-8 h-full flex flex-col">
                        <div
                            className={`${exercise.color} w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                            aria-hidden="true"
                        >
                            <Icon className="text-white text-2xl sm:text-3xl" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            Exercise {exercise.id}
                        </h2>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {exercise.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex-grow">
                            {exercise.description}
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base group-hover:underline">
                            View Exercise →
                            </span>
                        </div>
                        </div>
                    </Link>
                    )
                })}
                </div>

                <footer className="mt-12 sm:mt-16 text-center text-sm sm:text-base text-gray-500 dark:text-gray-400">
                <p>Built with React, TypeScript, and Tailwind CSS</p>
                </footer>
            </div>
        </div>
    )
}

export default Home