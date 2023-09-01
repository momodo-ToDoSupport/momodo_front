import React from 'react';
import { useDeleteTodoMutation } from '../../hooks/useDeleteTodoMutation'; // 커스텀 훅 불러오기

interface Props {
  id: number;
  closeModal(): void;
}

const DeleteModal: React.FC<Props> = ({ id, closeModal }) => {
  const { handleDelete, isLoading, isError } = useDeleteTodoMutation();

  return (
    <article className='fixed bottom-0 left-0 w-full h-full flex justify-center items-center z-100 bg-black bg-opacity-30'>
      <div className='w-72 bg-grey-44 rounded-lg text-center'>
        <p className='text-xl font-semibold py-4 border-b '>정말 삭제할까요?</p>
        <div className='flex'>
          <button
            className='w-1/2 text-base font-normal delete-button'
            onClick={() => closeModal()}
          >
            취소
          </button>
          <button
            className='w-1/2 p-4 text-base font-normal'
            onClick={() => handleDelete(id)}
            disabled={isLoading}
          >
            {isLoading ? '삭제 중...' : '삭제'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeleteModal;
