import { Activity, Coffee, Github, Heart, Sparkles, Twitter, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Built for Speed',
    description: 'Optimized for performance to help you manage tasks quickly and efficiently.',
  },
  {
    icon: Heart,
    title: 'Thoughtfully Crafted',
    description: 'Every feature was carefully designed with the user experience in mind.',
  },
  {
    icon: Activity,
    title: 'Active Development',
    description: 'Constantly improving with regular updates and new features.',
  },
  {
    icon: Coffee,
    title: 'Developer Friendly',
    description: 'Built with modern tech stack and clean code for fellow developers.',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white px-4 py-16 dark:from-indigo-950 dark:to-gray-900 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                About TaskFlow
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                A passion project built to make task management simple and enjoyable. Created by a developer who believes in the power of well-crafted software.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Story Behind TaskFlow
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Hi! I'm McClain, a software developer passionate about creating tools that make people's lives easier. TaskFlow started as a solution to my own need for a simple yet powerful task management system.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                What began as a personal project has grown into something I'm proud to share with others. Built with React, Tailwind CSS, and lots of ☕️, TaskFlow represents my commitment to clean code and intuitive design.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://github.com/Kelmcclain/taskflow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
                <a 
                  href="https://twitter.com/Kelmcclain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                  <Twitter className="h-4 w-4" />
                  Follow Updates
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Built with Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
              Every feature in TaskFlow was implemented with attention to detail and a focus on user experience.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md dark:bg-gray-800 dark:ring-white/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative overflow-hidden bg-indigo-600 px-4 py-16 dark:bg-indigo-900 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-slate-50/[0.05]"></div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Have questions or feedback? I'd love to hear from you! Feel free to reach out through GitHub or Twitter.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Currently working on new features</span>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default AboutPage;