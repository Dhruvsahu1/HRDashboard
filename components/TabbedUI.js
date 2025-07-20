// components/TabbedUI.js
'use client';
import { useState } from 'react';

export default function TabbedUI({ tabs = [] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex gap-2 border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`px-4 py-2 -mb-px border-b-2 transition-colors font-medium focus:outline-none ${
              i === active
                ? 'border-blue-600 text-blue-600 dark:border-yellow-400 dark:text-yellow-400'
                : 'border-transparent text-gray-500 hover:text-blue-600 dark:hover:text-yellow-400'
            }`}
            onClick={() => setActive(i)}
            aria-selected={i === active}
            role="tab"
            tabIndex={i === active ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="transition-all duration-300"
        role="tabpanel"
        tabIndex={0}
      >
        {tabs[active]?.content}
      </div>
    </div>
  );
} 