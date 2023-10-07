import React, { useState } from "react";

interface InputTaskProps {
  onAddItem: (name: string, description: string) => void;
}

const InputTask = ({ onAddItem }: InputTaskProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <form action="/">
        <div className="task">
          <div className="input-task">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-task">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => {
                e.preventDefault();
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            name !== "" && description !== ""
              ? onAddItem(name, description)
              : alert("Empty task");
            setName("");
            setDescription("");
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default InputTask;
