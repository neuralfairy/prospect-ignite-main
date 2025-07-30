import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap,
  Users,
  Building,
  Phone,
  Mail
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with lead generation",
      icon: Zap,
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 1,000 leads per month",
        "Email outreach campaigns",
        "Basic CRM integration",
        "Standard support",
        "Lead scoring",
        "Email templates",
        "Basic analytics",
        "CSV export"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/pricing/free-trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced features for growing sales teams",
      icon: Users,
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        "Up to 5,000 leads per month",
        "Multi-channel outreach",
        "Advanced CRM integrations",
        "Priority support",
        "AI-powered targeting",
        "Custom templates",
        "Advanced analytics",
        "A/B testing",
        "Lead enrichment",
        "Workflow automation",
        "Team collaboration",
        "API access"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/pricing/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      icon: Building,
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        "Unlimited leads",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Custom reporting",
        "Training & onboarding",
        "Multi-team management",
        "Custom workflows",
        "Enterprise SSO"
      ],
      cta: "Contact Sales",
      href: "https://salescentri.com/pricing/enterprise-custom",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What's included in the Enterprise plan?",
      answer: "Enterprise plans include unlimited leads, dedicated support, custom integrations, and advanced security features. Contact our sales team for a custom quote."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, you save 20% when you choose annual billing over monthly payments."
    },
    {
      question: "What CRM integrations do you support?",
      answer: "We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ other platforms."
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
              Simple Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose Your 
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transparent pricing designed to scale with your business. Start free, upgrade when you're ready.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? 'text-background' : 'text-background/60'}`}>Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-lg ${isAnnual ? 'text-background' : 'text-background/60'}`}>
                Annual
                <Badge variant="outline" className="ml-2 border-primary-light text-primary-light">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.href} className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our Enterprise plan can be tailored to meet your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Call
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Calculate Your 
                <span className="bg-gradient-primary bg-clip-text text-transparent">Potential ROI</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how much revenue our platform could generate for your business
              </p>
            </div>
            
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">ROI Calculator</CardTitle>
                <CardDescription>
                  Based on average customer results: 340% ROI within 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">47%</div>
                    <div className="text-sm text-muted-foreground">Average conversion rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">$8,450</div>
                    <div className="text-sm text-muted-foreground">Average deal size</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">340%</div>
                    <div className="text-sm text-muted-foreground">Average ROI</div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                      Get Custom ROI Calculation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-background border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/contact">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already generating leads with TheUsaUpdate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://salescentri.com/get-started/book-demo">
                  Book Demo
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

export default Pricing;