import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { 
  Search,
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Target,
  Zap,
  Shield,
  DollarSign,
  Users,
  Settings
} from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      icon: Target,
      title: "Lead Generation",
      description: "Questions about our lead generation capabilities",
      faqs: [
        {
          question: "How does your lead generation platform work?",
          answer: "Our AI-powered platform analyzes millions of data points including behavioral patterns, company information, and intent signals to identify prospects who match your ideal customer profile. We use machine learning algorithms to continuously improve targeting accuracy and deliver highly qualified leads."
        },
        {
          question: "What types of leads can you generate?",
          answer: "We specialize in B2B leads across all industries including technology, healthcare, finance, manufacturing, and professional services. Our platform can generate leads for various roles including decision-makers, C-level executives, managers, and specific job functions based on your requirements."
        },
        {
          question: "How accurate is your lead data?",
          answer: "Our platform maintains a 95% data accuracy rate through real-time verification, multiple data sources, and continuous validation processes. We use AI to cleanse and enrich data, ensuring you receive the most up-to-date and accurate contact information."
        },
        {
          question: "Can I target specific industries or company sizes?",
          answer: "Yes, our advanced targeting capabilities allow you to filter by industry, company size, revenue, location, technology stack, and many other criteria. You can create highly specific target profiles to ensure you're reaching the right prospects."
        }
      ]
    },
    {
      icon: Zap,
      title: "Platform Features",
      description: "Understanding our platform capabilities",
      faqs: [
        {
          question: "What channels does your platform support for outreach?",
          answer: "Our platform supports multi-channel outreach including email, LinkedIn, phone calls (via our AI voice agent), SMS, and social media messaging. You can create integrated campaigns that reach prospects across multiple touchpoints for maximum effectiveness."
        },
        {
          question: "Do you offer automation features?",
          answer: "Yes, we provide comprehensive automation including email sequences, follow-up campaigns, lead scoring, CRM integration, and workflow automation. You can set up complex nurturing sequences that run automatically based on prospect behavior and engagement."
        },
        {
          question: "Can I integrate with my existing CRM?",
          answer: "Absolutely. We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ other platforms. Our integrations are bi-directional, ensuring data flows seamlessly between systems and your sales team has access to all lead information."
        },
        {
          question: "What analytics and reporting do you provide?",
          answer: "Our platform provides comprehensive analytics including campaign performance, conversion rates, ROI tracking, lead quality scores, and detailed engagement metrics. You can create custom dashboards and reports to monitor what matters most to your business."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Pricing & Plans",
      description: "Questions about pricing and billing",
      faqs: [
        {
          question: "Do you offer a free trial?",
          answer: "Yes, we offer a 14-day free trial for all plans. No credit card is required to start your trial. You'll have access to all features during the trial period to fully evaluate our platform."
        },
        {
          question: "What's the difference between your pricing plans?",
          answer: "Our Starter plan (from $79/month) includes up to 1,000 leads and basic features. Professional ($239/month) offers up to 5,000 leads with advanced AI targeting and automation. Enterprise ($799/month) provides unlimited leads with custom features and dedicated support."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Plan changes take effect immediately, and we'll prorate any billing adjustments. There are no long-term contracts or cancellation fees."
        },
        {
          question: "Do you offer custom enterprise pricing?",
          answer: "Yes, we offer custom enterprise solutions for large organizations with specific requirements. Enterprise pricing includes volume discounts, custom integrations, dedicated support, and SLA guarantees. Contact our sales team for a custom quote."
        }
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Data security and compliance questions",
      faqs: [
        {
          question: "Is your platform GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant and follow all major data protection regulations including CCPA, CAN-SPAM, and others. We have implemented strict data handling procedures, user consent management, and data retention policies to ensure compliance."
        },
        {
          question: "How do you ensure data security?",
          answer: "We use enterprise-grade security measures including SOC 2 Type II certification, ISO 27001 compliance, end-to-end encryption, secure data centers, and regular security audits. All data is encrypted in transit and at rest."
        },
        {
          question: "Where do you source your lead data?",
          answer: "We source data from publicly available sources, professional networks, company websites, and verified business directories. All data collection follows strict compliance guidelines and we never use purchased lists or scraped data from non-compliant sources."
        },
        {
          question: "How do you handle opt-outs and unsubscribes?",
          answer: "We maintain comprehensive suppression lists and honor all opt-out requests immediately. Our platform automatically processes unsubscribes and ensures that opted-out contacts are never contacted again. We also provide easy unsubscribe mechanisms in all communications."
        }
      ]
    },
    {
      icon: Users,
      title: "Getting Started",
      description: "Setup and onboarding questions",
      faqs: [
        {
          question: "How long does it take to set up the platform?",
          answer: "Most customers can set up their account and launch their first campaign within 30 minutes. Our onboarding process includes guided setup, template selection, and integration configuration. For enterprise customers, we provide dedicated onboarding support."
        },
        {
          question: "Do you provide training and support?",
          answer: "Yes, we offer comprehensive training including video tutorials, live webinars, documentation, and one-on-one training sessions for enterprise customers. Our support team is available via email, chat, and phone during business hours."
        },
        {
          question: "Can you help migrate data from our current system?",
          answer: "Absolutely. We provide data migration assistance to help you transfer contacts, campaigns, and historical data from your existing systems. Our team will work with you to ensure a smooth transition with minimal disruption."
        },
        {
          question: "What kind of support do you offer?",
          answer: "We offer multiple support channels including email support (24-hour response), live chat (business hours), phone support for Professional and Enterprise plans, and dedicated account managers for Enterprise customers. We also maintain an extensive knowledge base and community forum."
        }
      ]
    },
    {
      icon: Settings,
      title: "Technical Questions",
      description: "Technical setup and integration questions",
      faqs: [
        {
          question: "Do you have an API?",
          answer: "Yes, we provide a comprehensive REST API that allows you to integrate our lead generation capabilities into your existing systems. The API supports lead retrieval, campaign management, and real-time webhooks for updates."
        },
        {
          question: "What integrations do you support?",
          answer: "We support 100+ integrations including CRMs (Salesforce, HubSpot, Pipedrive), email platforms (Mailchimp, Constant Contact), marketing automation tools (Marketo, Pardot), and communication tools (Slack, Microsoft Teams)."
        },
        {
          question: "Can I customize the platform for my specific needs?",
          answer: "Yes, our Enterprise plan includes customization options such as custom fields, workflows, reporting, and white-label solutions. We can also develop custom integrations and features based on your specific requirements."
        },
        {
          question: "Do you offer white-label solutions?",
          answer: "Yes, we offer white-label solutions for agencies and resellers. This includes custom branding, dedicated instances, and reseller pricing. Contact our partnership team to learn more about our white-label program."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0 || searchTerm === "");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-background">
            <Badge variant="outline" className="mb-6 border-background/20 text-background">
              Help Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked 
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our lead generation platform, features, and pricing
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/90 backdrop-blur-sm border-background/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {searchTerm === "" && (
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Browse by 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Category</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers organized by topic
              </p>
            </div>
          )}

          <div className="max-w-6xl mx-auto space-y-12">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <Card className="bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm !== "" && filteredFAQs.every(cat => cat.faqs.length === 0) && (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any answers matching "{searchTerm}". Try different keywords or contact our support team.
              </p>
              <Button asChild>
                <a href="https://salescentri.com/contact/support-request">
                  Contact Support
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you succeed
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-background border-0 shadow-soft">
                <CardHeader className="text-center">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant help</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/contact/support-request/live-chat">
                      Start Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-0 shadow-soft">
                <CardHeader className="text-center">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Submit Ticket</CardTitle>
                  <CardDescription>Detailed support request</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/contact/support-request/submit-ticket">
                      Create Ticket
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-0 shadow-soft">
                <CardHeader className="text-center">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Schedule Call</CardTitle>
                  <CardDescription>One-on-one support</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/get-started/calendly">
                      Book Call
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <a href="https://salescentri.com/contact" className="flex items-center">
                  Contact Support Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Knowledge Base</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access detailed guides, tutorials, and documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/docs/user-guide">User Guide</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/resources/tutorials-webinars">Tutorials</a>
              </Button>
              <Button asChild>
                <a href="https://salescentri.com/docs/api-reference">API Documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;