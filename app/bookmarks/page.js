'use client';
import { useBookmarks } from '../../hooks/useBookmarks';
import Card from '../../components/Card';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bookmarked Employees</h1>
      {bookmarks.length === 0 ? (
        <div className="text-gray-500 mt-8 text-center">No bookmarks yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarks.map(user => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
} 