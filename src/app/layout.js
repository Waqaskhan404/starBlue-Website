"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from 'next/font/google';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

// export const metadata = {
//   title: "Home - StarBloom Plantation",
//   description: "Learn more about StarBloom Plantation.",
// };

export default function RootLayout({ children, pageProps }) {
  const pathName = usePathname();
  const [key, setKey] = useState(pathName);

  useEffect(() => {
    setKey(pathName);
  }, [pathName]); // Re-render when pathname changes

  console.log("Layout Path",key);
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header {...pageProps} />
        <NavBar keyProp={key} {...pageProps} />
        <div key={key}>{children}</div> {/* Forces re-render */}
        <Footer/>
      </body>
    </html>
  );
}
