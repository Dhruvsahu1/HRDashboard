// hooks/useBookmarks.js
'use client';
import { useStore } from '../store/bookmarksStore';

export function useBookmarks() {
  const bookmarks = useStore(state => state.bookmarks);
  const addBookmark = useStore(state => state.addBookmark);
  const removeBookmark = useStore(state => state.removeBookmark);
  const isBookmarked = (id) => bookmarks.some(u => u.id === id);
  return { bookmarks, addBookmark, removeBookmark, isBookmarked };
}