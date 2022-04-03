import { useState } from "react";
import styles from "./App.module.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [isEditIndex, setIsEditIndex] = useState(null);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <Header />
        </div>
        <div>
          <Form
            toggle={toggle}
            setToggle={setToggle}
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            isEditItem={isEditItem}
            setIsEditItem={setIsEditItem}
            isEditIndex={isEditIndex}
            setIsEditIndex={setIsEditIndex}
          />
        </div>
        <div>
          <TodoList
            toggle={toggle}
            setToggle={setToggle}
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            setIsEditItem={setIsEditItem}
            isEditIndex={isEditIndex}
            setIsEditIndex={setIsEditIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
