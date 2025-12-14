import { GoPlus } from "react-icons/go"
import { useTodoStore } from "../../store/todoStore"
import { useMemo, useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { BsCheck2 } from "react-icons/bs";


const FILTERS = ["all", "active", "completed"]

const Todo = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all")
    const { addTodo, todos, deleteTodo, toggleTodo } = useTodoStore();
    const [task, setTask] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        addTodo(task)
        setTask('')
    }

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (activeFilter === "all") return true
            if (activeFilter === "active") return !todo.completed
            if (activeFilter === "completed") return todo.completed
        })
    }, [todos, activeFilter])

    return (
        <div className="min-h-screen">
            <header>
                <div className="bg-black p-6">
                    <h4 className="text-white text-lg font-[500]">Welcome to Todo App</h4>
                </div>
                <div className="bg-[#2a2c33] p-6">
                    <div className="space-y-4 mb-4">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Add a new task"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-white placeholder:text-gray-400 focus:outline-none focus:ring-[1.5px] focus:ring-white"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="ml-2 px-4 py-3 rounded-lg bg-black text-white flex items-center gap-2 justify-center cursor-pointer min-w-32"
                                >
                                    <GoPlus size={18} />
                                    <span className="uppercase">Add</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-2">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                className={`px-8 py-2 rounded-md text-white cursor-pointer ${filter === activeFilter ? "bg-[#515460]" : "bg-[#515460] opacity-50"}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                <span className="capitalize">{filter}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="space-y-4">
                {filteredTodos?.length <= 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                        <FaRegListAlt className="mx-auto mb-2 text-4xl" />
                        <p className="text-lg font-medium">
                            {
                                activeFilter === "all" ? "No tasks yet" :
                                activeFilter === "active" ?
                                "No active tasks" :
                                "No completed tasks"
                            }
                        </p>
                        <p className="text-sm">Add a task to get started</p>
                    </div>
                ) : (
                    <div className="">
                        {filteredTodos?.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo.text}
                                handleDelete={() => deleteTodo(todo.id)}
                                handleToggle={() => toggleTodo(todo.id)}
                                isCompleted={todo.completed}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

type TodoItemProps = {
    todo: string;
    handleDelete: () => void;
    handleToggle: () => void;
    isCompleted: boolean;
}

const TodoItem = ({ todo, handleDelete, handleToggle, isCompleted }: TodoItemProps) => {
    return (
        <div className="p-6 border-b border-gray-300 last:border-b-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleToggle}
                        className={`w-6 h-6 border border-gray-300 dark:border-gray-700 flex items-center justify-center cursor-pointer rounded-md ${isCompleted ? "bg-[#515460]" : "bg-transparent"}`}
                    >
                        {isCompleted && <BsCheck2 size={16} color="white" />}
                    </button>
                    <p className="text-gray-900 dark:text-gray-100 text-sm font-[500]">{todo}</p>
                </div>


                <button
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    onClick={handleDelete}
                >
                    <LuTrash2 />
                </button>
            </div>
        </div>
    )
}

export default Todo