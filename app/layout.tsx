import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

import { LiquidEtherBackground } from "@/components/liquid-ether-background"
import "./globals.css"

const cubaoNarrow = localFont({
  src: "../fonts/Cubao_Free_Narrow.otf",
  variable: "--font-cubao-narrow",
  display: "swap",
})

const cubaoRegular = localFont({
  src: "../fonts/Cubao_Free_Regular.otf",
  variable: "--font-cubao-regular",
  display: "swap",
})

const cubaoWide = localFont({
  src: "../fonts/Cubao_Free_Wide.otf",
  variable: "--font-cubao-wide",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hamathopc.in'),
  title: "hamath - Digital Development & Marketing Solutions | Leading Web & App Development",
  description:
    "hamath provides cutting-edge website development, mobile app development, and digital marketing solutions. Transform your business with our innovative digital products and strategic marketing services.",
  keywords:
    "website development, mobile app development, digital marketing, web applications, branding solutions, UI/UX design, SEO optimization, digital transformation, web development services, app development company",
  authors: [{ name: "hamath" }],
  creator: "hamath",
  publisher: "hamath",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamathopc.in",
    siteName: "hamath",
    title: "Digital Development & Marketing Solutions | hamath",
    description:
      "Leading provider of website development, mobile app development, and digital marketing solutions. Founded by Hameedullah Shaik in Vijayawada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "hamath - Digital Development & Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Development & Marketing Solutions | hamath",
    description:
      "Transform your business with cutting-edge website development, mobile app development, and digital marketing solutions.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hamathopc.in",
  },
  generator: "hamath",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "hamath",
              description:
                "Leading provider of website development, mobile app development, and digital marketing solutions",
              url: "https://hamathopc.in",
              logo: "https://hamathopc.in/logo.png",
              founder: {
                "@type": "Person",
                name: "Hameedullah Shaik",
              },
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vijayawada",
                addressCountry: "IN",
              },
              sameAs: ["https://linkedin.com/company/hamath-opc", "https://twitter.com/hamathopc"],
              services: [
                "Website Development",
                "Mobile App Development",
                "Web Application Development",
                "Digital Marketing",
                "Brand Identity Design",
                "UI/UX Design",
                "SEO Optimization",
                "E-commerce Solutions",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cubaoNarrow.variable} ${cubaoRegular.variable} ${cubaoWide.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LiquidEtherBackground />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
