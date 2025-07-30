import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Users,
  Building,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our sales team",
      contact: "(404) 555-0123",
      hours: "Mon-Fri, 9AM-6PM EST",
      href: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "info@theusaupdate.com",
      hours: "24/7 response time",
      href: "https://salescentri.com/contact/support-request"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support for quick questions",
      contact: "Available on our website",
      hours: "Mon-Fri, 8AM-8PM EST",
      href: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized product demo",
      contact: "30-minute consultation",
      hours: "Available daily",
      href: "https://salescentri.com/get-started/book-demo"
    }
  ];

  const offices = [
    {
      city: "Atlanta, GA",
      address: "1234 Peachtree Street NE, Suite 500",
      phone: "(404) 555-0123",
      email: "atlanta@theusaupdate.com",
      type: "Headquarters"
    },
    {
      city: "New York, NY",
      address: "567 Broadway, Floor 12",
      phone: "(212) 555-0123",
      email: "newyork@theusaupdate.com",
      type: "Sales Office"
    },
    {
      city: "San Francisco, CA",
      address: "890 Market Street, Suite 200",
      phone: "(415) 555-0123",
      email: "sanfrancisco@theusaupdate.com",
      type: "Tech Hub"
    }
  ];

  const supportTypes = [
    {
      icon: Users,
      title: "Sales Inquiry",
      description: "Questions about our platform and pricing",
      href: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Help with platform usage and troubleshooting",
      href: "https://salescentri.com/contact/support-request/submit-ticket"
    },
    {
      icon: Building,
      title: "Partnership Opportunities",
      description: "Interested in becoming a partner",
      href: "https://salescentri.com/contact/partnerships/partner-inquiry"
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your 
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Lead Generation?
              </span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to learn how TheUsaUpdate can help you generate more qualified leads and accelerate your sales growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://salescentri.com/get-started/book-demo" className="flex items-center">
                  Book Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Multiple Ways to 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.href}>
                <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2">
                      <div className="font-medium text-primary">{method.contact}</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {method.hours}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How Can We 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Help You?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTypes.map((type, index) => (
              <a key={index} href={type.href}>
                <Card className="bg-background border-0 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" className="flex items-center">
                      Get Help
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Send Us a 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Message</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-8">
                <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="GET">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" name="company" placeholder="Your Company Inc." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select name="inquiryType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your lead generation challenges and goals..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" name="consent" required className="rounded border-input" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from TheUsaUpdate and understand that I can unsubscribe at any time.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us at one of our offices across the United States
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-background border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{office.city}</CardTitle>
                    <Badge variant="outline">{office.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">{office.address}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="text-sm">{office.phone}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="text-sm">{office.email}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check out our frequently asked questions or contact our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/faq">View FAQ</a>
              </Button>
              <Button asChild>
                <a href="https://salescentri.com/contact/support-request">
                  Contact Support
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

export default Contact;