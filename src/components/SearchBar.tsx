'use client';

import { useSearch } from '@/components/SearchProvider';
import { Search, X } from 'lucide-react';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative flex items-center group">
      <div className="absolute left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-200" />
      </div>

      <input
        type="text"
        placeholder="Buscar notícias do Vasco..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-12 py-3 rounded-xl bg-black/90 text-white placeholder-gray-400 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-black/50"
      />

      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-4 p-1 rounded-full hover:bg-gray-700 transition-colors duration-200 group/clear"
          aria-label="Limpar busca"
        >
          <X className="h-5 w-5 text-gray-400 group-hover/clear:text-primary transition-colors" />
        </button>
      )}

      {searchQuery && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent opacity-50"></div>
      )}
    </div>
  );
}
