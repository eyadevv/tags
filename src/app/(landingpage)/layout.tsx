import "@/style/global.css";
import { Metadata } from "next";
import Footer from "@/src/components/Footer/Footer";
export const metadata: Metadata = {
  title: "TAGS",
  description: "Payment Tags Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
