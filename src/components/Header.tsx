
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">EcoRoute</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/companies" className="text-sm font-medium hover:text-primary">
            Companies
          </Link>
          <Link to="/route" className="text-sm font-medium hover:text-primary">
            Route Optimizer
          </Link>
          <Link to="/search" className="text-sm font-medium hover:text-primary">
            Carbon Search
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
