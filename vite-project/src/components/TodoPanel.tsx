import type { Task, TaskFilter } from "../types/task.types";
import EmptyState from "./EmptyState";
import TaskComposer from "./TaskComposer";
import TaskFilters from "./TaskFilters";
import TaskFooter from "./TaskFooter";
import TaskList from "./TaskList";

type TodoPanelProps = {
  tasks: Task[];
  filter: TaskFilter;
  input: string;
  remaining: number;
  visibleTasks: Task[];
  hasCompletedTasks: boolean;
  completedCount: number;
  onInputChange: (value: string) => void;
  onAddTask: () => void;
  onFilterChange: (filter: TaskFilter) => void;
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onClearCompleted: () => void;
};

const TodoPanel = ({
  tasks,
  filter,
  input,
  remaining,
  visibleTasks,
  hasCompletedTasks,
  completedCount,
  onInputChange,
  onAddTask,
  onFilterChange,
  onToggleTask,
  onDeleteTask,
  onClearCompleted,
}: TodoPanelProps) => {
  const hasVisibleTasks = visibleTasks.length > 0;

  return (
    <section
      className="overflow-hidden rounded-[15px] border border-[#eae8e0] bg-[#fffefa] shadow-[0_14px_45px_#57503a0b,0_2px_8px_#57503a08]"
      aria-label="To-do list"
    >
      <TaskComposer
        input={input}
        onInputChange={onInputChange}
        onAddTask={onAddTask}
      />
      <TaskFilters
        filter={filter}
        taskCount={tasks.length}
        remaining={remaining}
        onFilterChange={onFilterChange}
      />
      {hasVisibleTasks ? (
        <TaskList
          tasks={visibleTasks}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ) : (
        <EmptyState filter={filter} />
      )}
      <TaskFooter
        taskCount={tasks.length}
        completedCount={completedCount}
        hasCompletedTasks={hasCompletedTasks}
        onClearCompleted={onClearCompleted}
      />
    </section>
  );
};

export default TodoPanel;
