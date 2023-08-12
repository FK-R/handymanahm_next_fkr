import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Mulish } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
  title: 'Handyman AHM',
  description: 'Best Handyman Home Service in Singapore',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
