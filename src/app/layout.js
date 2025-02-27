// Third file: app/layout.js (modified)
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
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <WelcomeToast />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
