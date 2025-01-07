import { FileText, ShieldAlert, Bot, Users, CreditCard, Clock, MessageSquare } from 'lucide-react';

const termsections = [
  {
    icon: FileText,
    title: 'Account Terms',
    description: 'You must be 13 years or older to use TaskFlow. You are responsible for maintaining the security of your account and password.'
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    description: 'Free accounts are available. Premium features require a paid subscription. All payments are processed securely through our payment providers.'
  },
  {
    icon: ShieldAlert,
    title: 'Acceptable Use',
    description: 'Your use of TaskFlow must comply with all applicable laws and regulations. Do not misuse our services for illegal or unauthorized purposes.'
  },
  {
    icon: Bot,
    title: 'API Usage',
    description: 'API access is available for premium accounts. Usage must comply with our API guidelines and rate limits.'
  },
  {
    icon: Users,
    title: 'Shared Resources',
    description: 'When sharing tasks or workspaces, you remain responsible for the content you share and who you share it with.'
  },
  {
    icon: Clock,
    title: 'Service Uptime',
    description: 'While we strive for 99.9% uptime, we do not guarantee uninterrupted access to our services and may perform maintenance as needed.'
  }
];

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white px-4 py-16 dark:from-indigo-950 dark:to-gray-900 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Please read these terms carefully before using TaskFlow. By using our service, you agree to be bound by these terms.
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

        {/* Introduction Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Welcome to TaskFlow
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                These Terms of Service ("Terms") govern your access to and use of TaskFlow's website, products, and services ("Services"). TaskFlow is operated by TaskFlow Inc. These Terms affect your legal rights, so please read them carefully.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {termsections.map((section) => {
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

        {/* Additional Terms Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Additional Terms
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Modifications:</strong> We reserve the right to modify these Terms at any time. We'll notify you of significant changes via email or through the service.
                </p>
                <p>
                  <strong>Termination:</strong> We may terminate or suspend your access to our Services immediately, without prior notice, for any breach of these Terms.
                </p>
                <p>
                  <strong>Disclaimer:</strong> TaskFlow is provided "as is" without any warranties, express or implied. We do not warrant that the service will be uninterrupted or error-free.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> In no event shall TaskFlow be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative overflow-hidden bg-indigo-600 px-4 py-16 dark:bg-indigo-900 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid-slate-50/[0.05]"></div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Questions About Our Terms?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Legal: mcclainkel@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TermsOfServicePage;