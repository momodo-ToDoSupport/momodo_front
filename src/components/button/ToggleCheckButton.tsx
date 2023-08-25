import Image from 'next/image';
import checkBtnIcon from '../../../public/images/check-btn-Icon.svg';
import checkBtnActive from '../../../public/images/check-btn-active.svg';

type Props = {
  toggled: boolean;
  onToggle: (toggled: boolean) => void;
};

const TodoCheckButton: React.FC<Props> = ({ toggled, onToggle }) => {

  return (
    <button onClick={() => onToggle(!toggled)}>
      {toggled ? (
        <Image src={checkBtnActive} alt='완료체크버튼' />
      ) : (
        <Image src={checkBtnIcon} alt='미완료체크버튼' />
      )}
    </button>
  );
};

export default TodoCheckButton;
