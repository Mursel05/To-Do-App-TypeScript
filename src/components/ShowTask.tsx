import React from "react";
import { Item } from "../modals/item";

interface ShowTaskProps {
  onDeleteItem(id: number): void;
  onCompleteItem(id: number): void;
  task: Item;
}

const ShowTask = ({ onDeleteItem, onCompleteItem, task }: ShowTaskProps) => {
  return (
    <div className="show-task">
      <div
        className={
          !task.complete ? "task-information" : "task-information done"
        }
      >
        <span className="name">{task.name}</span>
        <span>{task.description}</span>
      </div>
      <div className="buttons">
        <button
          className="complete btn"
          onClick={() => onCompleteItem(task.id)}
        >
          {!task.complete ? "Completed" : "Uncompleted"
          }
        </button>
        <button className="delete btn" onClick={() => onDeleteItem(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowTask;
