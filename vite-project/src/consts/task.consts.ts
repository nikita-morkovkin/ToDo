export const TASK_STORAGE_KEY = 'little-list.tasks.v1'

export const TASK_FILTERS = [
  { value: 'all', label: 'All tasks' },
  { value: 'active', label: 'To do' },
  { value: 'completed', label: 'Done' },
] as const