import { PageHeader } from "@/components/shared/PageHeader";

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Refund Policy"
        subtitle="Our policy regarding refunds for donations."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <h2>Donations</h2>
          <p>
            As a non-profit organization, PAL Foundation relies on your generous
            contributions to continue our work for animal welfare. All
            donations made to PAL Foundation are final and non-refundable.
          </p>
          <h2>Processing Errors</h2>
          <p>
            In the case of a processing error, such as a duplicate donation,
            please contact us immediately. We will work with our payment
            processor to resolve the issue. Please provide your transaction
            details when you contact us.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our refund policy or believe there
            has been an error with your donation, please contact us at{" "}
            <a href="mailto:palfoundation.in@gmail.com">
              palfoundation.in@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}