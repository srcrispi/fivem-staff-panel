import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staff Panel | FiveM Server",
  description: "Panel de administración para el equipo staff del servidor FiveM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-200">
        {children}
      </body>
    </html>
  );
}
