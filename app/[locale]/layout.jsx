import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Hanken_Grotesk } from "next/font/google";
import "../globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Eastel 5G Malaysia – Fastest Prepaid 5G Plan & Free International Roaming",
  description:
    "Experience ultra-fast 5G with Eastel, Malaysia's first prepaid with free international roaming. Join the Eastelpreneur program for up to 24% incentives. Your business, your pace.",
  keywords: [
    "Eastel 5G",
    "Malaysia 5G Prepaid",
    "Free International Roaming",
    "Eastelpreneur",
    "Business 5G Malaysia",
  ],
  openGraph: {
    title: "Eastel 5G Malaysia – Fastest Prepaid 5G Plan",
    description:
      "Ultra-fast 5G, Free International Roaming, and Entrepreneurial Rewards.",
    url: "https://eastel.com.my",
    siteName: "Eastel 5G",
    locale: "en_MY",
    type: "website",
  },
};

export function generateStaticParams() {
  // static export requires us to enumerate all locale routes ahead of time
  return [
    { locale: "en" },
    { locale: "ms" },
    { locale: "zh" },
  ];
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${hanken.variable} antialiased space-bg`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
