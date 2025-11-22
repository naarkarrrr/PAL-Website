
import { PageHeader } from "@/components/shared/PageHeader";

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: "Welcome to the PAL (People for Animals) Foundation website. By accessing or using our website, making a donation, or utilizing any of our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website or services.",
  },
  {
    title: "2. Use of Website and Content",
    content: "All content on this website, including text, graphics, logos, images, and information, is the property of PAL Foundation or its content suppliers and is protected by intellectual property laws. The content is provided for general informational purposes only. You may view, download, and print content for your personal, non-commercial use, provided that you do not modify the material or remove any copyright or other proprietary notices.",
  },
  {
    title: "3. Donations and Financial Transactions",
    list: [
      "All donations made to PAL Foundation are voluntary and are considered final and non-refundable, as detailed in our Refund Policy.",
      "We use a secure third-party payment gateway (Razorpay) to process donations. PAL Foundation is not responsible for any issues arising from the use of the payment gateway.",
      "For donations eligible for tax exemption under Section 80G of the Income Tax Act, a receipt will be issued to the email address provided. It is the donor's responsibility to ensure the accuracy of the information provided for the receipt.",
    ],
  },
  {
    title: "4. User Conduct and Responsibilities",
    content: "You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the website. You agree not to post or transmit any material that is defamatory, obscene, fraudulent, or infringes on the rights of others. When submitting forms (e.g., volunteer, ambulance request), you agree to provide information that is accurate and truthful to the best of your knowledge.",
  },
  {
    title: "5. Disclaimers and Limitation of Liability",
    content: "The information and services on this website are provided 'as is' without any warranties, express or implied. PAL Foundation does not warrant that the website will be error-free or uninterrupted. While we strive to provide accurate and timely information, we do not guarantee its completeness or accuracy. PAL Foundation, its trustees, employees, or volunteers will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.",
  },
  {
    title: "6. Third-Party Links",
    content: "Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these external sites and are not responsible for their content or privacy practices.",
  },
  {
    title: "7. Governing Law and Jurisdiction",
    content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
  },
  {
    title: "8. Changes to Terms",
    content: "PAL Foundation reserves the right to modify these Terms and Conditions at any time. We will notify you of any significant changes by posting the new policy on this page. Your continued use of the website after such changes constitutes your acceptance of the new terms.",
  }
];


export default function TermsPage() {
  return (
    <div>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully before using our website or services."
      />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
            {terms.map((term, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                    <h2 className="text-xl font-bold font-headline text-primary mb-3">{term.title}</h2>
                    {term.content && <p className="text-muted-foreground">{term.content}</p>}
                    {term.list && (
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            {term.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
