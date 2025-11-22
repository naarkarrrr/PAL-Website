
import { PageHeader } from "@/components/shared/PageHeader";

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Here's how we collect, use, and protect your information."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <h2>1. Introduction</h2>
          <p>
            PAL (People for Animals) Foundation ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a donation, or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information in a variety of ways, including, but not limited to, when you:
          </p>
          <ul>
            <li><strong>Make a Donation:</strong> We collect personal details such as your name, email address, phone number, and PAN (if you wish to receive an 80G tax exemption certificate). Financial information is processed by our third-party payment gateway, Razorpay, and we do not store your credit/debit card details.</li>
            <li><strong>Fill Out Forms:</strong> When you apply to volunteer, request an ambulance, or contact us, we collect the information you provide, such as your name, contact details, location, and other relevant data to process your request.</li>
            <li><strong>Browse Our Website:</strong> We may collect non-personal information, such as your IP address, browser type, and browsing behavior, to improve our website's functionality and user experience.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li>To process and manage your donations and issue tax receipts.</li>
            <li>To respond to your inquiries and requests for services (e.g., ambulance dispatch).</li>
            <li>To manage our volunteer and membership programs.</li>
            <li>To send you updates, newsletters, and information about our campaigns and events, from which you can opt-out at any time.</li>
            <li>To improve our website, services, and outreach efforts.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in a secure environment and is accessible only by a limited number of persons who have special access rights and are required to keep the information confidential. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h2>5. Disclosure of Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties for marketing purposes. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (like our payment gateway), so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>
            You have the right to access, correct, or request the deletion of your personal information that we hold. You may also opt-out of receiving future communications from us by following the unsubscribe instructions in our emails or by contacting us directly.
          </p>
          
          <h2>7. Cookies</h2>
          <p>
            Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information on our <a href="/contact">Contact Us</a> page.
          </p>
        </div>
      </div>
    </div>
  );
}
