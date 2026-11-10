import type { Task } from '../types/task.types'
import TaskRow from './TaskRow'

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

const TaskList = ({ tasks, onToggleTask, onDeleteTask }: TaskListProps) => (
  <ul className="m-0 list-none px-4 sm:px-[22px]">
    {tasks.map((task) => (
      <TaskRow key={task.id} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
    ))}
  </ul>
)

export default TaskList