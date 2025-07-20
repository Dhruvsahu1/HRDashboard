// components/FilterDropdown.js
'use client';
import { useMemo } from 'react';

export default function FilterDropdown({ users = [], filters, setFilters }) {
  // Get unique departments from users
  const departments = useMemo(() => {
    const set = new Set(users.map(u => u.department));
    return Array.from(set).filter(Boolean);
  }, [users]);

  const ratings = [1, 2, 3, 4, 5];

  const handleDeptChange = (dept) => {
    setFilters(f => ({
      ...f,
      department: f.department.includes(dept)
        ? f.department.filter(d => d !== dept)
        : [...f.department, dept],
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters(f => ({
      ...f,
      rating: f.rating.includes(rating)
        ? f.rating.filter(r => r !== rating)
        : [...f.rating, rating],
    }));
  };

  return (
    <div className="flex gap-4">
      {/* Department Filter */}
      <div>
        <div className="font-semibold text-sm mb-1">Department</div>
        <div className="flex flex-wrap gap-2">
          {departments.map(dept => (
            <label key={dept} className="flex items-center gap-1 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.department.includes(dept)}
                onChange={() => handleDeptChange(dept)}
                className="accent-blue-600"
              />
              {dept}
            </label>
          ))}
        </div>
      </div>
      {/* Rating Filter */}
      <div>
        <div className="font-semibold text-sm mb-1">Rating</div>
        <div className="flex gap-2">
          {ratings.map(rating => (
            <label key={rating} className="flex items-center gap-1 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={filters.rating.includes(rating)}
                onChange={() => handleRatingChange(rating)}
                className="accent-yellow-400"
              />
              {rating}★
            </label>
          ))}
        </div>
      </div>
    </div>
  );
} 