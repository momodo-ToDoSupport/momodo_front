import React from 'react';
import { useDeleteTodoMutation } from '../../hooks/useDeleteTodoMutation';

interface Props {
  id: number;
  closeModal(): void;
  type?: string | null;
}

const InnerModal: React.FC<Props> = ({ id, closeModal, type }) => {
  const { handleDelete } = useDeleteTodoMutation();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <article className='absolute fixed bottom-0 left-0 w-full h-full flex justify-center items-center zindex bg-black bg-opacity-30'>
      <div className='w-72 bg-grey-44 rounded-lg text-center'>
        <p className='text-xl font-semibold py-4 border-b '>
          {type === 'deleteTodo' ? '정말 삭제할까요?' : '로그아웃 할까요?'}
        </p>
        <div className='flex'>
          <button
            className='w-1/2 text-base font-normal delete-button'
            onClick={() => closeModal()}
          >
            취소
          </button>
          {type === 'logout' ? (
            <button
              className='w-1/2 p-4 text-base font-normal'
              onClick={() => handleLogout()}
            >
              로그아웃
            </button>
          ) : (
            <button
              className='w-1/2 p-4 text-base font-normal'
              onClick={() => handleDelete(id)}
            >
              삭제
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default InnerModal;
