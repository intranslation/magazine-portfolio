import type { Metadata } from "next";
import { Josefin_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

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
  title: "whoami",
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
    </html>
  );
}
