import { TASK_STORAGE_KEY } from "../consts/task.consts";
import type { Task } from "../types/task.types";

export const readTasks = (): Task[] => {
  try {
    const savedTasks = localStorage.getItem(TASK_STORAGE_KEY);

    if (!savedTasks) {
      return [];
    }

    const parsedTasks: unknown = JSON.parse(savedTasks);

    if (!Array.isArray(parsedTasks)) {
      return [];
    }

    return parsedTasks.filter(
      (task): task is Task =>
        typeof task === "object" &&
        task !== null &&
        typeof task.id === "string" &&
        typeof task.text === "string" &&
        typeof task.completed === "boolean" &&
        typeof task.createdAt === "number",
    );
  } catch {
    return [];
  }
};
