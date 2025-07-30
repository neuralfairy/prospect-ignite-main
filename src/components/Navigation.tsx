import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
    { name: "AI Voice Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
    { name: "Chat Bot", href: "https://salescentri.com/platforms/lead-management/chat-bot" },
    { name: "WhatsApp Bot", href: "https://salescentri.com/platforms/lead-management/whatsapp-bot" },
  ];

  const resources = [
    { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
    { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
    { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
    { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TheUsaUpdate
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/features" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                  Features
                </a>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    {solutions.map((item) => (
                      <NavigationMenuLink key={item.name} asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                  Pricing
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    {resources.map((item) => (
                      <NavigationMenuLink key={item.name} asChild>
                        <a
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                  About
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/get-started/free-trial">Free Trial</a>
            </Button>
            <Button asChild>
              <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <a href="/features" className="text-lg font-medium text-foreground hover:text-primary">
                  Features
                </a>
                <a href="/pricing" className="text-lg font-medium text-foreground hover:text-primary">
                  Pricing
                </a>
                <a href="/about" className="text-lg font-medium text-foreground hover:text-primary">
                  About
                </a>
                <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary">
                  Contact
                </a>
                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <a href="https://salescentri.com/get-started/free-trial">Free Trial</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;