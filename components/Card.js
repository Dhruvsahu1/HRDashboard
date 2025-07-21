
'use client';
import Link from 'next/link';
import RatingStars from './RatingStars';
import Button from './Button';
import Badge from './Badge';
import { useBookmarks } from '../hooks/useBookmarks';

export default function Card({ user }) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(user.id);

  return (
    <div className="card flex flex-col gap-6 max-w-2xl border bg-gray-500 rounded-md border-gray-600 p-8">
      <div className="flex items-center gap-3">
        <img
          src={user.image || `https://randomuser.me/api/portraits/men/${user.id}.jpg`}
          alt={user.firstName}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div className="min-w-0">
          <div className="font-semibold text-lg truncate overflow-hidden whitespace-nowrap max-w-[160px]">
            {user.firstName} {user.lastName}
          </div>
          <div className="text-sm text-gray-400 truncate overflow-hidden whitespace-nowrap max-w-[160px]">
            {user.email}
          </div>
          <div className="text-xs text-gray-400">
            Age: {user.age} | Dept: <span className="badge">{user.department}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <RatingStars rating={user.rating} />
        <span className="text-xs text-gray-500">({user.rating}/5)</span>
      </div>
      <div className="flex gap-2 mt-3">
        <Link href={`/employee/${user.id}`}>
          <Button className="inline-flex items-center justify-center h-10 px-5 text-gray-400">View</Button>
        </Link>
        <Button
          className="inline-flex items-center justify-center h-10 px-5 text-gray-400"
          onClick={() => (bookmarked ? removeBookmark(user) : addBookmark(user))}
          variant={bookmarked ? 'secondary' : 'primary'}
        >
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </Button>
        <Button
          className="inline-flex items-center justify-center h-10 px-5 text-gray-400"
          variant="success"
          onClick={() => alert('Promoted!')}
        >
          Promote
        </Button>
      </div>
    </div>
  );
} 