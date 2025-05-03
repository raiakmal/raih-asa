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
        {/* Inject Zoho SalesIQ Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho = window.$zoho || {};
              $zoho.salesiq = $zoho.salesiq || { ready: function () {} };
            `,
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq4d2c0069254d883a29c875ed6bb7ab556f1a12ed48b4dc8e45f95004f96236c1"
          defer
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
