"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header() {
  const params = useParams();
  // Se params.locale não existir, usamos 'pt' como padrão para evitar o 'undefined'
  const locale = params?.locale || "pt";

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={`/${locale}`}
          className="font-black text-xl tracking-tighter italic"
        >
          7FATO
        </Link>

        <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {/* Usando o locale de forma segura nos links */}
          <Link
            href={`/${locale}`}
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href={`/${locale}/beats`}
            className="hover:text-white transition-colors"
          >
            Beats
          </Link>
          <Link
            href={`/${locale}/servicos`}
            className="hover:text-white transition-colors"
          >
            Serviços
          </Link>
        </nav>

        <div className="hidden md:block">
          <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest">
            Studio Selection
          </span>
        </div>
      </div>
    </header>
  );
}
