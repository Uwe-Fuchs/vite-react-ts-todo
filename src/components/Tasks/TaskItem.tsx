/* eslint-disable no-unused-vars */
function TaskItem({
  name,
  done,
  id,
  handleToggleDone,
  handleDelete,
}: {
  name: string;
  done: boolean;
  id: string;
  handleToggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) {
  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleToggleDone(id, !done)}
        />
        {name}
      </div>
      <button
        className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;