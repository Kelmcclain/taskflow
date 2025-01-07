import { format, parseISO } from 'date-fns';

export function formatDate(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'MMM d, yyyy');
}

export function parseTaskDate(date: Date | string): Date {
  return typeof date === 'string' ? parseISO(date) : date;
}
