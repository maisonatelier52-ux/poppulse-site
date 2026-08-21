import "./globals.css";
import { SubscribeProvider } from "@/lib/SubscribeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribePopup from "@/components/SubscribePopup";

export const metadata = {
  title: "PopPulse — Technology, Business, Politics, Sports, World, Finance & Entertainment",
  description:
    "PopPulse is a digital magazine covering technology, business, politics, sports, world news, finance and entertainment.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SubscribeProvider>
          <Header />
          {children}
          <Footer />
          <SubscribePopup />
        </SubscribeProvider>
      </body>
    </html>
  );
}
