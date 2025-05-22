
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ModuleCard = ({ title, description, icon: Icon, link }: ModuleCardProps) => {
  return (
    <Link to={link}>
      <Card className="h-full overflow-hidden card-hover">
        <CardHeader className="pb-2">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-primary font-medium flex items-center">
            Learn more
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
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ModuleCard;
