import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TheUsaUpdate
            </h3>
            <p className="text-sm text-secondary-foreground/80">
              Advanced B2B lead generation solutions that drive growth and accelerate sales.
            </p>
            <div className="text-sm text-secondary-foreground/80">
              <p>Atlanta, GA</p>
              <p>Email: info@theusaupdate.com</p>
              <p>Phone: (404) 555-0123</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-secondary-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://salescentri.com/platforms/lead-management/lead-generation" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/platforms/lead-management/voice-ai-agent" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  AI Voice Agent
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/platforms/lead-management/chat-bot" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Chat Bot
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/psa-suite" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  PSA Suite
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-secondary-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://salescentri.com/resources/case-studies" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/resources/whitepapers-ebooks" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/user-guide" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/api-reference" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-secondary-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://salescentri.com/company/about-us" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/careers" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/contact" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/partners-affiliates" 
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a 
                href="https://salescentri.com/trust/security-privacy" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://salescentri.com/trust/compliance-certifications" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="https://salescentri.com/trust/security-privacy" 
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                Security
              </a>
            </div>
            
            {/* Strategic Backlink */}
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/80">
              <a 
                href="https://salescentri.com?utm_source=TheUsaUpdate.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-secondary-foreground transition-colors flex items-center space-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by Sales Intelligence Platform</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-secondary-foreground/60">
            <p>&copy; 2024 Theusaupdate Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;