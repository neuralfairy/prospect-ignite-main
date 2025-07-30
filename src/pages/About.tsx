import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  MapPin,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Mail,
  Globe,
  Shield
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in B2B sales and marketing. Previously led sales teams at Fortune 500 companies.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former Google engineer specializing in AI and machine learning. Expert in scalable systems.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Sales",
      bio: "B2B sales veteran with track record of building high-performing sales organizations.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product management expert focused on user experience and conversion optimization.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the tangible results we deliver to our clients' bottom line."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every decision we make is guided by what's best for our customers and their success."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously invest in cutting-edge technology to stay ahead of market trends."
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "We believe in honest communication and clear reporting on all our activities."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize B2B lead generation"
    },
    {
      year: "2021",
      title: "First 100 Customers",
      description: "Reached our first major milestone with proven product-market fit"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered targeting and automation features"
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $15M to accelerate growth and product development"
    },
    {
      year: "2024",
      title: "10,000+ Users",
      description: "Serving thousands of companies with over 2.5M leads generated"
    }
  ];

  const certifications = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "ISO 27001 Certified",
    "CAN-SPAM Compliant",
    "CCPA Compliant"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-background">
            <Badge variant="outline" className="mb-6 border-background/20 text-background">
              About TheUsaUpdate
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transforming B2B 
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                {" "}Sales Forever
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We're on a mission to help businesses generate high-quality leads and accelerate their sales growth through innovative technology and proven methodologies.
            </p>
            <div className="flex items-center justify-center space-x-6 text-background/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Atlanta, GA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Our 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  To democratize access to high-quality B2B leads by leveraging artificial intelligence and data science. We believe every business, regardless of size, should have access to the same advanced lead generation capabilities used by Fortune 500 companies.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the global leader in AI-powered B2B lead generation, enabling millions of businesses to accelerate their growth and achieve their sales objectives.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2.5M+</div>
                  <div className="text-sm text-muted-foreground">Leads Generated</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">340%</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <Badge variant="outline" className="text-primary border-primary">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2"></div>
                  <div className="flex-grow pb-8">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts passionate about helping businesses grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href="https://salescentri.com/company/about-us/leadership-team">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href="https://salescentri.com/contact">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Security & 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Compliance</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Your data security and privacy are our top priorities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Industry Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• "Best Lead Gen Platform" - SaaS Awards 2023</li>
                    <li>• "Fastest Growing Startup" - Tech Atlanta</li>
                    <li>• "Top B2B Solution" - Sales Tech Awards</li>
                    <li>• "Innovation Award" - MarTech Breakthrough</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 300% YoY revenue growth</li>
                    <li>• 98% customer satisfaction</li>
                    <li>• 99.9% platform uptime</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals who share our passion for helping businesses grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://salescentri.com/company/careers" className="flex items-center">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://salescentri.com/contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;