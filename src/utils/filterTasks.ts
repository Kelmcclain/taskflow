import { Task, TaskFilters } from '../types/task';

export function filterTasks(
  tasks: Task[],
  filters: TaskFilters,
  searchTerm: string
): Task[] {
  return tasks.filter((task) => {
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
    const matchesSearch = searchTerm === '' || 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesPriority && matchesSearch;
  });
}
