import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mag-footer footer">
      <div className="wrap mag-footer-inner">
        <div className="mag-footer-brand">
          <Image src="/logo-inverse.svg" alt="PopPulse" width={132} height={28} />
          <SocialIcons className="mag-social-row" links />
          <p>Made for the moments that everyone is talking about. Entertainment, fashion and culture coverage, updated every day.</p>
        </div>
        <div className="mag-footer-links">
          <div><strong>About PopPulse</strong><Link href="/about">About Us</Link><Link href="/contact">Contact us</Link><Link href="/authors">Newsletter</Link><Link href="/authors">Careers</Link></div>
          <div><strong>Connect</strong><Link href="/contact">Contact</Link><Link href="/privacy">Terms of Use</Link><Link href="/contact">Advertise with Us</Link><Link href="/privacy">Privacy</Link></div>
        </div>
      </div>
    </footer>
  );
}
