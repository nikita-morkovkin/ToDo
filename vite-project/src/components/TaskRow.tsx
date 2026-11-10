import type { Task } from "../types/task.types";
import Icon from "./Icon";

type TaskRowProps = {
  task: Task;
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

const TaskRow = ({ task, onToggleTask, onDeleteTask }: TaskRowProps) => {
  const rowClass = task.completed
    ? "text-[#aaa79f] line-through decoration-[#c6c3ba]"
    : "text-[#504e47]";

  const checkClass = task.completed
    ? "border-[#879b78] bg-[#879b78]"
    : "border-[#d8d6cc] bg-transparent hover:border-[#879b78]";

  const toggleLabel = task.completed
    ? `Mark ${task.text} as not completed`
    : `Mark ${task.text} as completed`;

  const rowClassName = "flex min-h-[56px] items-center gap-[10px] border-b border-[#f1efe9] py-1 last:border-0 sm:min-h-[59px] sm:gap-[13px]";

  const handleToggle = () => {
    onToggleTask(task.id);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <li className={rowClassName}>
      <button
        className={`grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full border-[1.5px] text-white transition hover:scale-[1.08] ${checkClass}`}
        type="button"
        onClick={handleToggle}
        aria-label={toggleLabel}
        aria-pressed={task.completed}
      >
        {task.completed && <Icon name="check" size={15} />}
      </button>
      <span
        className={`[overflow-wrap:anywhere] flex-1 text-[11px] leading-[1.6] transition-colors sm:text-xs ${rowClass}`}
      >
        {task.text}
      </span>
      <button
        className="grid h-[31px] w-[31px] place-items-center rounded-[7px] text-[#b5b1a8] opacity-75 transition hover:bg-[#f8ece8] hover:text-[#bd7267] sm:opacity-45 sm:hover:opacity-100"
        type="button"
        onClick={handleDelete}
        aria-label={`Delete ${task.text}`}
        title="Delete task"
      >
        <Icon name="trash" size={17} />
      </button>
    </li>
  );
};

export default TaskRow;
