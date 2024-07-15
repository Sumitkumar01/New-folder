import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Camping in Mussoorie | Glamping near Dehradun - EBC Mussoorie",
  description:
    "EBC Mussoorie is the best luxury resorts in mussoorie. We are offering camping in near mussorie, dehradun, rishikesh, dehradun and near Delhi. Visit our Property!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "n65gwfsc82");
            `,
          }}
        />
        {/* Google Tag Manager */}
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-55R39KSH');
        `,
          }}
        />
        {/* Kiwi SDK */}
        <Script
          id="kiwi-sdk-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,c,r,a,m){
            w['KiwiObject']=r;
            w[r]=w[r] || function () {
              (w[r].q=w[r].q||[]).push(arguments)};
            w[r].l=1*new Date();
            a=d.createElement(s);
            m=d.getElementsByTagName(s)[0];
            a.async=1;
            a.src=c;
            m.parentNode.insertBefore(a,m)
          })(window,document,'script',"https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v="+ new Date().getTime(),'kiwi');
          window.addEventListener("load",function () {
            kiwi.init('', '6Drc1F8ThlrVVOwqfo7ZJl4KsPZtnrob', {});
          });
        `,
          }}
        />

        {/* End Google Tag Manager */}
      </head>
      <body className={ebGaramond.className} suppressHydrationWarning={true} >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55R39KSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
        <Link
          href={"tel:+918595274861"}
          target="_blank"
          className="whatsapp-button inline-block fixed bottom-[25px] left-[20px] w-[50px] h-[50px] bg-[#12c665] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden"
        >
          <span className="sr-only">whats app</span>
          <FaPhone className="transform" />
        </Link>
        {/* <Link
          href={"tel:+918595274861"}
          target="_blank"
          className="whatsapp-button inline-block fixed bottom-[25px] left-[20px] w-[50px] h-[50px] bg-[#29422C] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden"
        >
          <span className="sr-only">whats app</span>
          <FaPhone className="transform" />
        </Link> */}
      </body>
    </html>
  );
}
