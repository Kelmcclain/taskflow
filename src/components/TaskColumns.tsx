import { TaskStatus } from '../types/task';
import { useTasks } from '../context/TaskContext';
import { TaskCard } from './TaskCard';
import { filterTasks } from '../utils/filterTasks';

const columns: { id: TaskStatus; title: string }[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' }
];

export function TaskColumns() {
  const { state } = useTasks();
  const filteredTasks = filterTasks(state.tasks, state.filters, state.searchTerm);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => (
        <div 
          key={column.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-200 border border-gray-100 dark:border-gray-700"
        >
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
              {column.title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredTasks.filter(t => t.status === column.id).length} tasks
            </span>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {filteredTasks
                .filter(task => task.status === column.id)
                .map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
