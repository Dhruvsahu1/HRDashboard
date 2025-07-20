// store/bookmarksStore.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  bookmarks: [],
  addBookmark: (user) => set((state) => {
    if (state.bookmarks.some((u) => u.id === user.id)) return state;
    return { bookmarks: [...state.bookmarks, user] };
  }),
  removeBookmark: (user) => set((state) => ({
    bookmarks: state.bookmarks.filter((u) => u.id !== user.id),
  })),
})); 