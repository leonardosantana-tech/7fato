// (Controle de Idioma)

"use client";

import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config"; // Certificar

export const useLocale = () => {
  const pathname = usePathname();

  // O pathname no Next.js (App Router) começa com '/', então o split gera ["", "pt", "restante"]
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  const isValid = locales.includes(currentLocale as any);

  return {
    locale: (isValid ? currentLocale : "pt") as "pt" | "en",
    pathname,
  };
};
