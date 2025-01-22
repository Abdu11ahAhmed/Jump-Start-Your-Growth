import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title:
    "Jump start your growth | We boost the growth for Startup to Fortune 500 Companies",
  description:
    "Jump start your growth | We boost the growth for Startup to Fortune 500 Companies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

