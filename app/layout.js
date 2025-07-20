// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'HR Dashboard',
  description: 'Manage employees and rewards',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="p-4 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
