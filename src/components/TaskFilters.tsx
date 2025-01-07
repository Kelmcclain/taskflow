import { TaskStatus, TaskPriority } from '../types/task';
import { useTasks } from '../context/TaskContext';

export function TaskFilters() {
  const { state, dispatch } = useTasks();

  const statusOptions: { value: TaskStatus | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
  ];

  const priorityOptions: { value: TaskPriority | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];

  return (
    <div className="flex gap-6 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Status
        </label>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => dispatch({
                type: 'SET_FILTERS',
                payload: { ...state.filters, status: option.value }
              })}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${state.filters.status === option.value
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 ring-2 ring-indigo-500'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Priority
        </label>
        <div className="flex flex-wrap gap-2">
          {priorityOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => dispatch({
                type: 'SET_FILTERS',
                payload: { ...state.filters, priority: option.value }
              })}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${state.filters.priority === option.value
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 ring-2 ring-indigo-500'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}