import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BookOpen, Zap } from 'lucide-react';

interface FeedItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  trending?: boolean;
  beginner?: boolean;
  advanced?: boolean;
}

interface CuratedFeedsProps {
  onFeedClick: (feedType: string) => void;
}

export default function CuratedFeeds({ onFeedClick }: CuratedFeedsProps) {
  const trendingContent: FeedItem[] = [
    {
      id: '1',
      title: 'AI-Generated Content Detection in 2024',
      description: 'Latest techniques and tools for identifying AI-generated text and images',
      category: 'AI Detection',
      readTime: '5 min read',
      trending: true
    },
    {
      id: '2',
      title: 'New EU AI Act: What It Means for You',
      description: 'Understanding the implications of new AI regulations',
      category: 'AI Policy',
      readTime: '7 min read',
      trending: true
    }
  ];

  const beginnerContent: FeedItem[] = [
    {
      id: '3',
      title: 'What is Artificial Intelligence?',
      description: 'A beginner-friendly introduction to AI concepts and applications',
      category: 'AI Basics',
      readTime: '4 min read',
      beginner: true
    },
    {
      id: '4',
      title: 'Understanding Bias in AI Systems',
      description: 'Learn how bias can affect AI decisions and what to look for',
      category: 'AI Ethics',
      readTime: '6 min read',
      beginner: true
    }
  ];

  const deepDiveContent: FeedItem[] = [
    {
      id: '5',
      title: 'Technical Analysis of GPT Model Architectures',
      description: 'In-depth exploration of transformer architectures and their implications',
      category: 'AI Technology',
      readTime: '15 min read',
      advanced: true
    },
    {
      id: '6',
      title: 'Algorithmic Accountability Frameworks',
      description: 'Comprehensive review of accountability mechanisms in AI systems',
      category: 'AI Governance',
      readTime: '12 min read',
      advanced: true
    }
  ];

  const FeedCard = ({ 
    title, 
    items, 
    icon: Icon, 
    color, 
    feedType 
  }: { 
    title: string; 
    items: FeedItem[]; 
    icon: React.ComponentType<{ className?: string }>; 
    color: string; 
    feedType: string;
  }) => (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={() => onFeedClick(feedType)}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className={`w-5 h-5 ${color}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="border-l-2 border-primary/20 pl-3 hover:border-primary/40 transition-colors">
            <h4 className="font-medium text-sm mb-1 line-clamp-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
              <span className="text-xs text-muted-foreground">{item.readTime}</span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-border">
          <span className="text-xs text-primary hover:underline">View all {title.toLowerCase()} →</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <FeedCard
        title="Trending Now"
        items={trendingContent}
        icon={TrendingUp}
        color="text-red-500"
        feedType="trending"
      />
      <FeedCard
        title="For Beginners"
        items={beginnerContent}
        icon={BookOpen}
        color="text-green-500"
        feedType="beginners"
      />
      <FeedCard
        title="Deep Dives"
        items={deepDiveContent}
        icon={Zap}
        color="text-purple-500"
        feedType="advanced"
      />
    </div>
  );
}