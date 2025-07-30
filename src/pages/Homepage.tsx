import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Zap, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

const Homepage = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered algorithms identify your ideal prospects with 95% accuracy using advanced behavioral and demographic data."
    },
    {
      icon: Zap,
      title: "Instant Lead Generation",
      description: "Generate qualified leads in real-time with our automated prospecting engine that works 24/7."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights, conversion metrics, and ROI analysis to optimize your campaigns."
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Enterprise-grade security and compliance with all major data protection regulations worldwide."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "VP of Sales",
      content: "TheUsaUpdate transformed our lead generation process. We saw a 300% increase in qualified leads within the first month.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataVision Corp",
      role: "Marketing Director",
      content: "The AI-powered targeting is incredibly accurate. Our conversion rates improved by 85% since implementing their solution.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GrowthLab Inc",
      role: "CEO",
      content: "Best ROI we've ever achieved on lead generation. The platform pays for itself within weeks.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Leads Generated", value: "2.5M+", icon: Target },
    { label: "Average ROI", value: "340%", icon: TrendingUp },
    { label: "Setup Time", value: "< 5 min", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Everything You Need for 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Lead Generation Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform combines AI technology with proven sales methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Customer Success
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Trusted by Leading 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> B2B Companies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Calculate Your Potential ROI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how much revenue you could generate with our lead generation platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/recommendations" className="flex items-center">
                  Try ROI Calculator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://salescentri.com/get-started/book-demo">
                  Schedule Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Lead Generation?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of B2B companies generating high-quality leads with TheUsaUpdate
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" asChild>
                <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/contact">
                  Contact Sales
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                Setup in under 5 minutes
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;