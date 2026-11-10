import type { TaskFilter } from '../types/task.types'
import Icon from './Icon'

type EmptyStateProps = {
  filter: TaskFilter
}

const EmptyState = ({ filter }: EmptyStateProps) => {
  const title = filter === 'completed' ? 'Nothing checked off yet' : filter === 'active' ? 'All caught up!' : 'A fresh start.'
  const description = filter === 'completed'
    ? 'Finished tasks will be waiting here.'
    : filter === 'active'
      ? 'You’ve made it through your list.'
      : 'Add your first task above and let the ideas flow.'

  return (
    <div className="flex min-h-[236px] flex-col items-center justify-center px-5 py-[25px] text-center">
      <div className="relative mb-[13px] grid h-[57px] w-[57px] rotate-[-4deg] place-items-center rounded-[19px] bg-[#f7f4ec]">
        <span className="text-[#c3a568]"><Icon name="sun" size={27} /></span>
        <span className="absolute -right-[9px] -bottom-[6px] grid h-7 w-7 place-items-center rounded-full border-[3px] border-[#fffefa] bg-[#e9efe4] text-[#879b78]">
          <Icon name="checkCircle" size={24} />
        </span>
      </div>
      <h2 className="m-0 font-serif text-[19px] font-normal tracking-[-.3px]">{title}</h2>
      <p className="mt-[7px] text-[11px] text-[#a09d94]">{description}</p>
    </div>
  )
}

export default EmptyState