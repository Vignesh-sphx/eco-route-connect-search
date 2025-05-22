
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-primary">EcoRoute</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sustainable Business Solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Platform</h3>
              <Link to="/companies" className="text-sm text-muted-foreground hover:text-primary">
                Companies Database
              </Link>
              <Link to="/route" className="text-sm text-muted-foreground hover:text-primary">
                Route Optimizer
              </Link>
              <Link to="/search" className="text-sm text-muted-foreground hover:text-primary">
                Carbon Search
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Company</h3>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Support</h3>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Help Center
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 EcoRoute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
