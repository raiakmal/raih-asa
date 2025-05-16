import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Raih Asa",
  description:
    "Portal informasi beasiswa untuk pelajar dan mahasiswa Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tidio Chatbot */}
        <script src="//code.tidio.co/rei9hjzmcaidt8diup9ywz311dq5murk.js" async></script>
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
