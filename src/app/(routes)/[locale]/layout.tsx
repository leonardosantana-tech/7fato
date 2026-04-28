import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Player from "@/components/player/Player";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return {
    alternates: {
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
    metadataBase: new URL("https://seusite.com"),
    title:
      locale === "en" ? "7FATO | Music Production" : "7FATO | Produção Musical",
    description:
      locale === "en"
        ? "Recording, mixing and mastering studio"
        : "Estúdio de gravação, mixagem e masterização",
  };
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* 🧭 HEADER */}
      <Header />

      {/* 🧱 CONTEÚDO */}
      <main className="flex-1 pt-20 pb-28">{children}</main>

      {/* 🎧 PLAYER */}
      <Player />
    </>
  );
}

// // Header, o Player e Footer.

// import { ReactNode } from "react";
// import Header from "@/components/layout/Header";
// import Player from "@/components/player/Player";

// // 🌍 SEO internacional (padrão Next.js)
// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }) {
//   return {
//     alternates: {
//       languages: {
//         "pt-BR": "/pt",
//         "en-US": "/en",
//       },
//     },
//   };
// }

// export default function LocaleLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: { locale: string };
// }) {
//   return (
//     <>
//       {/* 🧭 HEADER */}
//       <Header />

//       {/* 🧱 CONTEÚDO */}
//       <main className="flex-1 pt-20 pb-28">{children}</main>

//       {/* 🎧 PLAYER */}
//       <Player />
//     </>
//   );
// }
