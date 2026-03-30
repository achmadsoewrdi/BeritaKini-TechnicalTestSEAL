import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Input from './ui/Input';

export default function SearchBar({ className = '' }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className={className}>
      <Input
        type="search"
        placeholder="Cari berita..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={Search}
        className="w-full sm:w-64 lg:w-80"
      />
    </form>
  );
}
