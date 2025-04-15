
import { Link } from "react-router-dom";
import { 
  Puzzle, 
  RefreshCw, 
  Layers, 
  Database, 
  Globe, 
  Code, 
  Layout, 
  Zap
} from "lucide-react";
import { TOPICS } from "@/lib/topics";

interface TopicCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

function TopicCard({ title, description, slug, icon }: TopicCardProps) {
  return (
    <Link to={`/topic/${slug}`} className="topic-card p-6 no-underline">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-react/10">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

export function TopicGrid() {
  // Featured topics for the homepage grid
  const featuredTopics = [
    {
      title: "Introduction to React",
      description: "Learn the basics of React and get started with your first component.",
      slug: "introduction-to-react",
      icon: <Puzzle className="h-5 w-5 text-react" />
    },
    {
      title: "Understanding Hooks",
      description: "Master React hooks to manage state and side effects in functional components.",
      slug: "understanding-hooks",
      icon: <RefreshCw className="h-5 w-5 text-react" />
    },
    {
      title: "Component Patterns",
      description: "Explore different component patterns to structure your React applications.",
      slug: "component-patterns",
      icon: <Layers className="h-5 w-5 text-react" />
    },
    {
      title: "State Management",
      description: "Learn different approaches to manage state in React applications.",
      slug: "state-management",
      icon: <Database className="h-5 w-5 text-react" />
    },
    {
      title: "React Router",
      description: "Implement client-side routing in your React applications.",
      slug: "react-router",
      icon: <Globe className="h-5 w-5 text-react" />
    },
    {
      title: "Styling in React",
      description: "Different approaches to styling your React components.",
      slug: "styling-in-react",
      icon: <Layout className="h-5 w-5 text-react" />
    },
    {
      title: "React Ecosystem",
      description: "Discover popular libraries and tools in the React ecosystem.",
      slug: "react-ecosystem",
      icon: <Code className="h-5 w-5 text-react" />
    },
    {
      title: "Performance Optimization",
      description: "Tips and techniques to optimize your React application performance.",
      slug: "performance-optimization",
      icon: <Zap className="h-5 w-5 text-react" />
    }
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4">
        {featuredTopics.map((topic) => (
          <TopicCard key={topic.slug} {...topic} />
        ))}
      </div>
    </section>
  );
}
