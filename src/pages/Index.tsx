
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleCard from "@/components/ModuleCard";
import { Button } from "@/components/ui/button";
import { Building2, Route, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter animate-fade-in">
                Sustainable Business Solutions
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground animate-fade-in">
                Optimize routes, track carbon emissions, and make informed decisions 
                for a greener business future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Our Modules
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Explore our comprehensive tools designed to help your business reduce its carbon footprint.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModuleCard
                title="Companies Database"
                description="Access detailed company information, contacts, and sustainability metrics in one place."
                icon={Building2}
                link="/companies"
              />
              <ModuleCard
                title="Route Optimizer"
                description="Find the most efficient routes with minimal carbon emissions between destinations."
                icon={Route}
                link="/route"
              />
              <ModuleCard
                title="Carbon Search"
                description="Search companies by name and discover their carbon credit information."
                icon={Search}
                link="/search"
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Features
              </h2>
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
                Our platform provides powerful tools to help businesses reduce their environmental impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Emission Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor carbon emissions from your business operations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Network Analysis</h3>
                <p className="text-muted-foreground">
                  Connect with eco-conscious businesses in your industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Sustainability Reports</h3>
                <p className="text-muted-foreground">
                  Generate detailed sustainability reports for your stakeholders.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Carbon Credits</h3>
                <p className="text-muted-foreground">
                  Track and trade carbon credits to offset your emissions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Smart Routing</h3>
                <p className="text-muted-foreground">
                  Optimize delivery routes to minimize fuel consumption.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Cost Analysis</h3>
                <p className="text-muted-foreground">
                  Calculate the financial benefits of reducing carbon emissions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
