import { ITask } from "@/types/tasks";

const BaseUrl = "http://localhost:3001";

export const GetAllTodos = async (): Promise<ITask[]> => {
  const Res = await fetch(`${BaseUrl}/tasks`, { cache: 'no-store' });
  const Todos = await Res.json();

  return Todos;
}

export const AddTodo = async (todo: ITask): Promise<ITask> => {
  const Res = await fetch(`${BaseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  const NewTodo = await Res.json();

  return NewTodo;
}

export const EditTodo = async (todo: ITask): Promise<ITask> => {
  const Res = await fetch(`${BaseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  const EditedTodo = await Res.json();

  return EditedTodo;
}

export const DeleteTodo = async (id: string): Promise<void> => {
  await fetch(`${BaseUrl}/tasks/${id}`, {
    method: 'DELETE'
  });
}
