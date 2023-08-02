import './styles.css';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

function TodoIcon({ type }) {
  const iconTypes = {
    "delete": <FaTimes className='Icon-delete' />,
    "check": <FaCheck className='Icon-check ' />
  }

  return (
    iconTypes[type]
  );
}

export { TodoIcon }
