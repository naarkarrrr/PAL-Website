
import { PageHeader } from "@/components/shared/PageHeader";
import { AlertCircle, Contact, Mail } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Donation Refund Policy"
        subtitle="Our policy regarding refunds for donations."
      />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">

            <div className="bg-card p-8 rounded-lg border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <AlertCircle className="h-10 w-10 text-primary flex-shrink-0" />
                    <h2 className="text-2xl font-bold font-headline">Our Commitment & Policy</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    PAL Foundation is a non-profit organization registered under the Societies Registration Act, 1860. We are dedicated to animal welfare, and our work is funded almost entirely by public donations. We are deeply grateful for your support, which allows us to rescue, rehabilitate, and care for animals in need.
                </p>
                <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-4 rounded-md">
                    <p className="font-semibold">
                        As your donation is a voluntary and irrevocable gift to support our charitable mission, we operate a strict <strong className="text-destructive">no-refund policy</strong>. Once a donation is made, it is immediately put to use to cover our operational costs. Please be sure of the amount you are donating before you proceed.
                    </p>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <Contact className="h-10 w-10 text-primary flex-shrink-0" />
                    <h2 className="text-2xl font-bold font-headline">Handling Processing Errors</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                    We understand that technical errors can happen. If you believe a processing error has occurred with your donation (e.g., you were charged an incorrect amount or made a duplicate donation), please contact us immediately.
                </p>
                <p className="text-muted-foreground mb-4">
                    To resolve such an issue, please email us within <strong>7 days</strong> of the transaction. Be sure to include the following details in your email:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>Your full name</li>
                    <li>The date of the donation</li>
                    <li>The donation amount</li>
                    <li>The transaction ID or a screenshot of the transaction confirmation</li>
                    <li>A brief description of the error</li>
                </ul>
                <p className="text-muted-foreground">
                    We will review your case and work with our payment processor to investigate the issue. If a genuine processing error is confirmed, we will arrange for a refund to the original mode of payment.
                </p>
                 <div className="mt-6 border-t pt-6">
                     <p className="text-muted-foreground flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        For any questions, contact us at: <a href="mailto:palfoundation.in@gmail.com" className="text-accent font-semibold underline">palfoundation.in@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
