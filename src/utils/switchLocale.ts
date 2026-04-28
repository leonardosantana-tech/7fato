// TROCA DE IDIOMA

export function switchLocale(pathname: string, newLocale: string) {
  if (!pathname) return `/${newLocale}`;

  const segments = pathname.split("/");

  // Substitui o segmento de idioma (índice 1 no split do Next.js)
  segments[1] = newLocale;

  return segments.join("/");
}
