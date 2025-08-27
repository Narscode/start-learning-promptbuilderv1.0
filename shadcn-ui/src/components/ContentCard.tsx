import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, Share2, Clock, User, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  summary: string;
  keyTakeaways: string[];
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'article' | 'video' | 'infographic';
  readTime: string;
  author: string;
  verified: boolean;
  icon: string;
  tags: string[];
}

interface ContentCardProps {
  content: ContentItem;
  onView: (content: ContentItem) => void;
}

export default function ContentCard({ content, onView }: ContentCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`Check out this content: ${content.title}`);
    toast.success('Link copied to clipboard!');
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'article': return '📄';
      case 'infographic': return '📊';
      default: return '📄';
    }
  };

  return (
    <Card 
      className="group relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
              {content.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground line-clamp-1">{content.title}</h3>
                {content.verified && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{content.readTime}</span>
                <span>•</span>
                <User className="w-3 h-3" />
                <span>{content.author}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className={getLevelColor(content.level)}>
            {content.level}
          </Badge>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {getTypeIcon(content.type)} {content.type}
          </Badge>
          {content.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button 
            onClick={() => onView(content)}
            className="flex-1 mr-2"
          >
            View Content
          </Button>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBookmark}
              className={isBookmarked ? 'text-yellow-500' : 'text-muted-foreground'}
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="text-muted-foreground hover:text-foreground"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Preview Popup */}
      {showPreview && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 p-4 bg-card border border-border rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm text-foreground mb-1">Quick Summary</h4>
              <p className="text-xs text-muted-foreground">{content.summary}</p>
            </div>
            {content.keyTakeaways.length > 0 && (
              <div>
                <h4 className="font-medium text-sm text-foreground mb-1">Key Takeaways</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {content.keyTakeaways.slice(0, 3).map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}