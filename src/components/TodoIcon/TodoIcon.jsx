import "./styles.css";
import { FaEdit, FaTimes, FaCheck } from "react-icons/fa";

function TodoIcon({ type }) {
  const iconTypes = {
    delete: <FaTimes className="Icon-delete" />,
    check: <FaCheck className="Icon-check " />,
    edit: <FaEdit className="Icon-edit" />,
  };

  return iconTypes[type];
}

export { TodoIcon };
