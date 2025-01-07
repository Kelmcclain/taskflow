import { Lock, Eye, Database, Bell, RefreshCcw, UserX, HelpCircle } from 'lucide-react';

const privacySections = [
  {
    icon: Database,
    title: 'Data Collection',
    description: 'We collect only essential information needed to provide TaskFlow services, including your email, name, and task data you create.'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Your data is encrypted both in transit and at rest. We implement industry-standard security measures to protect your information.'
  },
  {
    icon: Eye,
    title: 'Data Usage',
    description: 'We use your data solely to provide and improve TaskFlow services. We never sell your personal information to third parties.'
  },
  {
    icon: Bell,
    title: 'Communications',
    description: 'We may send you service-related notifications and updates. You can manage your communication preferences in settings.'
  },
  {
    icon: RefreshCcw,
    title: 'Data Retention',
    description: 'Your data is stored for as long as you maintain an active account. You can request data deletion at any time.'
  },
  {
    icon: UserX,
    title: 'Your Rights',
    description: 'You have the right to access, modify, or delete your personal data. Contact us to exercise these rights.'
  }
];

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white px-4 py-16 dark:from-indigo-950 dark:to-gray-900 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                At TaskFlow, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Last updated: January 2025
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/5">
              <p className="text-gray-600 dark:text-gray-400">
                This Privacy Policy describes how TaskFlow ("we", "our", or "us") collects, uses, and handles your personal information when you use our task management application and related services. By using TaskFlow, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {privacySections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md dark:bg-gray-800 dark:ring-white/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {section.description}
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
              Privacy Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              If you have any questions about our Privacy Policy or how we handle your data, please don't hesitate to contact us.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <HelpCircle className="h-4 w-4" />
              <span>Contact our Privacy Team: mcclainkel@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PrivacyPolicyPage;