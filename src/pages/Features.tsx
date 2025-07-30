import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Zap, 
  BarChart3, 
  Shield, 
  Brain,
  Users,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Database,
  Workflow,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Targeting",
      description: "Machine learning algorithms analyze millions of data points to identify your perfect prospects with unprecedented accuracy.",
      benefits: ["95% targeting accuracy", "Behavioral analysis", "Predictive scoring", "Real-time optimization"]
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access to over 100M verified B2B contacts across all industries with real-time data enrichment.",
      benefits: ["100M+ contacts", "Real-time verification", "GDPR compliant", "Global coverage"]
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Set up complex lead nurturing sequences that run automatically, saving time and increasing conversion rates.",
      benefits: ["Multi-channel sequences", "Smart triggers", "A/B testing", "Performance tracking"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your lead generation performance with actionable recommendations for optimization.",
      benefits: ["Real-time dashboards", "ROI tracking", "Conversion analysis", "Custom reporting"]
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Pipedrive", category: "CRM" },
    { name: "Slack", category: "Communication" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Zapier", category: "Automation" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "LinkedIn Sales Navigator", category: "Social Selling" }
  ];

  const channels = [
    {
      icon: Mail,
      title: "Email Outreach",
      description: "Personalized email campaigns with high deliverability rates",
      features: ["Template library", "A/B testing", "Deliverability optimization", "Automated follow-ups"]
    },
    {
      icon: Phone,
      title: "Voice AI Agent",
      description: "AI-powered voice calling that sounds human and converts",
      features: ["Natural conversations", "Real-time responses", "Call analytics", "Custom scripts"]
    },
    {
      icon: MessageSquare,
      title: "Chat & Messaging",
      description: "Multi-channel messaging across web, social, and mobile",
      features: ["Live chat widgets", "Social messaging", "SMS campaigns", "WhatsApp integration"]
    },
    {
      icon: Globe,
      title: "Social Selling",
      description: "LinkedIn and social media prospecting automation",
      features: ["Profile automation", "Connection requests", "Message sequences", "Social listening"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-background">
            <Badge variant="outline" className="mb-6 border-background/20 text-background">
              Platform Features
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful Lead Generation
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                {" "}Features
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover the advanced capabilities that make TheUsaUpdate the leading B2B lead generation platform
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" className="flex items-center">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Core 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Platform Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to generate, qualify, and convert high-quality B2B leads
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Outreach */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Multi-Channel 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Outreach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach your prospects where they are with our comprehensive communication channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {channel.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Explore Features by 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Category</span>
              </h2>
            </div>

            <Tabs defaultValue="targeting" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="targeting">Targeting</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="targeting" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">AI-Powered Targeting</h3>
                    <p className="text-muted-foreground">
                      Our advanced AI algorithms analyze behavioral patterns, company data, and market signals to identify your ideal prospects with 95% accuracy.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Behavioral scoring and analysis</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Intent data integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Lookalike audience creation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Real-time lead scoring</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator">Learn More</a>
                    </Button>
                  </div>
                  <div className="relative">
                    <Card className="bg-gradient-card border-0 shadow-medium">
                      <CardHeader>
                        <CardTitle>Target Profile Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Behavioral Match</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-primary/20 rounded-full">
                              <div className="w-[85%] h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">85%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Company Fit</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-primary/20 rounded-full">
                              <div className="w-[92%] h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Intent Score</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-2 bg-primary/20 rounded-full">
                              <div className="w-[78%] h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">78%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="automation" className="mt-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Workflow Automation</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Create sophisticated automated workflows that nurture leads through your entire sales funnel, from initial contact to closed deal.
                  </p>
                  <Button asChild>
                    <a href="https://salescentri.com/platforms/lead-management">Explore Automation</a>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Performance Analytics</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Track every metric that matters with real-time dashboards, conversion analysis, and detailed ROI reporting.
                  </p>
                  <Button asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">View Analytics Demo</a>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="integrations" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Connect with your existing tools and workflows. Our platform integrates with 100+ popular business applications.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {integrations.map((integration, index) => (
                      <Card key={index} className="text-center p-4 hover:shadow-soft transition-shadow">
                        <div className="font-medium">{integration.name}</div>
                        <div className="text-sm text-muted-foreground">{integration.category}</div>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button asChild>
                      <a href="https://salescentri.com/solutions/psa-suite/integrations">View All Integrations</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial today and see how our advanced features can transform your lead generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  Watch Demo
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

export default Features;