import { useEffect, useMemo, useState } from "react";
import { TASK_STORAGE_KEY } from "../consts/task.consts";
import type { Task, TaskFilter } from "../types/task.types";
import { readTasks } from "../utils/taskStorage.util";

type ReturnProps = {
  tasks: Task[];
  filter: TaskFilter;
  input: string;
  remaining: number;
  visibleTasks: Task[];
  setFilter: (filter: TaskFilter) => void;
  setInput: (value: string) => void;
  addTask: () => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  clearCompleted: () => void;
};

export const useTasks = (): ReturnProps => {
  const [tasks, setTasks] = useState<Task[]>(readTasks);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<TaskFilter>("all");

  useEffect(() => {
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const remaining = tasks.filter((task) => !task.completed).length;
  const visibleTasks = useMemo(() => {
    const filteredTasks = tasks.filter((task) => {
      if (filter === "active") {
        return !task.completed;
      }

      if (filter === "completed") {
        return task.completed;
      }

      return true;
    });

    return [...filteredTasks].sort(
      (firstTask, secondTask) => secondTask.createdAt - firstTask.createdAt,
    );
  }, [filter, tasks]);

  const addTask = () => {
    const taskText = input.trim();

    if (!taskText) {
      return;
    }

    setTasks((currentTasks) => [
      {
        id: crypto.randomUUID(),
        text: taskText,
        completed: false,
        createdAt: Date.now(),
      },
      ...currentTasks,
    ]);
    setInput("");
  };

  const toggleTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  };

  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  };

  const updateInput = (value: string) => {
    setInput(value);
  };

  return {
    tasks,
    filter,
    input,
    remaining,
    visibleTasks,
    setFilter,
    setInput: updateInput,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  };
};
