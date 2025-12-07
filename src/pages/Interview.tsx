import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Code, Users, Briefcase, Layers, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Software Engineering",
    description: "Technical coding interviews, system design, and algorithms",
    icon: Code,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    id: 2,
    title: "Product Management",
    description: "Product strategy, roadmaps, and stakeholder management",
    icon: Layers,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    id: 3,
    title: "Behavioral Interviews",
    description: "Leadership principles, team dynamics, and situational questions",
    icon: Users,
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  {
    id: 4,
    title: "Business & Strategy",
    description: "Case studies, market analysis, and business acumen",
    icon: Briefcase,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  }
];

const Interview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-foreground">Choose Your Interview Path</h1>
          <p className="text-lg text-muted-foreground">
            Select a course to start your personalized interview preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="border-border bg-card hover:border-accent hover:shadow-lg transition-all group cursor-pointer"
              onClick={() => navigate(`/interview/${course.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${course.color} border`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors pt-4">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/interview/${course.id}`);
                  }}
                >
                  Explore Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
