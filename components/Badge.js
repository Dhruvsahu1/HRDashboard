'use client';

export default function Badge({ children, color = 'blue' }) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    gray: 'bg-gray-200 text-gray-800',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${colorMap[color] || colorMap.blue}`}>
      {children}
    </span>
  );
} 