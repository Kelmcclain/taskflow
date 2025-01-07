import { X } from 'lucide-react';
import { Task, TaskStatus } from '../types/task';
import { useTasks } from '../context/TaskContext';
import { useState } from 'react';
import { Modal } from './ui/Modal';
import toast from 'react-hot-toast';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

const statusOptions: { value: TaskStatus; label: string }[] = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' }
];

export function TaskModal({ isOpen, onClose, task }: TaskModalProps) {
  const { dispatch } = useTasks();
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState<TaskStatus>(task.status);

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: {
        ...task,
        description,
        status
      }
    });
    toast.success('Task updated successfully');
    onClose();
  };

  const statusColors = {
    'todo': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
    'done': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={task.title}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setStatus(option.value)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${status === option.value
                    ? `${statusColors[option.value]} ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 ring-${option.value === 'todo' ? 'yellow' : option.value === 'in-progress' ? 'blue' : 'green'}-500`
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
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 
              focus:border-indigo-500 dark:focus:border-indigo-400"
            rows={5}
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <span className="font-medium">Created:</span>{' '}
              {new Date(task.createdAt).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Due:</span>{' '}
              {new Date(task.dueDate).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Priority:</span>{' '}
              {task.priority}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
              bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
              rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 
              border border-transparent rounded-lg hover:bg-indigo-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
