'use client';
import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import useUserData from '../../hooks/useUserData';
import { useBookmarks } from '../../hooks/useBookmarks';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function getDepartmentAverages(users) {
  const deptMap = {};
  users.forEach(u => {
    if (!deptMap[u.department]) deptMap[u.department] = [];
    deptMap[u.department].push(u.rating);
  });
  return Object.entries(deptMap).map(([dept, ratings]) => ({
    department: dept,
    avg: ratings.reduce((a, b) => a + b, 0) / ratings.length,
  }));
}

function getMockBookmarkTrends() {
  return [2, 4, 6, 8, 7, 10, 12];
}

export default function AnalyticsPage() {
  const { users, loading } = useUserData();
  const { bookmarks } = useBookmarks();
  const [deptData, setDeptData] = useState([]);

  useEffect(() => {
    if (!loading && users.length > 0) {
      setDeptData(getDepartmentAverages(users));
    }
  }, [users, loading]);

  const bookmarkTrends = getMockBookmarkTrends();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="font-semibold mb-2">Department-wise Average Ratings</h2>
          <Bar
            data={{
              labels: deptData.map(d => d.department),
              datasets: [
                {
                  label: 'Avg Rating',
                  data: deptData.map(d => d.avg),
                  backgroundColor: 'rgba(59,130,246,0.7)',
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { y: { min: 0, max: 5 } },
            }}
          />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="font-semibold mb-2">Bookmark Trends (Mocked)</h2>
          <Line
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  label: 'Bookmarked Employees',
                  data: bookmarkTrends,
                  borderColor: 'rgba(16,185,129,1)',
                  backgroundColor: 'rgba(16,185,129,0.2)',
                  tension: 0.4,
                  fill: true,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
} 