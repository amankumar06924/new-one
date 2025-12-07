import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/interview-hero.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Final Round AI</h1>
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            onClick={() => navigate("/profile")}
          >
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Get Interview Ready With{" "}
                <span className="text-accent">Final Round AI</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Practice with AI-powered mock interviews, get instant feedback, 
                and build the confidence you need to ace your next interview. 
                Join thousands of professionals who have landed their dream jobs.
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8"
                  onClick={() => navigate("/interview")}
                >
                  Start Interview Prep
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8"
                  onClick={() => navigate("/chatbot")}
                >
                  Try Chatbot
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
                <img 
                  src={heroImage} 
                  alt="Interview preparation scene" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Final Round AI?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Feedback",
                description: "Get detailed insights on your performance with real-time AI analysis"
              },
              {
                title: "Industry Experts",
                description: "Practice with questions curated by top professionals in your field"
              },
              {
                title: "Track Progress",
                description: "Monitor your improvement over time with comprehensive dashboards"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl border border-border bg-card hover:border-accent hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
