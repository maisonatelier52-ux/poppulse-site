import Link from "next/link";

export default function NewsletterBox() {
  return (
    <div className="mag-newsletter">
      <h3>How to read PopPulse</h3>
      <p>
        Start with the explanation, follow the source links and use the limitations to
        decide what the evidence can support.
      </p>
      <Link href="/about#standards">Read our sourcing policy</Link>
    </div>
  );
}
