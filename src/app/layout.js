import { Roboto_Slab, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Common/Navbar";
import BasicInfo from "./Components/Common/BasicInfo";
import Head from "next/head";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Abdullah Al Mahfuz - Portfolio",
  description:
    "Welcome to the portfolio of Abdullah Al Mahfuz, a skilled frontend developer specializing in Next.js, React.js, TailwindCSS, JavaScript, and Bootstrap.",
  author: "Abdullah Al Mahfuz",
  keywords:
    "Abdullah Al Mahfuz, portfolio, frontend developer, Next.js, React.js, TailwindCSS, JavaScript, Bootstrap",
  viewport: "width=device-width, initial-scale=1.0",
  url: "https://your-portfolio-url.com",
  image: "https://your-portfolio-url.com/og-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content="Abdullah Al Mahfuz Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <link rel="canonical" href={metadata.url} />
      </Head>
      <body className={`${robotoSlab.className} ${poppins.className}`}>
        <div className="container flex items-start mx-auto justify-between pb-24 pt-60 gap-8 max-w-screen-xl px-4">
          <BasicInfo />
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
