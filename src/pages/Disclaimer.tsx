import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnquireSidebar />

      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl lg:text-4xl text-gold mb-8"
          >
            Disclaimer
          </motion.h1>

          {/* Last Updated */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Last Updated: December 2025
          </motion.p>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-6 text-foreground/90"
          >
            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                1. General Information
              </h2>
              <p>
                The information contained on this website operated by Meridian Real Estate & Construction Ltd. ("we," "our," or "us") is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                2. Property Information
              </h2>
              <h3 className="font-semibold text-xl mt-6 mb-3">2.1 Accuracy of Information</h3>
              <p>
                All property descriptions, images, specifications, floor plans, pricing, and availability information are provided for informational purposes only and are subject to change without notice. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The accuracy of property dimensions, specifications, or features</li>
                <li>That images accurately represent the current condition of properties</li>
                <li>That pricing information is current or final</li>
                <li>That properties are available at the time of inquiry</li>
              </ul>

              <h3 className="font-semibold text-xl mt-6 mb-3">2.2 Property Availability</h3>
              <p>
                Property availability is subject to change without notice. The listing of a property on this website does not guarantee its availability. All property transactions are subject to execution of formal agreements and compliance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                3. No Professional Advice
              </h2>
              <p>
                The information on this website does not constitute professional advice, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legal advice</li>
                <li>Financial or investment advice</li>
                <li>Tax advice</li>
                <li>Real estate valuation or appraisal</li>
              </ul>
              <p className="mt-4">
                You should consult with qualified professionals for advice specific to your situation before making any property-related decisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                4. Third-Party Content
              </h2>
              <p>
                This website may contain content, links, or references to third-party websites, services, or information. We do not endorse, warrant, or assume responsibility for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The accuracy or reliability of third-party content</li>
                <li>The privacy practices of third-party websites</li>
                <li>The quality or safety of third-party services</li>
                <li>Any transactions between you and third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                5. Website Availability
              </h2>
              <p>
                We do not guarantee that the website will be available at all times or that access will be uninterrupted. The website may be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical maintenance or updates</li>
                <li>Server issues or downtime</li>
                <li>Network connectivity problems</li>
                <li>Force majeure events</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                6. Investment Risks
              </h2>
              <p>
                Real estate investments carry inherent risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Market fluctuations and property value changes</li>
                <li>Regulatory and legal changes</li>
                <li>Construction delays or defects</li>
                <li>Economic conditions and interest rate changes</li>
                <li>Location-specific risks</li>
              </ul>
              <p className="mt-4">
                Past performance or projected returns do not guarantee future results. You should carefully evaluate all risks before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Meridian Real Estate & Construction Ltd., its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or information</li>
                <li>Property damage or personal injury</li>
                <li>Any damages arising from reliance on website information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                8. Regulatory Compliance
              </h2>
              <p>
                Property transactions are subject to various local, state, and national laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real estate regulations and licensing requirements</li>
                <li>Building codes and zoning laws</li>
                <li>Environmental regulations</li>
                <li>Tax laws and regulations</li>
                <li>Foreign investment regulations (where applicable)</li>
              </ul>
              <p className="mt-4">
                It is your responsibility to ensure compliance with all applicable laws and regulations in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                9. Changes to Information
              </h2>
              <p>
                We reserve the right to modify, update, or remove any information on this website at any time without prior notice. We are under no obligation to update information that becomes outdated or inaccurate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                10. Jurisdiction-Specific Disclaimers
              </h2>
              <p>
                Meridian Real Estate & Construction Ltd. operates in multiple jurisdictions, including India, Oman, Kuwait, Qatar, and Singapore. Different legal requirements and regulations may apply depending on the jurisdiction. Please consult with local legal and financial advisors for jurisdiction-specific information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                11. Contact Information
              </h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@meridianrealestate.com"
                    className="text-gold hover:underline"
                  >
                    info@meridianrealestate.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Meridian Real Estate & Construction Ltd.<br />
                  Brigade Twin Towers, Bengaluru, India
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
