import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { CallToAction } from "@/components/shared/CallToAction";

export const metadata: Metadata = {
  title: "Kindred Paws | Animal Rescue, Adoption & Welfare",
  description: "Support Kindred Paws, a non-profit animal rescue. We rescue, rehabilitate, and rehome animals in need. Adopt, volunteer, or donate today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://storage.googleapis.com/aifire.dev/PAL-assets/pal-logo-full.png" type="image/png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <CallToAction />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
