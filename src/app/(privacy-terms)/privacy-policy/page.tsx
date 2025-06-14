// app/privacy/page.tsx (or pages/privacy.tsx if using Pages Router)

import BackButton from "@/components/custom/back-comp";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <BackButton/>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> June 13, 2025
      </p>
      <p className="mb-6">
        Scanzy AI ("we", "our", or "us") is committed to protecting your
        privacy and ensuring the security of your personal information. This
        Privacy Policy explains the types of data we collect, how we use it,
        who we share it with, and your rights regarding that data when you
        access our platform at <strong>https://scanzy.ai</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Account Information:</strong> When you register or sign in using
          Google or GitHub via Clerk, we collect your name, email address, and
          profile photo.
        </li>
        <li>
          <strong>Submitted Content:</strong> Any content (text, documents) you upload
          or paste for analysis using our tools is temporarily stored for processing.
        </li>
        <li>
          <strong>Technical Information:</strong> Browser type, IP address, operating
          system, device type, and general location data may be collected for
          analytics and service optimization.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about your interactions with the
          platform including feature usage, frequency, and preferences.
        </li>
        <li>
          <strong>Support and Communication:</strong> When you contact us or submit
          feedback, we collect any relevant communication and associated metadata.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>To deliver and improve our AI content detection and plagiarism services.</li>
        <li>To personalize the user experience and remember preferences.</li>
        <li>To ensure platform stability and monitor for abuse or fraud.</li>
        <li>To comply with legal obligations and enforce our Terms of Service.</li>
        <li>To respond to your queries, offer support, and gather feedback.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-2">3. Sharing and Disclosure</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Third-Party Services:</strong> We use services such as Clerk.dev (authentication), Vercel (hosting), and analytics tools. These providers may access necessary data under strict confidentiality agreements.</li>
        <li><strong>Legal Requests:</strong> We may disclose data to comply with applicable law, regulations, or lawful requests from authorities.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, user data may be part of the transferred assets.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-2">4. Data Retention</h2>
      <p className="mb-6">
        We retain account-related data for as long as your account remains active.
        Uploaded text is stored only temporarily for the duration of analysis and
        then deleted. We may retain usage data in anonymized form for internal
        analytics and service improvement.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">5. Cookies and Tracking Technologies</h2>
      <p className="mb-6">
        Scanzy AI uses cookies and similar technologies to improve functionality,
        analyze usage, and enhance user experience. You can control cookie settings
        through your browser preferences.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">6. International Users</h2>
      <p className="mb-6">
        Our services are operated in India. If you are accessing from outside,
        please be aware that your data may be processed and stored in a location
        with different data protection laws than your jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">7. Your Rights and Choices</h2>
      <p className="mb-2">Depending on your location, you may have the following rights:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Request access to or a copy of your data</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or limit processing of your data</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p className="mb-6">
        To exercise your rights, contact us at:
        <br />📧 <strong>kashisultan099@gmail.com</strong>
        <br />📞 <strong>+91-XXXXXXXXXX</strong>
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">8. Data Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures to safeguard your data,
        including encryption, access controls, and secure infrastructure.
        However, no method of transmission is 100% secure, and we encourage you
        to use strong passwords and keep login credentials confidential.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">9. Children's Privacy</h2>
      <p className="mb-6">
        Scanzy AI is not intended for children under 13. We do not knowingly
        collect personal information from anyone under this age.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">10. Updates to This Policy</h2>
      <p className="mb-6">
        We may revise this Privacy Policy to reflect changes in our practices
        or legal requirements. When we do, we will update the effective date
        and notify users where appropriate.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">11. Contact Us</h2>
      <p>
        If you have questions about this policy or how your data is handled,
        reach out any time:
        <br />📧 <strong>kashisultan099@gmail.com</strong>
        <br />📞 <strong>+(92) 316 9000 919</strong>
      </p>
    </div>
  );
}
