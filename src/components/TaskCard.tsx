import { useState } from 'react';
import { Task } from '../types/task';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { TaskModal } from './TaskModal';
import { formatDistanceToNow } from 'date-fns';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    'todo': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
    'done': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
  };

  const priorityColors = {
    'low': 'border-l-emerald-500 dark:border-l-emerald-400',
    'medium': 'border-l-amber-500 dark:border-l-amber-400',
    'high': 'border-l-rose-500 dark:border-l-rose-400'
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        className={`
          relative rounded-lg border-l-4 ${priorityColors[task.priority]}
          bg-white dark:bg-gray-800 
          border border-gray-100 dark:border-gray-700
          shadow-sm hover:shadow-md transition-all duration-300 
          transform hover:-translate-y-1 cursor-pointer
        `}
      >
        <div className="p-4">
          {/* Title and Status Badge */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
              {task.title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
              {task.status.replace('-', ' ')}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {task.description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pr-8">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Due {formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Created {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</span>
            </div>
          </div>

          {/* View Details Arrow - Appears on Hover */}
          <div 
            className={`
              absolute right-4 top-1/2 -translate-y-1/2
              transform transition-all duration-300 
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
            `}
          >
            <ArrowRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          </div>

          {/* Priority Indicator */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {task.priority} priority
            </span>
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
      />
    </>
  );
}