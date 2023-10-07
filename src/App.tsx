import React, { useEffect, useState } from "react";
import InputTask from "./components/İnputTask";
import ShowTask from "./components/ShowTask";
import { Item } from "./modals/item";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("data") == undefined) {
      localStorage.setItem("data", "[]");
      window.location.reload();
    }
  }, []);
  const newData: null | string = localStorage.getItem("data");
  const tasks: Item[] = newData && JSON.parse(newData);
  const [data, setData] = useState<Item[]>(tasks);
  const addItem = (name: string, description: string): void => {
    const newData = [
      ...data,
      { id: Date.now(), name, description, complete: false },
    ];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };
  const deleteItem = (id: number): void => {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };
  const completeItem = (id: number): void => {
    const newData = data.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };
  return (
    <div>
      <h1>My Todos</h1>
      <div className="todos">
        <InputTask onAddItem={addItem} />
        <div className="tasks">
          {data &&
            data.map((task) => {
              return (
                <ShowTask
                  task={task}
                  key={task.id}
                  onDeleteItem={deleteItem}
                  onCompleteItem={completeItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
