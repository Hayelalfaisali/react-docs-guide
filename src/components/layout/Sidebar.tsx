
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TOPICS } from "@/lib/topics";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-md bg-white shadow-md text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-[280px] bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        <div className="p-4 sticky top-0 bg-sidebar z-10 border-b border-sidebar-border flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="h-8 w-8">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-react fill-current">
                <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 0 0 0-4.278zm-4.962 4.837a.375.375 0 0 1-.331.481c-.935.103-1.846-.044-2.57-.43-.246-.132-.356-.232-.342-.446.025-.323.219-.604.961-.765l.646-.14a.766.766 0 0 1 .935.476.375.375 0 0 1 .047.115c.129.309.358.544.654.71zm6.747-8.483c-.055-.447.142-.718.394-.979.236-.245.382-.258.539-.143.439.322.487 1.007.141 1.606l-.174.3c-.169.292-.43.457-.713.472-.262.015-.526-.105-.707-.3-.2-.213-.217-.465-.138-.652.077-.187.217-.334.389-.386.155-.045.244-.162.269-.283.025-.121-.04-.271-.173-.333-.133-.063-.294-.037-.398.061-.218.2-.244.384-.209.636l.072.416-.142.052-.217-.368c-.057-.097-.11-.226-.144-.365-.035-.139-.05-.296-.034-.446.067-.612.445-.963.853-1.195.409-.232.92-.27 1.34-.094.42.177.73.532.83 1.028.1.496-.01 1.036-.327 1.436-.317.4-.787.652-1.28.663-.494.012-.936-.225-1.235-.585-.574-.69-.723-1.69-.35-2.54.373-.85 1.145-1.355 2.225-1.58 1.08-.226 2.363-.156 3.294.308.931.464 1.488 1.235 1.437 2.368-.051 1.133-.554 2.428-1.612 3.632-1.057 1.204-2.646 2.318-4.296 2.97-1.65.652-3.32.824-4.679.4-1.36-.424-2.302-1.376-2.609-2.89-.307-1.516.047-3.53 1.083-5.512 1.036-1.982 2.703-3.934 4.86-5.267 2.156-1.333 4.797-2.057 7.288-1.738 2.49.32 4.849 1.696 5.89 4.28.4 1.002.636 2.094.619 3.232-.017 1.139-.291 2.303-.959 3.272-.668.968-1.732 1.742-3.266 1.976-1.535.234-3.545-.1-5.676-1.01l-.174-.076.068-.156.214.09c1.997.848 3.855 1.135 5.249.91 1.394-.225 2.318-.879 2.888-1.704.57-.825.804-1.829.821-2.836.017-1.006-.204-2.015-.591-2.987-.966-2.423-3.1-3.65-5.419-3.941-2.319-.292-4.757.375-6.792 1.634-2.035 1.258-3.618 3.133-4.594 4.99-.976 1.858-1.287 3.596-1.016 4.948.27 1.352 1.026 2.11 2.115 2.445 1.09.334 2.547.176 4.026-.424 1.48-.6 2.917-1.624 3.866-2.709.95-1.085 1.397-2.246 1.44-3.209.042-.963-.337-1.57-1.054-1.923-.717-.354-1.814-.399-2.67-.215-.856.184-1.442.532-1.685 1.05-.243.517-.107 1.195.319 1.695.426.5.998.712 1.533.7.534-.011 1.082-.237 1.447-.7.365-.462.488-1.117.368-1.707-.12-.59-.485-.982-.953-1.178-.469-.196-1.026-.152-1.483.066-.457.219-.89.621-.971 1.337z" />
              </svg>
            </div>
            <span className="text-xl font-bold">React Explained</span>
          </Link>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-sidebar-accent"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="px-4 py-2 h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-2">
            {Object.entries(TOPICS).map(([category, topics]) => (
              <li key={category} className="py-1">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full p-2.5 rounded-md hover:bg-sidebar-accent group transition-colors"
                >
                  <span className="font-medium capitalize text-sm">{category.replace('-', ' ')}</span>
                  {expandedCategories.includes(category) ? (
                    <ChevronDown size={16} className="text-muted-foreground" />
                  ) : (
                    <ChevronRight size={16} className="text-muted-foreground" />
                  )}
                </button>
                {expandedCategories.includes(category) && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {topics.map((topic) => {
                      const isActive = location.pathname === `/topic/${topic.slug}`;
                      return (
                        <li key={topic.slug}>
                          <Link
                            to={`/topic/${topic.slug}`}
                            className={cn(
                              "block p-2.5 rounded-md hover:bg-sidebar-accent transition-colors text-sm",
                              isActive ? "bg-sidebar-accent font-medium text-sidebar-primary" : "text-muted-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {topic.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
