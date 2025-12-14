import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

const TermsAndConditions = () => {
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
            Terms & Conditions
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website operated by Meridian Real Estate & Construction Ltd. ("we," "our," or "us"), you accept and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                2. Use of Website
              </h2>
              <h3 className="font-semibold text-xl mt-6 mb-3">2.1 Permitted Use</h3>
              <p>
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Copy, reproduce, or resell any content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                3. Property Information
              </h2>
              <p>
                All property information, images, specifications, and pricing displayed on this website are for informational purposes only and are subject to change without notice. While we strive for accuracy, we do not warrant that all information is complete, current, or error-free.
              </p>
              <p className="mt-4">
                Property availability, pricing, and specifications are subject to change. Final terms and conditions for any property transaction will be as specified in the official sale agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Meridian Real Estate & Construction Ltd. or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                5. Property Transactions
              </h2>
              <h3 className="font-semibold text-xl mt-6 mb-3">5.1 Inquiries and Bookings</h3>
              <p>
                Submitting an inquiry or booking request through our website does not constitute a binding agreement. All property transactions are subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verification of property availability</li>
                <li>Execution of formal sale/purchase agreements</li>
                <li>Payment of required deposits and fees</li>
                <li>Compliance with all applicable laws and regulations</li>
              </ul>

              <h3 className="font-semibold text-xl mt-6 mb-3">5.2 Pricing and Payments</h3>
              <p>
                All prices are subject to change without notice. Final pricing will be confirmed in the official sale agreement. Payment terms and conditions will be specified in the relevant transaction documents.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                6. Disclaimers
              </h2>
              <p>
                The website and its content are provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Accuracy, completeness, or reliability of information</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Freedom from viruses or other harmful components</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Meridian Real Estate & Construction Ltd. shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or inability to use the website</li>
                <li>Any errors or omissions in the content</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Meridian Real Estate & Construction Ltd., its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website or violation of these Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your interactions with third-party sites are solely between you and the third party.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                10. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                11. Governing Law
              </h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, India.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                12. Severability
              </h2>
              <p>
                If any provision of these Terms & Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-gold mt-8 mb-4">
                13. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
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

export default TermsAndConditions;
