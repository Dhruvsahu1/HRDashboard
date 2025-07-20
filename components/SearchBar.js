// components/SearchBar.js
'use client';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="w-full md:w-64 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
      placeholder="Search by name, email, or department..."
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Search users"
    />
  );
} 