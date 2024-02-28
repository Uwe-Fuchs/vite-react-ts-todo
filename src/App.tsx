import { FormEvent, useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Summary from "./components/Summary/Summary";
import Tasks from "./components/Tasks/Tasks";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmitTask = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();

    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };

    setTasks((tasks) => [...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const handleToggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input handleSubmit={handleSubmitTask} />
          </Container>
          <Container title={"Tasks"}>
            <Tasks
              tasks={tasks}
              handleToggleDone={handleToggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
