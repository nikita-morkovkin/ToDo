import { TASK_FILTERS } from '../consts/task.consts'
import type { TaskFilter } from '../types/task.types'
import FilterTab from './FilterTab'

type TaskFiltersProps = {
  filter: TaskFilter
  taskCount: number
  remaining: number
  onFilterChange: (filter: TaskFilter) => void
}

const TaskFilters = ({ filter, taskCount, remaining, onFilterChange }: TaskFiltersProps) => {
  const remainingLabel = `${remaining} ${remaining === 1 ? 'thing' : 'things'} to do`

  return (
    <div className="mx-4 flex min-h-[55px] items-center justify-between border-b border-[#eeece5] sm:mx-[22px] sm:min-h-[59px]">
      <div className="flex self-stretch items-stretch gap-[13px] sm:gap-[18px]" role="tablist" aria-label="Filter tasks">
        {TASK_FILTERS.map((item) => (
          <FilterTab key={item.value} filter={item.value} selectedFilter={filter} taskCount={taskCount} onFilterChange={onFilterChange} />
        ))}
      </div>
      <span className="text-[9px] text-[#aaa79f] sm:text-[10px]">{remainingLabel}</span>
    </div>
  )
}

export default TaskFilters