
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-12">
      {/* Sidebar: spans 2 columns on all screen sizes */}
      <aside className="col-span-2">
        <Sidebar />
      </aside>

      {/* Main content: spans 10 columns */}
      <div className="col-span-10 flex flex-col">
        <Navbar />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <div className="pt-16 lg:pt-0">
            {children || <Outlet />}
          </div>
        </main>

        <footer className="border-t">
          <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} React Explained. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with love and React
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

