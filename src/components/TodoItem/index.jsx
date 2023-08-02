import './styles.css';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompletedIcon } from '../TodoIcon/CompletedIcon';

function TodoItem({ onComplete, completed, text, onDelete }) {
  return (
    <li className="TodoItem">
      <span onClick={onComplete} className={`Icon Icon-container-check ${completed && "Icon-container-check--active"}`}>
        <CompletedIcon />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={onDelete} className="Icon Icon-container-delete">
        <DeleteIcon />
      </span>
    </li>
  );
}

export { TodoItem };