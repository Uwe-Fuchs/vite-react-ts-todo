/* eslint-disable no-unused-vars */
import { FormEvent, useState } from "react";

function Input({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) {
  const [newTask, setNewTask] = useState<string>("");

  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTask);
        setNewTask("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-100 rounded-lg hover:bg-green-200 p-1"
      >
        Add task
      </button>
    </form>
  );
}

export default Input;
