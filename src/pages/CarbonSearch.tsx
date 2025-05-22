
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock company carbon data
const companyData = {
  "EcoTech Solutions": {
    id: 1,
    name: "EcoTech Solutions",
    industry: "Technology",
    carbonCredits: 2500,
    carbonUsage: 1800,
    netPosition: 700,
    carbonHistory: [
      { month: "Jan", credits: 200, usage: 150 },
      { month: "Feb", credits: 220, usage: 160 },
      { month: "Mar", credits: 190, usage: 170 },
      { month: "Apr", credits: 240, usage: 155 },
      { month: "May", credits: 210, usage: 165 },
      { month: "Jun", credits: 230, usage: 180 }
    ],
    sustainability: "A-",
    initiatives: [
      "Solar-powered offices",
      "Remote work program",
      "Green cloud computing"
    ]
  },
  "GreenLeaf Manufacturing": {
    id: 2,
    name: "GreenLeaf Manufacturing",
    industry: "Manufacturing",
    carbonCredits: 1800,
    carbonUsage: 1600,
    netPosition: 200,
    carbonHistory: [
      { month: "Jan", credits: 150, usage: 140 },
      { month: "Feb", credits: 160, usage: 150 },
      { month: "Mar", credits: 170, usage: 155 },
      { month: "Apr", credits: 140, usage: 130 },
      { month: "May", credits: 180, usage: 160 },
      { month: "Jun", credits: 190, usage: 170 }
    ],
    sustainability: "B+",
    initiatives: [
      "Recycled materials",
      "Energy-efficient machinery",
      "Waste reduction program"
    ]
  },
  "Clean Energy Partners": {
    id: 3,
    name: "Clean Energy Partners",
    industry: "Energy",
    carbonCredits: 4500,
    carbonUsage: 1200,
    netPosition: 3300,
    carbonHistory: [
      { month: "Jan", credits: 700, usage: 180 },
      { month: "Feb", credits: 750, usage: 200 },
      { month: "Mar", credits: 780, usage: 190 },
      { month: "Apr", credits: 800, usage: 210 },
      { month: "May", credits: 720, usage: 200 },
      { month: "Jun", credits: 750, usage: 220 }
    ],
    sustainability: "A+",
    initiatives: [
      "Renewable energy production",
      "Carbon capture technology",
      "Community solar projects"
    ]
  }
};

const CarbonSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  
  const handleSearch = () => {
    if (!searchTerm) return;
    
    const result = Object.values(companyData).find(
      (company: any) => company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (result) {
      setSearchResult(result);
      setNotFound(false);
    } else {
      setSearchResult(null);
      setNotFound(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Carbon Credit Search</h1>
          <p className="text-muted-foreground">
            Search for companies and view their carbon credit information.
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Companies</CardTitle>
            <CardDescription>
              Enter a company name to find detailed carbon credit information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter company name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {notFound && (
          <div className="text-center py-12">
            <div className="bg-muted/50 inline-flex rounded-full p-4 mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any companies matching "{searchTerm}". Try a different search term or browse our company directory.
            </p>
            <Button variant="outline" className="mt-4">
              Browse Companies
            </Button>
          </div>
        )}
        
        {searchResult && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-4 border-b">
              <div>
                <h2 className="text-2xl font-bold">{searchResult.name}</h2>
                <p className="text-muted-foreground">Industry: {searchResult.industry}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Sustainability Rating</p>
                  <p className="text-2xl font-bold text-primary">{searchResult.sustainability}</p>
                </div>
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
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Carbon Credits</CardTitle>
                  <CardDescription>Available credits for trading</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {searchResult.carbonCredits.toLocaleString()} tons
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Carbon Usage</CardTitle>
                  <CardDescription>Annual carbon emissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {searchResult.carbonUsage.toLocaleString()} tons
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Net Position</CardTitle>
                  <CardDescription>Carbon credit balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${searchResult.netPosition >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {searchResult.netPosition >= 0 ? '+' : ''}{searchResult.netPosition.toLocaleString()} tons
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Carbon Credit History</CardTitle>
                <CardDescription>6-month trend of carbon credits and usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={searchResult.carbonHistory}
                      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="credits" 
                        stackId="1" 
                        stroke="#2F6B55" 
                        fill="#2F6B55" 
                        name="Carbon Credits" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="usage" 
                        stackId="2" 
                        stroke="#94A3B8" 
                        fill="#94A3B8" 
                        name="Carbon Usage" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Initiatives</CardTitle>
                  <CardDescription>
                    Environmental programs implemented by the company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {searchResult.initiatives.map((initiative: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
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
                          className="text-green-600"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Breakdown</CardTitle>
                  <CardDescription>
                    Carbon credit allocation by source
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead className="text-right">Amount (tons)</TableHead>
                        <TableHead className="text-right">Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Renewable Energy</TableCell>
                        <TableCell className="text-right">{Math.floor(searchResult.carbonCredits * 0.45).toLocaleString()}</TableCell>
                        <TableCell className="text-right">45%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Reforestation</TableCell>
                        <TableCell className="text-right">{Math.floor(searchResult.carbonCredits * 0.3).toLocaleString()}</TableCell>
                        <TableCell className="text-right">30%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Methane Capture</TableCell>
                        <TableCell className="text-right">{Math.floor(searchResult.carbonCredits * 0.15).toLocaleString()}</TableCell>
                        <TableCell className="text-right">15%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Other Initiatives</TableCell>
                        <TableCell className="text-right">{Math.floor(searchResult.carbonCredits * 0.1).toLocaleString()}</TableCell>
                        <TableCell className="text-right">10%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {!searchResult && !notFound && (
          <div className="text-center py-16 border rounded-lg bg-muted/30">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground/60" />
            <h2 className="text-xl font-semibold mb-2">Search for a Company</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Enter a company name above to view detailed carbon credit information and sustainability metrics.
            </p>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={() => {
                setSearchTerm("EcoTech Solutions");
              }}>
                Try "EcoTech Solutions"
              </Button>
              <Button variant="outline" onClick={() => {
                setSearchTerm("Clean Energy Partners");
              }}>
                Try "Clean Energy Partners"
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CarbonSearch;
