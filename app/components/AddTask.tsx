'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from '@/app/components/Modal';
import { FormEventHandler, useState } from 'react';
import { AddTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const Router = useRouter();
  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [NewTaskValue, setNewTaskValue] = useState<string>('');

  const HandleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await AddTodo({
      id: uuidv4(),
      text: NewTaskValue
    });
    setNewTaskValue("");
    setModalOpen(false);
    Router.refresh();
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>
        Ajouter une tâche
        <AiOutlinePlus size={15} />
      </button>

      <Modal ModalOpen={ModalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={HandleSubmitNewTodo}>
          <h3 className='text-bold text-lg'>Ajouter une tâche</h3>

          <div className='modal-action'>
            <input value={NewTaskValue} onChange={e => setNewTaskValue(e.target.value)} type="text" placeholder="Écrire ici" className="input input-bordered w-full" />

            <button type='submit' className='btn'>
              Ajouter
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddTask