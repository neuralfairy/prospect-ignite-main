import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="mr-2 h-4 w-4" />
                #1 B2B Lead Generation Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-background leading-tight">
                Generate High-Quality
                <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  {" "}B2B Leads
                </span>
              </h1>
              
              <p className="text-xl text-background/80 max-w-lg">
                Transform your sales pipeline with AI-powered lead generation that delivers targeted, qualified prospects ready to convert.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-background">300%</div>
                <div className="text-sm text-background/70">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background">10k+</div>
                <div className="text-sm text-background/70">Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background">95%</div>
                <div className="text-sm text-background/70">Accuracy Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium" asChild>
                <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-background/70">
                <Users className="h-5 w-5" />
                <span className="text-sm">Trusted by 500+ companies</span>
              </div>
              <div className="flex items-center space-x-2 text-background/70">
                <Zap className="h-5 w-5" />
                <span className="text-sm">Set up in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-card rounded-2xl p-8 shadow-strong">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Lead Pipeline</h3>
                  <div className="text-sm text-muted-foreground">Live Data</div>
                </div>
                
                <div className="space-y-4">
                  {/* Mock Lead Cards */}
                  <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        JD
                      </div>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">TechCorp Inc.</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">Hot Lead</div>
                      <div className="text-xs text-muted-foreground">95% match</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold">
                        SM
                      </div>
                      <div>
                        <div className="font-medium">Sarah Miller</div>
                        <div className="text-sm text-muted-foreground">DataFlow Solutions</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">Qualified</div>
                      <div className="text-xs text-muted-foreground">88% match</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        RJ
                      </div>
                      <div>
                        <div className="font-medium">Robert Johnson</div>
                        <div className="text-sm text-muted-foreground">InnovateCorp</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">Warm Lead</div>
                      <div className="text-xs text-muted-foreground">92% match</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Today's Leads</span>
                    <span className="font-semibold text-primary">+47 new</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;