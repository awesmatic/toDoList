import React from "react";
import styles from "./TodoList.module.css";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

export const TodoList = ({
  setIsEditItem,
  list,
  setList,
  input,
  setInput,
  setToggle,
  isEditIndex,
  setIsEditIndex,
}) => {
  const deleteHandler = (id) => {
    console.log(id);
    setList(list.filter((todo) => todo.id !== id));
  };
  const editHandler = (props) => {
    setToggle(false);
    const editElement = props.text;
    const editElementId = props.id;
    const editElementIndex = list.findIndex((item) => item.id === props.id);
    // console.log(editElement);
    setInput(editElement);
    setIsEditIndex(editElementIndex);
    setIsEditItem(editElementId);
    // console.log(editElementId);
  };
  return (
    <div className={styles.results}>
      {list.map((todo) => (
        <div className={styles.list} key={todo.id}>
          <li>{todo.text}</li>
          <div className={styles.buttons}>
            <button
              className={styles.addButton}
              onClick={() => editHandler(todo)}
            >
              <FaPencilAlt />
            </button>
            <button
              className={styles.addButton}
              onClick={() => deleteHandler(todo.id)}
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
        /* <inputs
            type="text"s
            value={todo.text}
            onChange={(event) => event.prevent.Default()}
          /> */
      ))}
    </div>
  );
};
export default TodoList;
