import type { Metadata } from "next";
import { Josefin_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const geistSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const geistMono = Yeseva_One({
  variable: "--font-yeseva-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senior Software Engineer for hiring",
  description: "Portfolio by Henrique Albuquerque",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        // ${crampsRegular.className}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
      <GoogleTagManager gtmId="GTM-W7JTHZFB" />
      <GoogleAnalytics gaId="G-YF5G81FEBZ" />
    </html>
  );
}
