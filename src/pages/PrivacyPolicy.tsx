import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navigation />

    <section className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-background">
          <Badge variant="outline" className="mb-6 border-background/20 text-background">
            Privacy
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            How information may be handled when you visit TheUsaUpdate or use the contact form on this website.
          </p>
          <p className="mt-4 text-sm text-background/70">Last updated: November 26, 2026</p>
        </div>
      </div>
    </section>

    <main className="container mx-auto px-6 py-16">
      <article className="max-w-4xl mx-auto space-y-10 text-muted-foreground leading-7">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Scope and site identity</h2>
          <p>
            This notice describes the website and data flows visible in the TheUsaUpdate website
            code. The site uses the name “TheUsaUpdate”; its footer displays “Theusaupdate
            Solutions.” The code does not establish the responsible legal entity, its address, or
            who legally controls information submitted through the site. This notice does not
            describe the privacy practices of other services that may open when you follow an
            external link.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Information you submit</h2>
          <p>
            The Contact page has a form that asks for your first name, last name, email address,
            company name, and message. It also offers an optional phone number and inquiry type
            (sales, support, partnership, demo, or other). The form requires a communications
            consent checkbox. Its wording says you agree to receive communications and may
            unsubscribe; the code does not specify how that preference is recorded or how
            unsubscribing works.
          </p>
          <p className="mt-3">
            Submitting this form sends the form values using a GET request over HTTPS to
            <span className="font-medium text-foreground"> salescentri.com/get-started/contact</span>.
            GET places submitted values in the request URL, which can be visible in the browser
            address/history and to systems handling that request. The form does not submit to an
            API or storage handler present in this codebase. What the destination does with the
            information, how long it keeps it, and whether it passes it to others are not
            established here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Information collected through tags</h2>
          <p>
            The website’s HTML loads Google Tag Manager using container ID GTM-KT8CFBQT, including
            a no-script iframe. Loading the tag manager makes a request to Google. As with a web
            request, the receiving service may process connection and browser information; the
            exact information, purposes, cookies, and any additional recipients depend on the
            tag-manager configuration.
          </p>
          <p className="mt-3">
            The container’s configuration is not included in this codebase, so this site’s
            configured tags, analytics events, and any resulting collection or sharing cannot be
            verified from the code. A separate legacy file in the repository contains Google
            Analytics setup, but it is not part of this Vite application’s entry point and is not
            loaded by the current app configuration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Cookies and local storage</h2>
          <p>
            The active pages do not implement a cookie preference banner or directly set
            application cookies or browser local/session storage. The tag manager may use or
            cause configured tags to use cookies or similar technologies; the unavailable
            container configuration means that behavior cannot be confirmed here. A reusable
            sidebar component in the source contains code to save its open state in a cookie, but
            the current website pages do not render that component.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">External links and recipients</h2>
          <p>
            The site links to Salescentri pages for contact, trials, demos, and other services.
            Following those links takes you to an external site, where its operator may receive
            information from your browser. The footer’s “Powered by” link also includes campaign
            referral parameters in its URL. The code does not establish the relationship between
            TheUsaUpdate and Salescentri, the processing terms between them, or the external
            site’s privacy practices.
          </p>
          <p className="mt-3">
            No other backend integrations or data-transmission endpoints are implemented in the
            active application source. This does not establish what may be collected by the
            website’s hosting or network providers, whose configuration is outside this
            codebase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Purpose, retention, and security</h2>
          <p>
            The contact form is presented for sending an inquiry and requesting communications.
            The tag manager is present in the page template, but the purposes of its configured
            tags cannot be determined from this repository. No retention period, deletion
            schedule, security controls, or hosting and storage arrangements are specified in the
            code. We therefore cannot describe or promise those practices here.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Sale, targeted advertising, and profiling</h2>
          <p>
            The active application code does not establish whether information is sold, shared
            for targeted advertising, or used for profiling. The tag-manager configuration and
            the external form destination are not available in this repository, so this notice
            cannot confirm whether those activities occur or provide an opt-out control for them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Your choices and privacy requests</h2>
          <p>
            You can choose not to submit the contact form; the fields marked required and the
            consent checkbox are needed to submit it. The phone number and inquiry type are
            optional in the form. The form says you can unsubscribe from communications, but the
            code does not identify an unsubscribe method or a process for access, correction, or
            deletion requests. It also does not identify a dedicated privacy contact or explain
            how to exercise rights that may apply under your local law. Depending on where you
            live, U.S. state privacy laws may provide rights over personal information; the
            applicable laws and a request process are not established by this codebase. The
            website code also does not show whether it recognizes browser-based opt-out signals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Children and policy changes</h2>
          <p>
            The code does not specify whether this website is directed to children or define an
            age threshold, and it contains no age-verification flow. The codebase also does not
            define a policy-update or notification process. Any handling beyond what is described
            above cannot be determined from the website source alone.
          </p>
        </section>

        <p className="border-t pt-6 text-sm">
          This notice is limited to behavior established by the current website code. It is not a
          statement about practices of external services or infrastructure that are not configured
          in this repository.
        </p>
      </article>
    </main>

    <Footer />
  </div>
);

export default PrivacyPolicy;
