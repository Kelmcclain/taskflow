import { useMemo } from 'react';
import { Task } from '../types/task';
import { TaskCard } from './TaskCard';
import { useTasks } from '../context/TaskContext';

export function TaskList() {
  const { state } = useTasks();
  const { tasks, filters, isLoading, error } = state;

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch = filters.status === 'all' || task.status === filters.status;
      const priorityMatch = filters.priority === 'all' || task.priority === filters.priority;
      return statusMatch && priorityMatch;
    });
  }, [tasks, filters]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tasks found matching the current filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
