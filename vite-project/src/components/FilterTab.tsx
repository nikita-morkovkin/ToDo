import type { TaskFilter } from '../types/task.types'

type FilterTabProps = {
  filter: TaskFilter
  selectedFilter: TaskFilter
  onFilterChange: (filter: TaskFilter) => void
  taskCount: number
}

const FilterTab = ({ filter, selectedFilter, onFilterChange, taskCount }: FilterTabProps) => {
  const isSelected = selectedFilter === filter
  const selectedClass = isSelected ? 'font-semibold text-[#64795a] after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-t after:bg-[#879b78]' : 'text-[#99968e] hover:text-[#64795a]'
  const countLabel = filter === 'all' ? taskCount : null

  const handleClick = () => {
    onFilterChange(filter)
  }

  return (
    <button
      className={`relative inline-flex items-center gap-[6px] px-0.5 text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-[#afc19e] focus-visible:outline-offset-2 sm:text-[11px] ${selectedClass}`}
      type="button"
      onClick={handleClick}
      role="tab"
      aria-selected={isSelected}
    >
      {filter === 'all' ? 'All tasks' : filter === 'active' ? 'To do' : 'Done'}
      {countLabel !== null && <span className="min-w-[17px] rounded-[20px] bg-[#f0efe9] px-[5px] py-px text-center text-[9px] text-[#807e75]">{countLabel}</span>}
    </button>
  )
}

export default FilterTab