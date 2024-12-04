import "./styles.css";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompletedIcon } from "../TodoIcon/CompletedIcon";
import { EditIcon } from "../TodoIcon/EditIcon";

function TodoItem({ onComplete, completed, text, onDelete, onEdit }) {
  return (
    <li className="TodoItem">
      <span
        onClick={onComplete}
        className={`Icon Icon-container-check ${
          completed && "Icon-container-check--active"
        }`}
      >
        <CompletedIcon />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={onEdit} className="Icon Icon-container-edit">
        <EditIcon />
      </span>
      <span onClick={onDelete} className="Icon Icon-container-delete">
        <DeleteIcon />
      </span>
    </li>
  );
}

export { TodoItem };
