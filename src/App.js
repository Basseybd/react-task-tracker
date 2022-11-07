import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Take morning meds",
      day: "Nov 20TH AT 9:00AM",
      reminder: true,
    },
    {
      id: 2,
      text: "Work until i drop",
      day: "Nov 20TH AT 11:00AM",
      reminder: true,
    },
    {
      id: 3,
      text: "Sleep, game or study",
      day: "Nov 20TH AT 9:00PM",
      reminder: true,
    },
  ]);

  // Delete Task
  const deteleTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deteleTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
