
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { TOPICS } from "@/lib/topics";

const Topic = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the topic across all categories
  const topic = Object.values(TOPICS)
    .flat()
    .find(topic => topic.slug === slug);

  useEffect(() => {
    if (!topic) {
      navigate('/');
    }
  }, [topic, navigate]);

  if (!topic) {
    return null;
  }
  
  // Process content to handle code blocks
  const processContent = (content: string) => {
    const segments = content.split('```');
    
    return segments.map((segment, index) => {
      // Even indexes are regular markdown text
      if (index % 2 === 0) {
        // Process paragraph blocks (split by blank lines)
        return segment.split('\n\n').map((paragraph, pIndex) => {
          // Process headings
          if (paragraph.startsWith('# ')) {
            return <h1 key={pIndex} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
          } else if (paragraph.startsWith('## ')) {
            return <h2 key={pIndex} className="text-2xl font-semibold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
          } else if (paragraph.startsWith('### ')) {
            return <h3 key={pIndex} className="text-xl font-semibold mt-5 mb-2">{paragraph.replace('### ', '')}</h3>;
          }
          
          // Process lists
          if (paragraph.match(/^\s*[-*]\s+/m)) {
            const listItems = paragraph.split('\n').filter(Boolean);
            return (
              <ul key={pIndex} className="list-disc pl-6 my-4">
                {listItems.map((item, i) => (
                  <li key={i} className="mb-1">{item.replace(/^\s*[-*]\s+/, '')}</li>
                ))}
              </ul>
            );
          }
          
          // Regular paragraphs
          return <p key={pIndex} className="my-4">{paragraph}</p>;
        });
      } 
      // Odd indexes are code blocks
      else {
        const [language, ...code] = segment.split('\n');
        return (
          <CodeBlock 
            key={index} 
            code={code.join('\n')} 
            language={language} 
          />
        );
      }
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{topic.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{topic.description}</p>
        
        <div className="prose prose-slate max-w-none">
          {processContent(topic.content)}
        </div>
      </div>
    </Layout>
  );
};

export default Topic;
