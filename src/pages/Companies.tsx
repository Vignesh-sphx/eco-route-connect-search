
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// Mock company data
const companies = [
  {
    id: 1,
    name: "EcoTech Solutions",
    industry: "Technology",
    carbonCredits: 2500,
    location: "San Francisco, CA",
    contactName: "Sarah Johnson",
    contactEmail: "sarah@ecotech.com",
    contactPhone: "(555) 123-4567"
  },
  {
    id: 2,
    name: "GreenLeaf Manufacturing",
    industry: "Manufacturing",
    carbonCredits: 1800,
    location: "Chicago, IL",
    contactName: "Michael Chen",
    contactEmail: "michael@greenleaf.com",
    contactPhone: "(555) 234-5678"
  },
  {
    id: 3,
    name: "Sustainable Logistics",
    industry: "Transportation",
    carbonCredits: 3200,
    location: "Portland, OR",
    contactName: "Emma Martinez",
    contactEmail: "emma@sustainablelogistics.com",
    contactPhone: "(555) 345-6789"
  },
  {
    id: 4,
    name: "Clean Energy Partners",
    industry: "Energy",
    carbonCredits: 4500,
    location: "Austin, TX",
    contactName: "David Wilson",
    contactEmail: "david@cleanenergy.com",
    contactPhone: "(555) 456-7890"
  },
  {
    id: 5,
    name: "Nature First Foods",
    industry: "Food & Beverage",
    carbonCredits: 1200,
    location: "Seattle, WA",
    contactName: "Lisa Park",
    contactEmail: "lisa@naturefirst.com",
    contactPhone: "(555) 567-8901"
  },
  {
    id: 6,
    name: "Bio Solutions Inc.",
    industry: "Biotechnology",
    carbonCredits: 2100,
    location: "Boston, MA",
    contactName: "James Thompson",
    contactEmail: "james@biosolutions.com",
    contactPhone: "(555) 678-9012"
  }
];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Companies Database</h1>
            <p className="text-muted-foreground">
              Browse our database of companies and their sustainability information.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="w-full sm:max-w-sm">
              <Input 
                placeholder="Search companies..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button>Add Company</Button>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead className="hidden md:table-cell">Industry</TableHead>
                  <TableHead className="hidden md:table-cell">Carbon Credits</TableHead>
                  <TableHead className="hidden lg:table-cell">Location</TableHead>
                  <TableHead className="hidden lg:table-cell">Primary Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCompanies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{company.industry}</TableCell>
                    <TableCell className="hidden md:table-cell">{company.carbonCredits}</TableCell>
                    <TableCell className="hidden lg:table-cell">{company.location}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div>
                        <div>{company.contactName}</div>
                        <div className="text-xs text-muted-foreground">{company.contactEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Contact Information</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Edit Company</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
