import create from "zustand";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  task: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}
