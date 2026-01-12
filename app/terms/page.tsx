import { Metadata } from "next";
import Header from "@/app/components/Header";
import Wrapper from "@/app/components/ui/Wrapper";

export const metadata: Metadata = {
  title: "Terms and Conditions | OneWave",
  description:
    "Read OneWave's terms and conditions to understand your rights and responsibilities when using our platform.",
};

export default function TermsPage() {
  return (
    <Wrapper>
      <Header />

      <main className="min-h-screen bg-black text-white py-16 sm:py-20 lg:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
          <div className="backdrop-blur-sm bg-white/2 border border-blue-500/50 rounded-xl p-6 sm:p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Terms and Conditions
            </h1>

            <p className="text-white/70 mb-8">
              <strong>Effective Date: 01-01-2025</strong>
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-2">
                Pre-Incorporation Legal Notice
              </h2>
              <p className="text-white/80 leading-relaxed">
                All content is for information and preparatory purposes only, ensuring
                full compliance with global legal and corporate standards. No sale,
                offer, or contractual commitment is effective until OneWave Fintech S.A.
                ( in formation, Republic of Panama) is fully incorporated (currently in
                process) and the legal and corporate framework is completed.
              </p>
            </div>

            <p className="text-white/80 mb-8 leading-relaxed">
              Welcome to OneWave Fintech S.A. (in formation, Republic of Panama) By accessing or using our mobile application
              or services, you agree to be bound by the following Terms and
              Conditions. Please read them carefully.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-white/80 leading-relaxed">
                  By using OneWave Fintech S.A. (in formation, Republic of Panama), you confirm that you are at least 18 years
                  old and legally eligible to enter into this agreement.
                  Continued use of the platform indicates your acceptance of
                  these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  2. Services Offered
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  OneWave Fintech S.A. (in formation, Republic of Panama) allows users to:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Deposit and withdraw funds (including cryptocurrency)</li>
                  <li>Manage wallets</li>
                  <li>View transactions and balances</li>
                  <li>Access financial tools and analytics</li>
                </ul>
                <p className="text-white/80 mt-4 leading-relaxed">
                  All services are subject to change or discontinuation without
                  prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  3. User Accounts
                </h2>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account credentials.
                  </li>
                  <li>
                    You agree not to impersonate another user or provide false
                    information.
                  </li>
                  <li>
                    You must notify us immediately of any unauthorized access.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  4. Crypto Transactions
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  OneWave Fintech S.A. (in formation, Republic of Panama) facilitates crypto transactions via third-party
                  integrations and is not responsible for any delays or losses
                  caused by blockchain processing.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Crypto deposits are subject to network confirmation and
                  applicable fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  5. Fees and Charges
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Certain services may carry fees. These will be clearly
                  displayed before you confirm any transaction. We reserve the
                  right to update fees at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  6. Prohibited Activities
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Users must not:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                  <li>Use the app for illegal or fraudulent purposes</li>
                  <li>Attempt to hack, reverse-engineer, or misuse the app</li>
                  <li>
                    Engage in money laundering or terror financing via the
                    platform
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  7. Data Privacy
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We are committed to protecting your data. Please refer to our
                  Privacy Policy for details on how your information is
                  collected and used.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-white/80 leading-relaxed">
                  OneWave Fintech S.A. (in formation, Republic of Panama)  is not liable for any indirect, incidental, or
                  consequential damages arising from use of the app or loss of
                  access, funds, or data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  9. Termination
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We reserve the right to suspend or terminate your account at
                  our discretion if we suspect any misuse or violation of terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  10. Changes to Terms
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We may update these Terms from time to time. Continued use of
                  the app after changes indicates your agreement to the updated
                  Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  12. Intellectual Property & Ownership
                </h2>
                <p className="text-white/80 leading-relaxed">
                  All IP, branding, and platform materials are intended to be assigned
                  to OneWave Fintech S.A. ( in formation, Republic of Panama ) upon
                  completion of incorporation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
                  13. Contact Us
                </h2>
                <p className="text-white/80 leading-relaxed">
                  For support or queries, please reach out at:{" "}
                  <strong>support@onewave.app</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
