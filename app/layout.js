import "./globals.css";

export const metadata = {
  title: "ITZ FIZZ // Kinetic Hypercar Scroll Experience",
  description:
    "A premier scroll-driven hero animation engineered with Next.js App Router, Tailwind CSS, GSAP ScrollTrigger, and Lenis.",
  keywords: ["GSAP", "ScrollTrigger", "Next.js", "Motion Design", "Interactive", "Lenis"],
  authors: [{ name: "Senior Frontend Engineer" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#08090b] text-white selection:bg-[#00ff87] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
