import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import styles from "../styles/home.module.css";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
    }
  };

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
    setItems(_items);
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="pt-12">
        <h4 className="text-xs uppercase font-bold pb-2">Learning Nextjs</h4>
        <h1 className="text-5xl">Todo App</h1>
      </div>
      <div className="pt-12" />
      <div>
        <input
          type={"text"}
          value={todoItem}
          className={"text-gray-900 px-4 py-2 text-center rounded"}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-2 py-1 right-3 border-solid border-2 border-gray-100 hover:border-dotted"
        >
          Add
        </button>
      </div>
      <div className="pt-12" />
      <ul>
        {items
          .filter(({ done }) => !done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item)}
            >
              {message}
            </li>
          ))}
        {items
          .filter(({ done }) => done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item, styles.done)}
            >
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
