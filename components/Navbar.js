// components/Navbar.js
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center gap-4">
        <span className="font-bold text-xl">HR Dashboard</span>
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/bookmarks" className="hover:underline">Bookmarks</Link>
        <Link href="/analytics" className="hover:underline">Analytics</Link>
      </div>
    </nav>
  );
}