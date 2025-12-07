import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Award, ArrowRight } from "lucide-react";

const interviewHistory = [
  {
    id: 1,
    title: "Frontend Developer Interview",
    date: "24-Dec-2024",
    score: 85,
    feedback: "Great technical knowledge! Focus on explaining your thought process more clearly. Practice articulating trade-offs between different solutions. Your React expertise shines, but work on system design concepts.",
    category: "Technical"
  },
  {
    id: 2,
    title: "Behavioral Interview Practice",
    date: "20-Dec-2024",
    score: 78,
    feedback: "Good storytelling ability. Strengthen your STAR method responses. Add more specific metrics and results to your examples. Your leadership examples are compelling - keep that up!",
    category: "Behavioral"
  },
  {
    id: 3,
    title: "System Design Interview",
    date: "18-Dec-2024",
    score: 72,
    feedback: "Solid foundation in distributed systems. Dive deeper into scalability considerations. Practice discussing trade-offs between different architectures. Consider edge cases and failure scenarios more thoroughly.",
    category: "Technical"
  },
  {
    id: 4,
    title: "Product Manager Interview",
    date: "15-Dec-2024",
    score: 88,
    feedback: "Excellent product thinking! Strong customer empathy and data-driven approach. Continue working on prioritization frameworks. Your roadmap planning skills are impressive.",
    category: "Product"
  },
  {
    id: 5,
    title: "Coding Interview Round",
    date: "12-Dec-2024",
    score: 92,
    feedback: "Outstanding problem-solving skills! Clean code and optimal solutions. Keep practicing time complexity analysis. Your communication during coding is a major strength.",
    category: "Technical"
  }
];

const Profile = () => {
  const averageScore = Math.round(
    interviewHistory.reduce((sum, interview) => sum + interview.score, 0) / interviewHistory.length
  );

  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Card */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Avatar className="h-24 w-24 border-4 border-accent">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">John Doe</h2>
                  <p className="text-muted-foreground">john.doe@email.com</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    <Award className="h-3 w-3 mr-1" />
                    {interviewHistory.length} Interviews Completed
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Avg Score: {averageScore}%
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Interview Practice History</h3>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All
            </Button>
          </div>

          <div className="grid gap-4">
            {interviewHistory.map((interview) => (
              <Card 
                key={interview.id} 
                className="border-border bg-card hover:border-accent hover:shadow-lg transition-all cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                        {interview.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {interview.date}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={
                            interview.score >= 85 
                              ? "bg-green-500/10 text-green-600 border-green-500/20" 
                              : interview.score >= 70 
                              ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                              : "bg-red-500/10 text-red-600 border-red-500/20"
                          }
                        >
                          Score: {interview.score}%
                        </Badge>
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {interview.category}
                        </Badge>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/5 border border-accent/10 rounded-lg p-4">
                    <p className="text-sm font-medium text-accent mb-2">Performance Feedback:</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {interview.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
