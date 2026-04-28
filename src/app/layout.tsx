import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "7FATO | Produção Musical",
  description: "Estúdio de gravação, mixagem e masterização em São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt" // fallback
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-white min-h-screen">{children}</body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Player from "@/components/player/Player";
// import Header from "@/components/layout/Header";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "7FATO | Produção Musical",
//   description: "Estúdio de gravação, mixagem e masterização em São Paulo.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="pt"
//       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//     >
//       <body className="bg-background text-white min-h-screen flex flex-col">
//         {/* 🧭 HEADER FIXO */}
//         <Header />

//         {/* 🧱 CONTEÚDO PRINCIPAL
//             pt-20: Espaço para o Header (topo)
//             pb-28: Espaço para o Player (base) + margem de segurança
//         */}
//         <main className="flex-1 pt-20 pb-28">{children}</main>

//         {/* 🎧 PLAYER GLOBAL */}
//         <Player />
//       </body>
//     </html>
//   );
// }
