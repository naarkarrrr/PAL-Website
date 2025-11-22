
import { PageHeader } from "@/components/shared/PageHeader";

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Donation Refund Policy"
        subtitle="Our policy regarding refunds for donations."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <h2>Our Commitment</h2>
          <p>
            PAL Foundation is a non-profit organization registered under the Societies Registration Act, 1860. We are dedicated to animal welfare, and our work is funded almost entirely by public donations. We are deeply grateful for your support, which allows us to rescue, rehabilitate, and care for animals in need.
          </p>

          <h2>Donations are Non-Refundable</h2>
          <p>
            As your donation is a voluntary and irrevocable gift to support our charitable mission, we operate a strict <strong>no-refund policy</strong>. Once a donation is made, it is immediately put to use to cover the costs of medical treatments, food, shelter, and rescue operations for the animals under our care.
          </p>
          <p>
            Please be sure of the amount you are donating before you proceed with the transaction.
          </p>

          <h2>Processing Errors</h2>
          <p>
            We understand that errors can happen. If you believe a processing error has occurred with your donation (e.g., you were charged an incorrect amount or made a duplicate donation), please contact us immediately.
          </p>
          <p>
            To resolve such an issue, please email us within <strong>7 days</strong> of the transaction at{" "}
            <a href="mailto:palfoundation.in@gmail.com">
              palfoundation.in@gmail.com
            </a>
            . Be sure to include the following details in your email:
          </p>
          <ul>
            <li>Your full name</li>
            <li>The date of the donation</li>
            <li>The donation amount</li>
            <li>The transaction ID or a screenshot of the transaction confirmation</li>
            <li>A brief description of the error</li>
          </ul>
          <p>
            We will review your case and work with our payment processor to investigate the issue. If a genuine processing error is confirmed, we will arrange for a refund to the original mode of payment.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            For any questions about our refund policy or to report a potential error, please do not hesitate to contact us. Your trust and support are paramount to us.
          </p>
        </div>
      </div>
    </div>
  );
}
