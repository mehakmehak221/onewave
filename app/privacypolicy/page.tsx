import { Metadata } from "next";
import Header from "@/app/components/Header";
import Wrapper from "@/app/components/ui/Wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | OneWave",
  description:
    "Learn how OneWave collects, uses, and protects your personal and financial information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      <Header />

      <main className="min-h-screen bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
          <div className="backdrop-blur-sm bg-white/2 border border-blue-500/50 rounded-xl p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <p className="text-white/70 mb-8">
              <strong>Effective Date: 01-01-2025</strong>
            </p>

            <p className="text-white/80 mb-8 leading-relaxed">
              At OneWave Fintech S.A. (in formation, Republic of Panama), your privacy is our priority. This Privacy Policy
              explains how we collect, use, protect, and share your personal and
              financial information when you use our application, website, or
              services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  1. Information We Collect
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  We may collect the following types of data when you use
                  Onewave:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      a. Personal Information
                    </h3>
                    <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Mobile number</li>
                      <li>Government-issued ID (for KYC)</li>
                      <li>Date of birth</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      b. Financial & Transaction Data
                    </h3>
                    <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                      <li>Wallet addresses</li>
                      <li>Transaction history (crypto & fiat)</li>
                      <li>Linked bank details (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      c. Device & Usage Information
                    </h3>
                    <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                      <li>Device type, model, and OS</li>
                      <li>IP address and geolocation (with permission)</li>
                      <li>App usage statistics</li>
                      <li>Browser and session data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  2. How We Use Your Data
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Create and manage your OneWave Fintech S.A. (in formation, Republic of Panama)  account</li>
                  <li>Process payments and crypto deposits/withdrawals</li>
                  <li>Perform identity verification (KYC/AML)</li>
                  <li>Enhance app functionality and user experience</li>
                  <li>Detect fraud and ensure platform security</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  We do not sell your data to third parties. However, we may
                  share information with:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>KYC/AML verification providers</li>
                  <li>Blockchain and payment service partners</li>
                  <li>Regulatory authorities (as required by law)</li>
                  <li>Internal teams for development and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  4. Security of Your Information
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Your data is protected using:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Industry-standard encryption</li>
                  <li>Secure data storage</li>
                  <li>Strict access controls</li>
                </ul>
                <p className="text-white/80 mt-4 leading-relaxed">
                  We continuously monitor and upgrade our security measures to
                  keep your information safe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  5. Your Rights and Choices
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Access the information we hold about you</li>
                  <li>Request corrections or deletions</li>
                  <li>Withdraw consent (if applicable)</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
                <p className="text-white/80 mt-4 leading-relaxed">
                  To make a request, contact:{" "}
                  <strong>privacy@onewave.app</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  OneWave Fintech S.A. (in formation, Republic of Panama) may use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Analyze app usage</li>
                  <li>Enhance user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-white/80 mt-4 leading-relaxed">
                  You can manage cookie preferences through your device or
                  browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  7. Data Retention
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We retain your information only as long as necessary:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4 mt-4">
                  <li>For providing our services</li>
                  <li>For legal, regulatory, or audit requirements</li>
                  <li>Or until your account is permanently deleted</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-white/80 leading-relaxed">
                  OneWave Fintech S.A. (in formation, Republic of Panama) is not intended for users under the age of 18. We do
                  not knowingly collect data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on the app or website. Continued use of OneWave Fintech S.A. (in formation, Republic of Panama) 
                  after updates implies your agreement to the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  10. Contact Us
                </h2>
                <p className="text-white/80 leading-relaxed">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:{" "}
                  <strong>privacy@onewave.app</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
