import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, User, CheckCircle, Bookmark, Share2, ExternalLink } from 'lucide-react';
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
  content: string;
  source?: string;
}

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ContentItem | null;
}

export default function ContentModal({ isOpen, onClose, content }: ContentModalProps) {
  if (!content) return null;

  const handleBookmark = () => {
    toast.success('Added to bookmarks');
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
              {content.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <DialogTitle className="text-xl font-bold leading-tight">{content.title}</DialogTitle>
                {content.verified && (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{content.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{content.author}</span>
                </div>
                {content.source && (
                  <div className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>{content.source}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={getLevelColor(content.level)}>
                  {content.level}
                </Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {content.type}
                </Badge>
                {content.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleBookmark} variant="outline" className="flex-1">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmark
            </Button>
            <Button onClick={handleShare} variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </DialogHeader>

        <Separator className="my-6" />

        <div className="space-y-6">
          {/* Summary Section */}
          <div className="bg-accent/5 p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 text-foreground">Summary</h3>
            <p className="text-muted-foreground">{content.summary}</p>
          </div>

          {/* Key Takeaways */}
          {content.keyTakeaways.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Key Takeaways</h3>
              <ul className="space-y-2">
                {content.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Content</h3>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              {content.type === 'video' ? (
                <div className="bg-accent/5 p-8 rounded-lg border text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    🎥
                  </div>
                  <h4 className="font-medium mb-2">Video Content</h4>
                  <p className="text-muted-foreground mb-4">This content contains video material that would be embedded here.</p>
                  <Button>Watch Video</Button>
                </div>
              ) : (
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {content.content}
                </div>
              )}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-accent/5 p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 text-foreground">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['AI Transparency', 'Algorithmic Auditing', 'Digital Rights', 'Tech Policy'].map((topic, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-accent">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}