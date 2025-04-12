import React from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { useIsMobile } from "../hooks/use-mobile";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-10 px-4 backdrop-blur-md shadow-md border-b border-accent-200">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="1"
              onClick={toggleMenu}
              className="mr-2"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          )}
          <a href="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md health-gradient flex items-center justify-center mr-2">
              <span className="font-bold text-white">HC</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline-block">
              HealthCare
            </span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/appointments"
            className="text-foreground hover:text-primary transition-colors"
          >
            Appointments
          </a>
          <a
            href="/medications"
            className="text-foreground hover:text-primary transition-colors"
          >
            Medications
          </a>
          <a
            href="/doctors"
            className="text-foreground hover:text-primary transition-colors"
          >
            Doctors
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="1" className="relative">
            <LogIn className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 bg-background z-20 pt-16">
          <nav className="container flex flex-col space-y-4 p-4">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors p-2 border-b"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-foreground hover:text-primary transition-colors p-2 border-b"
            >
              Dashboard
            </a>
            <a
              href="/appointments"
              className="text-foreground hover:text-primary transition-colors p-2 border-b"
            >
              Appointments
            </a>
            <a
              href="/medications"
              className="text-foreground hover:text-primary transition-colors p-2 border-b"
            >
              Medications
            </a>
            <a
              href="/doctors"
              className="text-foreground hover:text-primary transition-colors p-2 border-b"
            >
              Doctors
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
