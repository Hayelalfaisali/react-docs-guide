
import { Link } from "react-router-dom";
import { Github, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden lg:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-react fill-current">
              <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 0 0 0-4.278zm-4.962 4.837a.375.375 0 0 1-.331.481c-.935.103-1.846-.044-2.57-.43-.246-.132-.356-.232-.342-.446.025-.323.219-.604.961-.765l.646-.14a.766.766 0 0 1 .935.476.375.375 0 0 1 .047.115c.129.309.358.544.654.71zm6.747-8.483c-.055-.447.142-.718.394-.979.236-.245.382-.258.539-.143.439.322.487 1.007.141 1.606l-.174.3c-.169.292-.43.457-.713.472-.262.015-.526-.105-.707-.3-.2-.213-.217-.465-.138-.652.077-.187.217-.334.389-.386.155-.045.244-.162.269-.283.025-.121-.04-.271-.173-.333-.133-.063-.294-.037-.398.061-.218.2-.244.384-.209.636l.072.416-.142.052-.217-.368c-.057-.097-.11-.226-.144-.365-.035-.139-.05-.296-.034-.446.067-.612.445-.963.853-1.195.409-.232.92-.27 1.34-.094.42.177.73.532.83 1.028.1.496-.01 1.036-.327 1.436-.317.4-.787.652-1.28.663-.494.012-.936-.225-1.235-.585-.574-.69-.723-1.69-.35-2.54.373-.85 1.145-1.355 2.225-1.58 1.08-.226 2.363-.156 3.294.308.931.464 1.488 1.235 1.437 2.368-.051 1.133-.554 2.428-1.612 3.632-1.057 1.204-2.646 2.318-4.296 2.97-1.65.652-3.32.824-4.679.4-1.36-.424-2.302-1.376-2.609-2.89-.307-1.516.047-3.53 1.083-5.512 1.036-1.982 2.703-3.934 4.86-5.267 2.156-1.333 4.797-2.057 7.288-1.738 2.49.32 4.849 1.696 5.89 4.28.4 1.002.636 2.094.619 3.232-.017 1.139-.291 2.303-.959 3.272-.668.968-1.732 1.742-3.266 1.976-1.535.234-3.545-.1-5.676-1.01l-.174-.076.068-.156.214.09c1.997.848 3.855 1.135 5.249.91 1.394-.225 2.318-.879 2.888-1.704.57-.825.804-1.829.821-2.836.017-1.006-.204-2.015-.591-2.987-.966-2.423-3.1-3.65-5.419-3.941-2.319-.292-4.757.375-6.792 1.634-2.035 1.258-3.618 3.133-4.594 4.99-.976 1.858-1.287 3.596-1.016 4.948.27 1.352 1.026 2.11 2.115 2.445 1.09.334 2.547.176 4.026-.424 1.48-.6 2.917-1.624 3.866-2.709.95-1.085 1.397-2.246 1.44-3.209.042-.963-.337-1.57-1.054-1.923-.717-.354-1.814-.399-2.67-.215-.856.184-1.442.532-1.685 1.05-.243.517-.107 1.195.319 1.695.426.5.998.712 1.533.7.534-.011 1.082-.237 1.447-.7.365-.462.488-1.117.368-1.707-.12-.59-.485-.982-.953-1.178-.469-.196-1.026-.152-1.483.066-.457.219-.89.621-.971 1.337z" />
            </svg>
            <span className="font-bold">React Explained</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/topic/introduction-to-react" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tutorials
            </Link>
            <Link to="/topic/understanding-hooks" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Hooks
            </Link>
            <Link to="/topic/component-patterns" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Components
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm  hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-between text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
          <nav className="flex items-center">
            <Link
              to="https://github.com/facebook/react"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:text-accent-foreground h-9 py-2 w-9 px-0">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
