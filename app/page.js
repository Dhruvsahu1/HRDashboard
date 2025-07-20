// app/page.js
'use client';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import useSearch from '../hooks/useSearch';
import useUserData from '../hooks/useUserData';

export default function HomePage() {
  const { users, loading, error } = useUserData();
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ department: [], rating: [] });
  const filteredUsers = useSearch(users, search, filters);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employee Performance Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <FilterDropdown users={users} filters={filters} setFilters={setFilters} />
      </div>
      {loading && <div className="text-center">Loading users...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-3 gap-8">
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      {!loading && filteredUsers.length === 0 && (
        <div className="text-center mt-8 text-gray-500">No users found.</div>
      )}
    </div>
  );
} 