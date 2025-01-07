import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputStyles = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-offset-gray-900";
const labelStyles = "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300";

export function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white px-4 py-16 dark:from-indigo-950 dark:to-gray-900 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Have questions about TaskFlow? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="name" className={labelStyles}>
                    <User className="h-4 w-4 text-gray-400" />
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    className={inputStyles}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className={labelStyles}>
                    <Mail className="h-4 w-4 text-gray-400" />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={inputStyles}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className={labelStyles}>
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  {...register('subject', { required: 'Subject is required' })}
                  className={inputStyles}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className={labelStyles}>
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className={inputStyles}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all hover:from-indigo-600 hover:to-indigo-700 dark:from-indigo-400 dark:to-indigo-500 dark:hover:from-indigo-500 dark:hover:to-indigo-600 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl bg-indigo-50 p-6 dark:bg-indigo-900/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                For general inquiries, email us at:
                <a href="mailto:mcclainkel@gmail.com" className="mt-1 block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  mcclainkel@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-6 dark:bg-indigo-900/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub Issues</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                For bug reports and feature requests, visit:
                <a href="https://github.com/Kelmcclain/taskflow/issues" target="_blank" rel="noopener noreferrer" className="mt-1 block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  GitHub Issues
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;