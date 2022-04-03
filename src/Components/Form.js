import styles from "./Form.module.css";
import { FaPlus, FaPencilAlt } from "react-icons/fa";

const Form = ({
  input,
  setInput,
  list,
  setList,
  toggle,
  setToggle,
  isEditItem,
  setIsEditItem,
  isEditIndex,
  setIsEditIndex,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(list);
    // const listItem = list[0].text;
    // console.log(listItem);s
    if (!toggle) {
      // list[isEditIndex].text = input;
      setList(
        list.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, text: input };
          }
          return item;
        })
      );
      console.log("hey");
      setInput("");
      setToggle(true);
    } else {
      setList([...list, { text: input, id: Math.random().toString() }]);
      setInput("");
      setToggle(true);
      // console.log("else");
    }
    console.log(list);
  };
  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={styles.add}>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          type="text"
          placeholder="Enter  a Todo..."
          value={input}
          required
          onChange={changeHandler}
          className={styles.search}
        />
        {toggle ? (
          <button className={styles.addButton} type="submit">
            <FaPlus />
          </button>
        ) : (
          <button className={styles.addButton}>
            <FaPencilAlt />
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;

// list[index].text
