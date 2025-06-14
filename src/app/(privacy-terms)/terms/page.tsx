// pages/terms.tsx

import BackButton from "@/components/custom/back-comp";
import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12  text-base leading-relaxed">
        <BackButton/>
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <p className="mb-6">
        Welcome to Scanzy AI. By accessing our platform, located at
        <a href="https://scanzy.fun/" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">
          https://scanzy.fun/
        </a>, you agree to be bound by these Terms and Conditions. These terms govern your
        use of our website and services. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By registering, accessing, or using any part of Scanzy AI, you agree to comply
        with and be legally bound by these Terms and all applicable laws and regulations.
        If you do not agree with any part of these terms, you must not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Services</h2>
      <p className="mb-4">
        Scanzy AI is an AI-powered SaaS platform providing tools for AI content detection,
        plagiarism checking, and originality analysis. Users can paste or upload content,
        and receive real-time reports powered by advanced machine learning and NLP models.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. User Accounts</h2>
      <p className="mb-4">
        To use certain features, you must register using Google, GitHub, or email via Clerk authentication.
        You are responsible for maintaining the confidentiality of your account credentials.
        You agree to notify us immediately of any unauthorized use.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Usage Limitations</h2>
      <p className="mb-4">
        Scanzy AI offers free and paid plans. Free accounts are allocated 500 tokens for basic usage.
        Paid tiers offer additional features and higher limits. Misuse, abuse, or excessive scraping,
        including the use of bots or automation to bypass limits, is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, features, and software used in or on our platform is the property
        of Scanzy AI and protected by copyright, trademark, and other applicable laws.
        You may not reproduce, duplicate, copy, sell, or exploit any portion of the platform
        without express written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. User Responsibilities</h2>
      <p className="mb-4">
        You agree not to use our services for any unlawful or abusive purpose, including submitting content
        that infringes on copyrights, violates privacy, or spreads misinformation. We reserve the right to remove
        or block access to any user account violating these policies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Third-Party Services</h2>
      <p className="mb-4">
        Scanzy AI may integrate or rely on third-party APIs and services, such as plagiarism databases,
        language models, and authentication providers. We do not control or endorse these third parties,
        and your use of their services is subject to their terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to the service at any time,
        with or without notice, for conduct that violates these terms or is harmful to other users,
        us, or third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">9. Changes to Terms</h2>
      <p className="mb-4">
        We may revise these Terms and Conditions from time to time. All updates will be posted on this page.
        Continued use of the platform following any changes constitutes acceptance of those changes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">10. Limitation of Liability</h2>
      <p className="mb-4">
        Scanzy AI is provided on an "as is" and "as available" basis. We do not warrant that the services
        will be uninterrupted or error-free. To the fullest extent permitted by law, we disclaim all liability
        for any loss or damages, including data loss, inaccuracies, or system downtime.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">11. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of India.
        Any disputes arising under or in connection with these Terms shall be subject to
        the exclusive jurisdiction of the courts located in India.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">12. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms or wish to report a violation,
        please contact us at:
        <br />
        <strong>Email:</strong> kashisultan099@gmail.com
        <br />
        <strong>Phone:</strong> +92 316 9000 919
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: June 13, 2025
      </p>
    </main>
  );
}
