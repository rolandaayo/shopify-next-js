import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from '@/context/CartContext'
import { SearchProvider } from '@/context/SearchContext'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Shopify | Next.js",
  description: "This is an ecommerce website built using next.js & tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
