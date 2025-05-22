
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

// Expanded mock company data
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
  },
  {
    id: 7,
    name: "Terra Renewables",
    industry: "Energy",
    carbonCredits: 3700,
    location: "Denver, CO",
    contactName: "Anna Rodriguez",
    contactEmail: "anna@terrarenewables.com",
    contactPhone: "(555) 789-0123"
  },
  {
    id: 8,
    name: "OceanGuard Systems",
    industry: "Marine Conservation",
    carbonCredits: 2800,
    location: "Miami, FL",
    contactName: "Robert Kim",
    contactEmail: "robert@oceanguard.com",
    contactPhone: "(555) 890-1234"
  },
  {
    id: 9,
    name: "Forest Stewards LLC",
    industry: "Forestry",
    carbonCredits: 5200,
    location: "Portland, ME",
    contactName: "Jessica Brown",
    contactEmail: "jessica@foreststewards.com",
    contactPhone: "(555) 901-2345"
  },
  {
    id: 10,
    name: "SkyClean Aviation",
    industry: "Aviation",
    carbonCredits: 1900,
    location: "Atlanta, GA",
    contactName: "Marcus Johnson",
    contactEmail: "marcus@skyclean.com",
    contactPhone: "(555) 012-3456"
  },
  {
    id: 11,
    name: "Urban Farms Collective",
    industry: "Agriculture",
    carbonCredits: 1500,
    location: "Brooklyn, NY",
    contactName: "Priya Patel",
    contactEmail: "priya@urbanfarms.com",
    contactPhone: "(555) 123-7890"
  },
  {
    id: 12,
    name: "SolarPeak Energy",
    industry: "Renewable Energy",
    carbonCredits: 4100,
    location: "Phoenix, AZ",
    contactName: "Thomas Lee",
    contactEmail: "thomas@solarpeak.com",
    contactPhone: "(555) 234-8901"
  },
  {
    id: 13,
    name: "GreenerBuilds Construction",
    industry: "Construction",
    carbonCredits: 2300,
    location: "Nashville, TN",
    contactName: "Olivia Garcia",
    contactEmail: "olivia@greenerbuilds.com",
    contactPhone: "(555) 345-9012"
  },
  {
    id: 14,
    name: "BioHarvest Foods",
    industry: "Food & Beverage",
    carbonCredits: 1700,
    location: "Minneapolis, MN",
    contactName: "Daniel Wu",
    contactEmail: "daniel@bioharvest.com",
    contactPhone: "(555) 456-0123"
  },
  {
    id: 15,
    name: "EcoFiber Textiles",
    industry: "Textiles",
    carbonCredits: 2000,
    location: "Los Angeles, CA",
    contactName: "Sophia Martinez",
    contactEmail: "sophia@ecofiber.com",
    contactPhone: "(555) 567-1234"
  },
  {
    id: 16,
    name: "WindStream Power",
    industry: "Energy",
    carbonCredits: 3900,
    location: "Chicago, IL",
    contactName: "Benjamin Taylor",
    contactEmail: "benjamin@windstream.com",
    contactPhone: "(555) 678-2345"
  },
  {
    id: 17,
    name: "ReclaimTech Recycling",
    industry: "Waste Management",
    carbonCredits: 2700,
    location: "Detroit, MI",
    contactName: "Amara Johnson",
    contactEmail: "amara@reclaimtech.com",
    contactPhone: "(555) 789-3456"
  },
  {
    id: 18,
    name: "AquaFlow Systems",
    industry: "Water Treatment",
    carbonCredits: 2350,
    location: "San Diego, CA",
    contactName: "Christopher Lee",
    contactEmail: "chris@aquaflow.com",
    contactPhone: "(555) 890-4567"
  },
  {
    id: 19,
    name: "GreenMile Logistics",
    industry: "Transportation",
    carbonCredits: 1850,
    location: "Dallas, TX",
    contactName: "Aisha Williams",
    contactEmail: "aisha@greenmile.com",
    contactPhone: "(555) 901-5678"
  },
  {
    id: 20,
    name: "EarthSense Analytics",
    industry: "Technology",
    carbonCredits: 3100,
    location: "Boulder, CO",
    contactName: "Ryan Chen",
    contactEmail: "ryan@earthsense.com",
    contactPhone: "(555) 012-6789"
  },
  {
    id: 21,
    name: "SustainaBuild Materials",
    industry: "Manufacturing",
    carbonCredits: 2900,
    location: "Seattle, WA",
    contactName: "Maria Gomez",
    contactEmail: "maria@sustainabuild.com",
    contactPhone: "(555) 123-7890"
  },
  {
    id: 22,
    name: "CleanStream Technologies",
    industry: "Water Technology",
    carbonCredits: 2200,
    location: "Baltimore, MD",
    contactName: "Jason Kim",
    contactEmail: "jason@cleanstream.com",
    contactPhone: "(555) 234-8901"
  },
  {
    id: 23,
    name: "TerraForm Landscaping",
    industry: "Landscaping",
    carbonCredits: 1300,
    location: "Austin, TX",
    contactName: "Zoe Taylor",
    contactEmail: "zoe@terraform.com",
    contactPhone: "(555) 345-9012"
  },
  {
    id: 24,
    name: "PureAir Systems",
    industry: "Air Purification",
    carbonCredits: 1900,
    location: "Pittsburgh, PA",
    contactName: "Lucas Wang",
    contactEmail: "lucas@pureair.com",
    contactPhone: "(555) 456-0123"
  },
  {
    id: 25,
    name: "GreenTech Innovations",
    industry: "Technology",
    carbonCredits: 3600,
    location: "Raleigh, NC",
    contactName: "Eva Johnson",
    contactEmail: "eva@greentech.com",
    contactPhone: "(555) 567-1234"
  },
  {
    id: 26,
    name: "EcoCycle Materials",
    industry: "Recycling",
    carbonCredits: 2400,
    location: "Denver, CO",
    contactName: "Raj Patel",
    contactEmail: "raj@ecocycle.com",
    contactPhone: "(555) 678-2345"
  },
  {
    id: 27,
    name: "BioGen Energy",
    industry: "Biofuels",
    carbonCredits: 2950,
    location: "Madison, WI",
    contactName: "Hannah Smith",
    contactEmail: "hannah@biogen.com",
    contactPhone: "(555) 789-3456"
  },
  {
    id: 28,
    name: "NaturePrint Packaging",
    industry: "Packaging",
    carbonCredits: 1650,
    location: "Portland, OR",
    contactName: "Ian Brooks",
    contactEmail: "ian@natureprint.com",
    contactPhone: "(555) 890-4567"
  },
  {
    id: 29,
    name: "SmartGrid Solutions",
    industry: "Energy",
    carbonCredits: 4200,
    location: "Boston, MA",
    contactName: "Naomi Wong",
    contactEmail: "naomi@smartgrid.com",
    contactPhone: "(555) 901-5678"
  },
  {
    id: 30,
    name: "CarbonLess Transportation",
    industry: "Transportation",
    carbonCredits: 3300,
    location: "Chicago, IL",
    contactName: "Keith Johnson",
    contactEmail: "keith@carbonless.com",
    contactPhone: "(555) 012-6789"
  },
  {
    id: 31,
    name: "EcoHabitat Construction",
    industry: "Construction",
    carbonCredits: 2700,
    location: "Seattle, WA",
    contactName: "Diana Martinez",
    contactEmail: "diana@ecohabitat.com",
    contactPhone: "(555) 123-8901"
  },
  {
    id: 32,
    name: "SustainaBrew Coffee",
    industry: "Food & Beverage",
    carbonCredits: 900,
    location: "Portland, OR",
    contactName: "Carlos Mendoza",
    contactEmail: "carlos@sustainabrew.com",
    contactPhone: "(555) 234-9012"
  },
  {
    id: 33,
    name: "BioPlastic Innovations",
    industry: "Plastics",
    carbonCredits: 2100,
    location: "San Jose, CA",
    contactName: "Lena Park",
    contactEmail: "lena@bioplastic.com",
    contactPhone: "(555) 345-0123"
  },
  {
    id: 34,
    name: "EarthWise Consulting",
    industry: "Consulting",
    carbonCredits: 1400,
    location: "Washington DC",
    contactName: "Omar Hassan",
    contactEmail: "omar@earthwise.com",
    contactPhone: "(555) 456-1234"
  },
  {
    id: 35,
    name: "CleanWave Energy",
    industry: "Wave Power",
    carbonCredits: 3100,
    location: "Honolulu, HI",
    contactName: "Nina Fischer",
    contactEmail: "nina@cleanwave.com",
    contactPhone: "(555) 567-2345"
  },
  {
    id: 36,
    name: "GreenScape Architecture",
    industry: "Architecture",
    carbonCredits: 1950,
    location: "Philadelphia, PA",
    contactName: "Miguel Sanchez",
    contactEmail: "miguel@greenscape.com",
    contactPhone: "(555) 678-3456"
  },
  {
    id: 37,
    name: "Reforest Partners",
    industry: "Forestry",
    carbonCredits: 4800,
    location: "Burlington, VT",
    contactName: "Alice Johnson",
    contactEmail: "alice@reforest.com",
    contactPhone: "(555) 789-4567"
  },
  {
    id: 38,
    name: "HydroGen Power",
    industry: "Hydroelectric",
    carbonCredits: 3700,
    location: "Buffalo, NY",
    contactName: "Theo Wilson",
    contactEmail: "theo@hydrogen.com",
    contactPhone: "(555) 890-5678"
  },
  {
    id: 39,
    name: "EcoTextiles Ltd",
    industry: "Textiles",
    carbonCredits: 1850,
    location: "Charlotte, NC",
    contactName: "Grace Lin",
    contactEmail: "grace@ecotextiles.com",
    contactPhone: "(555) 901-6789"
  },
  {
    id: 40,
    name: "SolarWorks Inc.",
    industry: "Solar Energy",
    carbonCredits: 3400,
    location: "Las Vegas, NV",
    contactName: "Derek Moore",
    contactEmail: "derek@solarworks.com",
    contactPhone: "(555) 012-7890"
  },
  {
    id: 41,
    name: "GreenFleet Vehicles",
    industry: "Automotive",
    carbonCredits: 2600,
    location: "Detroit, MI",
    contactName: "Victoria Chang",
    contactEmail: "victoria@greenfleet.com",
    contactPhone: "(555) 123-8901"
  },
  {
    id: 42,
    name: "EcoLeaf Packaging",
    industry: "Packaging",
    carbonCredits: 1750,
    location: "Columbus, OH",
    contactName: "Jordan Taylor",
    contactEmail: "jordan@ecoleaf.com",
    contactPhone: "(555) 234-9012"
  },
  {
    id: 43,
    name: "PureHome Products",
    industry: "Consumer Goods",
    carbonCredits: 1250,
    location: "Minneapolis, MN",
    contactName: "Sam Rivera",
    contactEmail: "sam@purehome.com",
    contactPhone: "(555) 345-0123"
  },
  {
    id: 44,
    name: "WindHarvest Energy",
    industry: "Wind Power",
    carbonCredits: 3850,
    location: "Oklahoma City, OK",
    contactName: "Leila Johnson",
    contactEmail: "leila@windharvest.com",
    contactPhone: "(555) 456-1234"
  },
  {
    id: 45,
    name: "BioDiversity Research",
    industry: "Research",
    carbonCredits: 2200,
    location: "Berkeley, CA",
    contactName: "Felix Wong",
    contactEmail: "felix@biodiversity.com",
    contactPhone: "(555) 567-2345"
  },
  {
    id: 46,
    name: "SmartWater Systems",
    industry: "Water Conservation",
    carbonCredits: 1950,
    location: "Tucson, AZ",
    contactName: "Claire Johnson",
    contactEmail: "claire@smartwater.com",
    contactPhone: "(555) 678-3456"
  },
  {
    id: 47,
    name: "GreenPath Consulting",
    industry: "Consulting",
    carbonCredits: 1100,
    location: "Atlanta, GA",
    contactName: "Isaiah Williams",
    contactEmail: "isaiah@greenpath.com",
    contactPhone: "(555) 789-4567"
  },
  {
    id: 48,
    name: "EcoFarms Cooperative",
    industry: "Agriculture",
    carbonCredits: 2300,
    location: "Sacramento, CA",
    contactName: "Maya Chen",
    contactEmail: "maya@ecofarms.com",
    contactPhone: "(555) 890-5678"
  },
  {
    id: 49,
    name: "TideCurrent Energy",
    industry: "Tidal Energy",
    carbonCredits: 3200,
    location: "Providence, RI",
    contactName: "Elijah Davis",
    contactEmail: "elijah@tidecurrent.com",
    contactPhone: "(555) 901-6789"
  },
  {
    id: 50,
    name: "UrbanGreen Buildings",
    industry: "Architecture",
    carbonCredits: 2500,
    location: "Denver, CO",
    contactName: "Sophie Kim",
    contactEmail: "sophie@urbangreen.com",
    contactPhone: "(555) 012-7890"
  }
];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  
  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
                {currentItems.map((company) => (
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
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Logic to display page numbers properly
                let pageNum;
                if (totalPages <= 5) {
                  // Show all pages if 5 or fewer
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  // Near the start
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  // Near the end
                  pageNum = totalPages - 4 + i;
                } else {
                  // In the middle
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={pageNum === currentPage}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
