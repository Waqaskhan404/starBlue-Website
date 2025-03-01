import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from 'next/font/google';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Home - StarBlue Plantation",
  description: "Learn more about StarBlue Plantation.",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header {...pageProps} />
        <NavBar {...pageProps} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
