import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContentCard from '@/components/ContentCard';
import SearchBar from '@/components/SearchBar';
import CuratedFeeds from '@/components/CuratedFeeds';
import ContentModal from '@/components/ContentModal';
import { contentData, searchSuggestions, ContentItem } from '@/data/contentData';
import { BookOpen, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<string[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter content based on search and filters
  const filteredContent = useMemo(() => {
    let filtered = contentData;

    // Apply active filter
    if (activeFilter === 'trending') {
      filtered = filtered.filter(item => item.trending);
    } else if (activeFilter === 'beginners') {
      filtered = filtered.filter(item => item.level === 'Beginner');
    } else if (activeFilter === 'advanced') {
      filtered = filtered.filter(item => item.level === 'Advanced');
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (searchFilters.length > 0) {
      filtered = filtered.filter(item =>
        searchFilters.every(filter =>
          item.tags.includes(filter) ||
          item.category === filter ||
          item.level === filter ||
          item.type.toLowerCase() === filter.toLowerCase()
        )
      );
    }

    return filtered;
  }, [searchQuery, searchFilters, activeFilter]);

  const handleSearch = (query: string, filters: string[]) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    setActiveFilter('all');
  };

  const handleFeedClick = (feedType: string) => {
    setActiveFilter(feedType);
    setSearchQuery('');
    setSearchFilters([]);
  };

  const handleViewContent = (content: ContentItem) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const categoryStats = [
    { name: 'AI Ethics', count: contentData.filter(item => item.category === 'AI Ethics').length, icon: '⚖️', color: 'bg-blue-500/10 text-blue-500' },
    { name: 'AI & Society', count: contentData.filter(item => item.category === 'AI & Society').length, icon: '🌍', color: 'bg-green-500/10 text-green-500' },
    { name: 'AI Detection', count: contentData.filter(item => item.category === 'AI Detection').length, icon: '🔍', color: 'bg-purple-500/10 text-purple-500' },
    { name: 'Future of AI', count: contentData.filter(item => item.category === 'Future of AI').length, icon: '🚀', color: 'bg-orange-500/10 text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-white">
                Educational Content Hub
              </h1>
            </div>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Explore curated content on AI, ethics, and media literacy. Learn at your own pace with expert-verified resources.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                <Users className="w-3 h-3 mr-1" />
                UNESCO Verified
              </Badge>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                <Lightbulb className="w-3 h-3 mr-1" />
                Expert Curated
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                <TrendingUp className="w-3 h-3 mr-1" />
                Always Updated
              </Badge>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} suggestions={searchSuggestions} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categoryStats.map((category) => (
            <Card key={category.name} className="text-center cursor-pointer hover:shadow-md transition-all duration-200">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2 text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} resources</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curated Feeds */}
        {activeFilter === 'all' && !searchQuery && searchFilters.length === 0 && (
          <CuratedFeeds onFeedClick={handleFeedClick} />
        )}

        {/* Active Filter Display */}
        {(activeFilter !== 'all' || searchQuery || searchFilters.length > 0) && (
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold">
                {activeFilter === 'trending' && 'Trending Content'}
                {activeFilter === 'beginners' && 'For Beginners'}
                {activeFilter === 'advanced' && 'Deep Dives'}
                {(searchQuery || searchFilters.length > 0) && 'Search Results'}
                {activeFilter === 'all' && !searchQuery && !searchFilters.length && 'All Content'}
              </h2>
              <Badge variant="secondary">{filteredContent.length} results</Badge>
            </div>
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="text-sm text-primary hover:underline mb-4"
              >
                ← Back to all content
              </button>
            )}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <ContentCard
              key={content.id}
              content={content}
              onView={handleViewContent}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No content found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find relevant content.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSearchFilters([]);
                setActiveFilter('all');
              }}
              className="text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Content Modal */}
      <ContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={selectedContent}
      />
    </div>
  );
}