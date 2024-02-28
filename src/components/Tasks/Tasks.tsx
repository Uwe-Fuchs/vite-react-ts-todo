/* eslint-disable no-unused-vars */
import { Task } from "../../App";
import TaskItem from "./TaskItem";

function Tasks({
  tasks,
  handleToggleDone,
  handleDelete,
}: {
  tasks: Task[];
  handleToggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          name={t.name}
          done={t.done}
          id={t.id}
          handleToggleDone={handleToggleDone}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Tasks;
