import Icon from './Icon'

type TaskFooterProps = {
  taskCount: number
  completedCount: number
  hasCompletedTasks: boolean
  onClearCompleted: () => void
}

const TaskFooter = ({ taskCount, completedCount, hasCompletedTasks, onClearCompleted }: TaskFooterProps) => {
  const summary = taskCount === 0
    ? 'Your list is ready when you are'
    : `${completedCount} of ${taskCount} completed`

  const handleClearCompleted = () => {
    onClearCompleted()
  }

  return (
    <footer className="mx-4 flex min-h-[45px] items-center justify-between border-t border-[#eeece5] text-[10px] text-[#aaa79e] sm:mx-[22px] sm:min-h-[48px]">
      <span className="inline-flex items-center gap-[6px]">
        <span className="text-[#9baa8d]"><Icon name="checkCircle" size={15} /></span>
        {summary}
      </span>
      {hasCompletedTasks && (
        <button className="cursor-pointer border-0 bg-transparent py-[5px] pl-2 text-[10px] text-[#99968e] hover:text-[#bd7267] focus-visible:outline-2 focus-visible:outline-[#afc19e] focus-visible:outline-offset-2" type="button" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TaskFooter