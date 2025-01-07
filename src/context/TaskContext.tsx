import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Task, TaskFilters } from '../types/task';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface TaskState {
  tasks: Task[];
  filters: TaskFilters;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}

type TaskAction =
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'SET_FILTERS'; payload: TaskFilters }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: TaskState = {
  tasks: [],
  filters: { status: 'all', priority: 'all' },
  searchTerm: '',
  isLoading: false,
  error: null,
};

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
} | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
  const [state, dispatch] = useReducer(taskReducer, {
    ...initialState,
    tasks: storedTasks.map(task => ({
      ...task,
      createdAt: new Date(task.createdAt),
      dueDate: new Date(task.dueDate)
    })),
  });

  useEffect(() => {
    setStoredTasks(state.tasks);
  }, [state.tasks, setStoredTasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
