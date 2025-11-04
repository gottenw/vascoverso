'use client';

import { useSearch } from '@/components/SearchProvider';
import { Search } from 'lucide-react';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
      <input
        type="text"
        placeholder="Buscar notícias..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-foreground dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
