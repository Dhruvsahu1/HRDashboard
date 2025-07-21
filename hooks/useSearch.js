// hooks/useSearch.js
'use client';

export default function useSearch(users = [], search = '', filters = { department: [], rating: [] }) {
  let filtered = users;
 
  if (search.trim()) {
    const s = search.trim().toLowerCase();
    filtered = filtered.filter(u =>
      (u.firstName + ' ' + u.lastName).toLowerCase().includes(s) ||
      u.email.toLowerCase().includes(s) ||
      (u.department || '').toLowerCase().includes(s)
    );
  }
  
  if (filters.department && filters.department.length > 0) {
    filtered = filtered.filter(u => filters.department.includes(u.department));
  }

  if (filters.rating && filters.rating.length > 0) {
    filtered = filtered.filter(u => filters.rating.includes(u.rating));
  }
  return filtered;
} 