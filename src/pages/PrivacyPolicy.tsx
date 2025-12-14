import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

const PrivacyPolicy = () => {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Meridian Real Estate & Construction Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-semibold text-xl mt-6 mb-3">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Property preferences and requirements</li>
                <li>Financial information for property transactions</li>
                <li>Identification documents as required by law</li>
              </ul>

              <h3 className="font-semibold text-xl mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device identifiers and operating system information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process property inquiries and transactions</li>
                <li>Communicate with you about properties, services, and updates</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                6. Your Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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

export default PrivacyPolicy;
