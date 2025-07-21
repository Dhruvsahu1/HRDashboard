'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import RatingStars from '../../../components/RatingStars';
import Badge from '../../../components/Badge';
import TabbedUI from '../../../components/TabbedUI';

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
function getRandomHistory() {
  return Array.from({ length: 5 }, (_, i) => ({
    year: 2019 + i,
    rating: getRandomRating(),
  }));
}

export default function EmployeeDetails() {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser({
          ...data,
          department: getRandomDepartment(),
          rating: getRandomRating(),
          history: getRandomHistory(),
          bio: 'A passionate and dedicated team member with a strong track record in their department.',
        });
        setLoading(false);
      })
      .catch(() => {
        setError('User not found');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !user) return <div className="text-red-500">{error || 'User not found'}</div>;

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div>
          <div className="mb-2">{user.bio}</div>
          <div className="flex gap-4 flex-wrap">
            <div><span className="font-semibold">Email:</span> {user.email}</div>
            <div><span className="font-semibold">Phone:</span> {user.phone}</div>
            <div><span className="font-semibold">Department:</span> <Badge>{user.department}</Badge></div>
            <div><span className="font-semibold">Age:</span> {user.age}</div>
          </div>
        </div>
      ),
    },
    {
      label: 'Projects',
      content: (
        <ul className="list-disc pl-5">
          <li>Project Alpha (2022) - Contributor</li>
          <li>Project Beta (2023) - Lead</li>
          <li>Project Gamma (2024) - Reviewer</li>
        </ul>
      ),
    },
    {
      label: 'Feedback',
      content: (
        <form className="flex flex-col gap-2 max-w-md">
          <textarea className="border rounded p-2 dark:bg-gray-700" placeholder="Leave feedback..." rows={3} required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Submit</button>
        </form>
      ),
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user.image || `https://randomuser.me/api/portraits/men/${user.id}.jpg`}
          alt={user.firstName}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <div className="text-2xl font-bold">{user.firstName} {user.lastName}</div>
          <div className="flex items-center gap-2 mt-1">
            <RatingStars rating={user.rating} />
            <Badge color={user.rating >= 4 ? 'green' : user.rating >= 2 ? 'yellow' : 'red'}>
              {user.rating >= 4 ? 'Excellent' : user.rating >= 2 ? 'Average' : 'Needs Improvement'}
            </Badge>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold mb-1">Performance History</div>
        <div className="flex gap-2">
          {user.history.map(h => (
            <div key={h.year} className="flex flex-col items-center">
              <span className="text-xs text-gray-500">{h.year}</span>
              <RatingStars rating={h.rating} />
            </div>
          ))}
        </div>
      </div>
      <TabbedUI tabs={tabs} />
    </div>
  );
} 