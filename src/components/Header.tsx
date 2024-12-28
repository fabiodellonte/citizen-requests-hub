import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Accedi alle funzionalità principali
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link
                  to="/"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/tickets"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Segnalazioni
                </Link>
                <Link
                  to="/trending"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Trending
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-xl font-semibold">
            CivicConnect
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/tickets"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Segnalazioni
          </Link>
          <Link
            to="/trending"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Trending
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Accedi</Button>
          <Button>Registrati</Button>
        </div>
      </div>
    </header>
  );
};