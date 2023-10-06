import { ITask } from "@/types/tasks"
import Task from "@/app/components/Task";
import React from "react";

interface TodoListProps {
  Tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ Tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tâche</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList