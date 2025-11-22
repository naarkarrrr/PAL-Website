import { PageHeader } from "@/components/shared/PageHeader";

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <h2>1. Introduction</h2>
          <p>
            Welcome to PAL Foundation. By accessing our website, you agree to be
            bound by these terms and conditions.
          </p>
          <h2>2. Use of Website</h2>
          <p>
            This website is for informational purposes and to facilitate the
            activities of PAL Foundation. Any unauthorized use of the materials
            appearing on this site may violate copyright, trademark and other
            applicable laws and could result in criminal or civil penalties.
          </p>
          <h2>3. Donations</h2>
          <p>
            All donations made through this website are voluntary and
            non-refundable. We are grateful for your support. Please ensure you
            have read our donation policies.
          </p>
          <h2>4. Content</h2>
          <p>
            The content on this site, including text, graphics, images, and
            information, is for general informational purposes only.
          </p>
          <h2>5. Limitation of Liability</h2>
          <p>
            PAL Foundation will not be liable for any damages of any kind
            arising from the use of this site.
          </p>
          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
}