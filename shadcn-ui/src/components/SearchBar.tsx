import { useState, useRef, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface SearchBarProps {
  onSearch: (query: string, filters: string[]) => void;
  suggestions: string[];
}

export default function SearchBar({ onSearch, suggestions }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = ['AI Ethics', 'AI & Society', 'Future of AI', 'Deepfakes', 'Data Privacy', 'Algorithm Bias'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const types = ['Article', 'Video', 'Infographic'];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleSearch = () => {
    onSearch(query, selectedFilters);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion, selectedFilters);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for topics, e.g., 'AI Ethics', 'deepfakes'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => query.length > 0 && setShowSuggestions(true)}
              className="pl-10 pr-4 py-3 text-base"
            />
            
            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-card border border-border rounded-md shadow-lg max-h-40 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground text-sm transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <Search className="inline w-3 h-3 mr-2 text-muted-foreground" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Button 
            onClick={handleSearch}
            className="px-6"
          >
            Search
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Filter className="w-4 h-4" />
                {selectedFilters.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
                    {selectedFilters.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Filters</h4>
                  {selectedFilters.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Categories</h5>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedFilters.includes(category) ? "default" : "secondary"}
                        className="cursor-pointer hover:opacity-80"
                        onClick={() => toggleFilter(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Level</h5>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <Badge
                        key={level}
                        variant={selectedFilters.includes(level) ? "default" : "secondary"}
                        className="cursor-pointer hover:opacity-80"
                        onClick={() => toggleFilter(level)}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Content Type</h5>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <Badge
                        key={type}
                        variant={selectedFilters.includes(type) ? "default" : "secondary"}
                        className="cursor-pointer hover:opacity-80"
                        onClick={() => toggleFilter(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedFilters.map((filter) => (
              <Badge
                key={filter}
                variant="outline"
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => toggleFilter(filter)}
              >
                {filter} ×
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}