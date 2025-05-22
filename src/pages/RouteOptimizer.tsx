
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useState } from "react";
import { Map as MapIcon, Navigation, Route } from "lucide-react";
import RouteMap from "@/components/RouteMap";

const RouteOptimizer = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [transportMode, setTransportMode] = useState("car");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState<number | undefined>(undefined);
  
  // Available cities for demo
  const cities = [
    "New York",
    "Chicago",
    "Los Angeles",
    "Miami",
    "Seattle",
    "Austin",
    "Boston",
    "Denver",
    "San Francisco",
    "Washington DC"
  ];
  
  // Mock route data
  const routes = [
    {
      id: 1,
      name: "Standard Route",
      distance: "12.5 km",
      time: "25 min",
      carbonEmission: "2.8 kg",
      description: "Fastest route with moderate carbon emissions"
    },
    {
      id: 2,
      name: "Eco-Friendly Route",
      distance: "13.8 km",
      time: "32 min",
      carbonEmission: "1.9 kg",
      description: "Lower emissions but slightly longer travel time"
    },
    {
      id: 3,
      name: "Scenic Route",
      distance: "15.2 km",
      time: "38 min",
      carbonEmission: "2.2 kg",
      description: "Balanced option with less traffic"
    }
  ];

  const handleCalculateRoute = () => {
    if (start && destination) {
      setHasCalculated(true);
      // Default to eco-friendly route
      setSelectedRouteId(2);
    }
  };

  const handleSelectRoute = (routeId: number) => {
    setSelectedRouteId(routeId);
  };

  // Helper for city selection dropdowns
  const CityDropdown = ({ 
    label, 
    value, 
    onChange 
  }: { 
    label: string; 
    value: string; 
    onChange: (value: string) => void 
  }) => (
    <div className="space-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={label}>
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city} value={city}>{city}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter">Route Optimizer</h1>
          <p className="text-muted-foreground">
            Find the most carbon-efficient route between locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plan Your Route</CardTitle>
                <CardDescription>Enter your start and end points to calculate the most eco-friendly route.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CityDropdown 
                    label="Start Location"
                    value={start}
                    onChange={setStart}
                  />
                  <CityDropdown 
                    label="Destination"
                    value={destination}
                    onChange={setDestination}
                  />
                  <div className="space-y-2">
                    <Label htmlFor="transport">Transportation Mode</Label>
                    <Select value={transportMode} onValueChange={setTransportMode}>
                      <SelectTrigger id="transport">
                        <SelectValue placeholder="Select transportation mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="public">Public Transport</SelectItem>
                        <SelectItem value="bicycle">Bicycle</SelectItem>
                        <SelectItem value="walking">Walking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={handleCalculateRoute}
                    disabled={!start || !destination}
                  >
                    Calculate Route
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Carbon Impact</CardTitle>
                <CardDescription>Understand the environmental impact of your travel.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hasCalculated ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estimated Emissions Savings:</span>
                        <span className="font-medium text-green-600">0.9 kg CO₂</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Monthly Potential Savings:</span>
                        <span className="font-medium text-green-600">18 kg CO₂</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Trees Equivalent:</span>
                        <span className="font-medium">0.8 trees/month</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground">
                      <MapIcon className="h-12 w-12 mx-auto mb-2 text-muted-foreground/60" />
                      <p>Calculate a route to see the carbon impact</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {hasCalculated ? (
              <>
                <div className="rounded-lg overflow-hidden">
                  <RouteMap 
                    start={start}
                    destination={destination}
                    routeId={selectedRouteId}
                    isVisible={hasCalculated}
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Available Routes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {routes.map((route) => (
                      <Card 
                        key={route.id} 
                        className={route.id === selectedRouteId ? "border-primary border-2" : ""}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-md">{route.name}</CardTitle>
                            {route.id === 2 && (
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                Recommended
                              </span>
                            )}
                          </div>
                          <CardDescription>{route.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Distance:</span>
                              <span>{route.distance}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span>{route.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">CO₂:</span>
                              <span className={
                                route.id === 2 
                                  ? "text-green-600 font-medium" 
                                  : ""
                              }>
                                {route.carbonEmission}
                              </span>
                            </div>
                            <Button 
                              variant={route.id === selectedRouteId ? "default" : "outline"}
                              size="sm" 
                              className="w-full mt-2"
                              onClick={() => handleSelectRoute(route.id)}
                            >
                              Select Route
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="border rounded-lg h-full flex items-center justify-center p-8">
                <div className="text-center max-w-md mx-auto">
                  <Navigation className="h-16 w-16 mx-auto mb-4 text-primary/50" />
                  <h2 className="text-xl font-semibold mb-2">Start Planning Your Route</h2>
                  <p className="text-muted-foreground mb-6">
                    Select your start and destination cities to find the most eco-friendly routes
                    with detailed carbon emission information.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">See Example</Button>
                    <Button onClick={() => {
                      setStart("New York");
                      setDestination("Boston");
                    }}>
                      Quick Demo
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RouteOptimizer;
