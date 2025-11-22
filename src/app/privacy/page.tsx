import { PageHeader } from "@/components/shared/PageHeader";

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address,
            and phone number when you fill out forms on our site, make a
            donation, or volunteer.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to process your requests, such as
            donations or volunteer applications, and to communicate with you
            about our activities and events. We do not sell or share your
            personal information with third parties for marketing purposes.
          </p>
          <h2>3. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure.
          </p>
          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services for payment processing. These
            services have their own privacy policies, and we encourage you to
            review them.
          </p>
          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. Please contact us to make such a request.
          </p>
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>
        </div>
      </div>
    </div>
  );
}