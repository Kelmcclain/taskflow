import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { AlertCircle, Calendar, ListTodo, X } from 'lucide-react';
import { Task, TaskPriority, TaskStatus } from '../types/task';
import { useTasks } from '../context/TaskContext';
import toast from 'react-hot-toast';

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

const inputStyles = "w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-3 text-sm text-gray-900 shadow-sm backdrop-blur-xl transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-offset-gray-900";
const labelStyles = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const errorStyles = "mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/30 dark:text-red-400";

export function TaskForm({ isOpen, onClose }: TaskFormProps) {
  const { dispatch } = useTasks();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<TaskFormData>();

  const watchedStatus = watch('status');
  const watchedPriority = watch('priority');

  const getStatusColor = (status: TaskStatus) => {
    const colors = {
      'todo': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
      'in-progress': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
      'done': 'bg-green-500/10 text-green-700 dark:text-green-400'
    };
    return colors[status] || '';
  };

  const getPriorityColor = (priority: TaskPriority) => {
    const colors = {
      'low': 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
      'medium': 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
      'high': 'bg-red-500/10 text-red-700 dark:text-red-400'
    };
    return colors[priority] || '';
  };

  const onSubmitForm = (data: TaskFormData) => {
    const newTask: Omit<Task, 'id'> = {
      ...data,
      createdAt: new Date(),
      dueDate: new Date(data.dueDate)
    };

    dispatch({
      type: 'ADD_TASK',
      payload: {
        ...newTask,
        id: crypto.randomUUID()
      }
    });

    toast.success('Task created successfully');
    reset();
    onClose();
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity dark:bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-lg transform overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl text-gray-900 shadow-xl transition-all dark:bg-gray-800/80 dark:text-gray-100">
          <div className="relative border-b border-gray-100 px-6 py-4 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20">
                <ListTodo className="h-5 w-5" />
              </div>
              <Dialog.Title className="text-xl font-semibold">
                Create New Task
              </Dialog.Title>
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmitForm)} className="px-6 py-4">
            <div className="space-y-6">
              <div className="space-y-1">
                <label className={labelStyles}>
                  Title
                </label>
                <input
                  {...register('title', { required: 'Title is required' })}
                  className={inputStyles}
                  placeholder="Enter task title"
                  autoFocus
                />
                {errors.title && (
                  <div className={errorStyles}>
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.title.message}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className={labelStyles}>
                  Description
                </label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  className={`${inputStyles} min-h-[120px]`}
                  placeholder="Enter task description"
                  rows={3}
                />
                {errors.description && (
                  <div className={errorStyles}>
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.description.message}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className={labelStyles}>
                    Status
                  </label>
                  <select
                    {...register('status')}
                    defaultValue="todo"
                    className={`${inputStyles} ${watchedStatus ? getStatusColor(watchedStatus) : ''}`}
                  >
                    <option value="todo" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">To Do</option>
                    <option value="in-progress" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">In Progress</option>
                    <option value="done" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">Done</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className={labelStyles}>
                    Priority
                  </label>
                  <select
                    {...register('priority')}
                    defaultValue="medium"
                    className={`${inputStyles} ${watchedPriority ? getPriorityColor(watchedPriority) : ''}`}
                  >
                    <option value="low" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                      Low
                    </option>
                    <option value="medium" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                      Medium
                    </option>
                    <option value="high" className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                      High
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelStyles}>
                  Due Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    {...register('dueDate', { required: 'Due date is required' })}
                    className={`${inputStyles} pl-10`}
                  />
                </div>
                {errors.dueDate && (
                  <div className={errorStyles}>
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.dueDate.message}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 dark:border-gray-700 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2.5 text-sm font-medium text-gray-700 backdrop-blur-xl transition-all duration-200 hover:bg-gray-100/50 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:from-indigo-600 hover:to-indigo-700 dark:from-indigo-400 dark:to-indigo-500 dark:hover:from-indigo-500 dark:hover:to-indigo-600 sm:w-auto"
              >
                Create Task
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}