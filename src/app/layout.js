// app/layout.js
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import WelcomeToast from "./components/Welcome/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Klinik Kartika | Layanan Kesehatan Profesional",
  description:
    "Klinik kesehatan profesional yang menyediakan layanan medis berkualitas dengan tenaga medis berpengalaman.",
  keywords: [
    "klinik",
    "klinik kesehatan",
    "layanan kesehatan",
    "dokter profesional",
    "klinik kartika",
    "periksa kesehatan",
    "pengobatan",
    "dokter umum",
    "tenaga medis berpengalaman",
  ],
  authors: [{ name: "Klinik Kartika", url: "https://kk-kartika.vercel.app" }],
  creator: "Klinik Kartika",
  openGraph: {
    title: "Klinik Kartika | Layanan Kesehatan Profesional",
    description:
      "Dapatkan layanan medis berkualitas dari Klinik Kartika dengan tenaga medis profesional dan fasilitas terbaik.",
    url: "https://kk-kartika.vercel.app",
    siteName: "Klinik Kartika",
    images: [
      {
        url: "/banner-og.png", // Pastikan gambar ini tersedia di public folder
        width: 1200,
        height: 630,
        alt: "Klinik Kartika - Layanan Medis Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Kartika | Layanan Kesehatan Profesional",
    description:
      "Klinik Kartika menyediakan layanan kesehatan terpercaya dengan tim medis berpengalaman.",
    images: ["/logo.png"],
    creator: "@klinikkartika",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body className={inter.className}>
        <Navbar />
        <WelcomeToast />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
