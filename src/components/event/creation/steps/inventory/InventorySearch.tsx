import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Input from '../../../../ui/Input';
import { useDebounce } from '../../../../../hooks/useDebounce';

interface InventorySearchProps {
  onSearch: (query: string) => void;
}

export default function InventorySearch({ onSearch }: InventorySearchProps) {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(onSearch, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <Input
        type="search"
        placeholder="Search inventory items..."
        value={query}
        onChange={handleChange}
        className="pl-10"
      />
    </div>
  );
}