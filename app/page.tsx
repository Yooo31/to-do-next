import { GetAllTodos } from "@/api";
import AddTask from "@/app/components/AddTask"
import TodoList from "@/app/components/TodoList"

export default async function Home() {
  const Tasks = await GetAllTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo</h1>

        <AddTask />
      </div>

      <TodoList Tasks={ Tasks } />
    </main>
  )
}
