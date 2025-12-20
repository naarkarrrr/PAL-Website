import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { CallToAction } from "@/components/shared/CallToAction";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pal Foundation | Animal Rescue, Adoption & Welfare",
  description: "Support Pal Foundation, a non-profit animal rescue. We rescue, rehabilitate, and rehome animals in need. Adopt, volunteer, or donate today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="https://storage.googleapis.com/aifire.dev/PAL-assets/pal-logo-full.png" type="image/png" sizes="any" />
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
