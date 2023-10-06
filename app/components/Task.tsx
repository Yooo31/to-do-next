'use client';

import Modal from "@/app/components/Modal"
import { ITask } from "@/types/tasks"
import React, { FormEventHandler, useState } from "react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { useRouter } from 'next/navigation';
import { DeleteTodo, EditTodo } from "@/api";

interface TaskProps {
  task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const Router = useRouter();
  const [OpenModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [OpenModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [TaskToEdit, setTaskToEdit] = useState<string>(task.text);

  const HandleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await EditTodo({
      id: task.id,
      text: TaskToEdit
    });
    setOpenModalEdit(false);
    Router.refresh();
  };

  const HandleDeleteTodo = async (id: string) => {
    await DeleteTodo(id);
    setOpenModalDeleted(false);
    Router.refresh();
  };

  return (
    <tr key={task.id} className="hover">
      <td className="w-full">{task.text}</td>
      <td className="flex flex-gap-5">
        <AiOutlineEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-warning" size={25} />

        <Modal ModalOpen={OpenModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={HandleSubmitEditTodo}>
            <h3 className='text-bold text-lg'>Édition d'une tâche</h3>

            <div className='modal-action'>
              <input value={TaskToEdit} onChange={e => setTaskToEdit(e.target.value)} type="text" placeholder="Écrire ici" className="input input-bordered w-full" />

              <button type='submit' className='btn'>
                Confirmer
              </button>
            </div>
          </form>
        </Modal>

        <AiOutlineDelete onClick={() => setOpenModalDeleted(true)} cursor="pointer" className="text-error ms-3" size={25} />

        <Modal ModalOpen={OpenModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-bold text-lg'>Êtes vous sûr de supprimer cette tâche ?</h3>

          <div className="modal-action flex w-full mt-5">
            <button onClick={() => setOpenModalDeleted(false)} className="grid h-20 flex-grow text-base-300 card bg-error rounded-box place-items-center">Annuler</button>
            <div className="divider divider-horizontal">OR</div>
            <button onClick={() => HandleDeleteTodo(task.id)} className="grid h-20 flex-grow text-base-300 card bg-success rounded-box place-items-center">Confirmer</button>
          </div>
        </Modal>

      </td>
    </tr>
  )
}

export default Task