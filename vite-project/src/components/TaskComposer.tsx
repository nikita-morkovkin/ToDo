import type { ChangeEvent, KeyboardEvent } from 'react'
import Icon from './Icon'

type TaskComposerProps = {
  input: string
  onInputChange: (value: string) => void
  onAddTask: () => void
}

const TaskComposer = ({ input, onInputChange, onAddTask }: TaskComposerProps) => {
  const canAddTask = Boolean(input.trim())

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.currentTarget.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onAddTask()
    }
  }

  const handleAddClick = () => {
    onAddTask()
  }

  return (
    <div className="mx-4 flex min-h-[66px] items-center gap-[10px] border-b border-[#eeece5] sm:mx-[22px] sm:min-h-[74px] sm:gap-[13px]">
      <span className="flex text-[#aaa79c]"><Icon name="plus" size={20} /></span>
      <input
        aria-label="Add a task"
        className="min-w-0 flex-1 bg-transparent py-3 text-xs text-[#302f2b] outline-none placeholder:text-[#aaa79f] focus-visible:outline-2 focus-visible:outline-[#afc19e] focus-visible:outline-offset-2 sm:text-[13px]"
        placeholder="Write down a task..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        maxLength={180}
      />
      <button
        className="grid h-[35px] w-[35px] place-items-center rounded-lg bg-[#879b78] p-0 text-white transition hover:bg-[#64795a] focus-visible:outline-2 focus-visible:outline-[#afc19e] focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex sm:h-auto sm:w-auto sm:items-center sm:gap-[7px] sm:px-[13px] sm:py-[9px] sm:text-[11px] sm:font-semibold"
        type="button"
        onClick={handleAddClick}
        disabled={!canAddTask}
      >
        <span className="hidden sm:inline">Add task</span>
        <Icon name="plus" size={17} />
      </button>
    </div>
  )
}

export default TaskComposer