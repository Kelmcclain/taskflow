import { Plus } from 'lucide-react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TaskFilters } from './components/TaskFilters';
import { TaskSearch } from './components/TaskSearch';
import { TaskColumns } from './components/TaskColumns';
import { TaskForm } from './components/TaskForm';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { TaskProvider } from './context/TaskContext';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import { ScrollToTop } from './components/ScrollToTop';

function DashboardPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Task Dashboard</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-64">
            <TaskSearch />
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Task
          </button>
        </div>
      </div>
      <TaskFilters />
      <Dashboard />
      <TaskColumns />
      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </main>
  );
}

// Layout component to handle scroll behavior
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'dark:bg-gray-800 dark:text-white',
            }} 
          />
          <ScrollToTop /> {/* Add ScrollToTop component */}
          <Header />
          <Layout>
            <Routes>
              <Route path="/taskflow" element={<DashboardPage />} />
              <Route path="/taskflow/about" element={<AboutPage />} />
              <Route path="/taskflow/contact" element={<ContactPage />} />
              <Route path="/taskflow/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path='/taskflow/terms-of-service' element={<TermsOfServicePage />} />
            </Routes>
          </Layout>
          <Footer />
        </div>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;