# Task Management Dashboard

A modern, responsive task management application built with React and TypeScript. Features a clean UI with dark mode support, task organization, and real-time updates.

## Features

### Core Functionality
- ✨ Intuitive task management interface
- 📱 Fully responsive design
- 🌓 Dark/Light theme support
- 🔍 Task filtering and search
- 📊 Real-time task statistics
- 🎯 Priority-based task organization

### Task Management
- Create, edit, and delete tasks
- Organize tasks by status (To Do, In Progress, Done)
- Set task priorities (Low, Medium, High)
- Add detailed descriptions and due dates
- Track task creation and completion dates

### User Interface
- Clean and modern design
- Interactive cards with hover effects
- Status-based color coding
- Responsive grid layout
- Smooth animations and transitions
- Accessible design patterns

## Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **State Management**: React Context
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Kelmcclain/taskflow.git
cd taskflow
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx   # Statistics dashboard
│   ├── Header.tsx      # Application header
│   ├── TaskCard.tsx    # Individual task display
│   ├── TaskColumns.tsx # Kanban-style columns
│   ├── TaskFilters.tsx # Filtering options
│   └── TaskForm.tsx    # Task creation/editing
├── context/            # React Context providers
├── types/              # TypeScript definitions
├── styles/             # Global styles
└── App.tsx            # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Design Decisions

### Why Tailwind CSS?
- Utility-first approach for rapid development
- Built-in dark mode support
- Highly customizable design system
- Optimal production build sizes

### Why Context over Redux?
- Simpler state management needs
- Built-in React solution
- Reduced boilerplate
- Easier testing and maintenance

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Design inspired by modern UI/UX practices
- Icons provided by [Lucide Icons](https://lucide.dev)
- Built with [Vite](https://vitejs.dev/) + React
