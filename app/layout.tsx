import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/ui/PageTransition";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Sujan | Creative Portfolio",
  description: "Senior Product Designer & Frontend Architect showcasing premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased")}>
        <Header />
        <main className="relative flex min-h-screen flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
