import { useTasks } from '../context/TaskContext';
import { CheckCircle, Circle, Clock, ListTodo } from 'lucide-react';

export function Dashboard() {
  const { state } = useTasks();
  const { tasks } = state;

  const stats = [
    {
      label: 'Total Tasks',
      value: tasks.length,
      icon: ListTodo,
      color: 'indigo',
      bgGradient: 'from-indigo-50 to-indigo-100/50 dark:from-indigo-900/20 dark:to-indigo-900/10'
    },
    {
      label: 'Completed',
      value: tasks.filter((task) => task.status === 'done').length,
      icon: CheckCircle,
      color: 'emerald',
      bgGradient: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-900/10'
    },
    {
      label: 'In Progress',
      value: tasks.filter((task) => task.status === 'in-progress').length,
      icon: Clock,
      color: 'blue',
      bgGradient: 'from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10'
    },
    {
      label: 'To Do',
      value: tasks.filter((task) => task.status === 'todo').length,
      icon: Circle,
      color: 'amber',
      bgGradient: 'from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`
            relative overflow-hidden rounded-xl
            bg-gradient-to-br ${stat.bgGradient}
            dark:bg-gray-800 
            border border-gray-100 dark:border-gray-700
            transition-all duration-300
            hover:shadow-lg
            group
          `}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span 
                className={`
                  inline-flex items-center justify-center p-1.5
                  rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30
                  text-${stat.color}-600 dark:text-${stat.color}-300
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              >
                <stat.icon className="w-4 h-4" />
              </span>
              <div 
                className={`
                  text-sm font-medium
                  text-gray-600 dark:text-gray-300
                `}
              >
                {stat.label}
              </div>
            </div>
            
            <div className="relative">
              <div 
                className={`
                  text-2xl font-bold
                  text-gray-900 dark:text-white
                `}
              >
                {stat.value}
              </div>
              <div 
                className="
                  mt-0.5 text-xs
                  text-gray-500 dark:text-gray-400
                "
              >
                {stat.value === 1 ? 'Task' : 'Tasks'}
              </div>
            </div>

            {/* Decorative background element */}
            <div 
              className={`
                absolute -right-4 -bottom-4
                w-16 h-16
                bg-${stat.color}-500/10 dark:bg-${stat.color}-500/5
                rounded-full
                transition-transform duration-300
                group-hover:scale-150
              `}
            />
          </div>
        </div>
      ))}
    </div>
  );
}