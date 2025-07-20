// hooks/useUserData.js
'use client';
import { useEffect, useState } from 'react';

const DEPARTMENTS = [
  'Engineering',
  'HR',
  'Sales',
  'Marketing',
  'Finance',
  'Support',
  'Product',
  'Design',
];

function getRandomDepartment() {
  return DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
}

function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}

export default function useUserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/users?limit=20')
      .then(res => res.json())
      .then(data => {
        const usersWithExtras = data.users.map(u => ({
          ...u,
          department: getRandomDepartment(),
          rating: getRandomRating(),
        }));
        setUsers(usersWithExtras);
        setLoading(false);
      })
      .catch(e => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
} 