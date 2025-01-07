import { Search } from 'lucide-react';
import { useTasks } from '../context/TaskContext';
import { useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';

export function TaskSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const { dispatch } = useTasks();

  const debouncedSearch = debounce((term: string) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: term.toLowerCase(),
    });
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}
