import React, { useState } from 'react';
import EmojiPicker, {
  EmojiStyle,
  Theme,
  EmojiClickData,
  Emoji,
} from 'emoji-picker-react';
import Image from 'next/image';
import change from '../../../public/images/switchIcon.svg';
import close from '../../../public/images/closeIcon.svg';

interface TodoEmojiProps {
  setTodoEmoji(emoji: string): void;
}

const TodoEmoji: React.FC<TodoEmojiProps> = ({ setTodoEmoji }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('1f389');
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);

  const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setSelectedEmoji(emojiData.unified);
    setTodoEmoji(emojiData.emoji);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center mb-12'>
        <p className='bg-grey-65 text-xxl w-16 h-16 rounded-xl flex justify-center items-center'>
          {selectedEmoji && (
            <Emoji
              unified={selectedEmoji}
              emojiStyle={EmojiStyle.NATIVE}
              size={35}
            />
          )}
        </p>
        <button
          className='text-[#909090] flex items-center mt-2'
          onClick={() => setOpenEmojiPicker(true)}
        >
          <Image
            src={change}
            alt='이모지 변경하기 버튼'
            className='mr-1 mt-1'
          />
          Change Emoji
        </button>
      </div>
      {openEmojiPicker && (
        <div className='z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          <div className='absolute'>
            <button
              className='absolute z-20 bottom-5 right-3'
              onClick={() => setOpenEmojiPicker(false)}
            >
              <Image src={close} alt='닫기' />
            </button>
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              autoFocusSearch={false}
              theme={Theme.DARK}
              emojiStyle={EmojiStyle.NATIVE}
              width='100%'
              height={350}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TodoEmoji;
