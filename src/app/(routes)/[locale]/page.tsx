import { getDictionary } from "@/i18n";
import { Locale } from "@/i18n/config";

export default function Home({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{dict.home.hero.title}</h1>
      <p className="text-gray-400">{dict.home.hero.subtitle}</p>
    </main>
  );
}
