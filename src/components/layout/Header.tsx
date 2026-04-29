"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/hooks/useLocale";
import { switchLocale } from "@/utils/switchLocale";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";
import { useRouter } from "next/navigation";
import { Search, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const { locale, pathname } = useLocale();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔍 busca com debounce
  const { setQuery, results } = useGlobalSearch();
  const [input, setInput] = useState("");

  // 📦 ref para detectar clique fora
  const searchRef = useRef<HTMLDivElement>(null);

  // 🎯 scroll behavior
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 travar scroll no mobile menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // ⏱ debounce da busca
  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(input);
    }, 300);

    return () => clearTimeout(timeout);
  }, [input, setQuery]);

  // 🖱 fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setInput("");
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setQuery]);

  const handleLocaleChange = (newLocale: string) => {
    const newPath = switchLocale(pathname, newLocale);
    router.push(newPath);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="font-black text-2xl tracking-tighter italic hover:opacity-80 transition-opacity"
        >
          7FATO
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] items-center text-white/60">
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

          <Link
            href={`/${locale}/portfolio`}
            className="hover:text-white transition-colors"
          >
            Portfólio
          </Link>

          <Link
            href={`/${locale}/sobre`}
            className="hover:text-white transition-colors"
          >
            Sobre
          </Link>

          {/* 🌍 LANGUAGE */}
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Globe size={12} className="text-white/40" />

            <select
              value={locale}
              onChange={(e) => handleLocaleChange(e.target.value)}
              className="bg-transparent text-[10px] focus:outline-none cursor-pointer uppercase"
            >
              <option value="pt" className="bg-black text-white">
                PT
              </option>
              <option value="en" className="bg-black text-white">
                EN
              </option>
            </select>
          </div>
        </nav>

        {/* 🔍 SEARCH + MOBILE */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div ref={searchRef} className="hidden md:block relative">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Buscar Beats..."
                className="bg-white/5 border border-white/10 pl-9 pr-4 py-2 rounded-full text-xs focus:outline-none focus:border-white/30 w-48 transition-all focus:w-64"
              />
            </div>

            {/* RESULTS */}
            {results.length > 0 && (
              <div className="absolute top-full right-0 w-64 bg-neutral-900 border border-white/10 mt-3 rounded-xl shadow-2xl overflow-hidden">
                {results.map((beat) => (
                  <div
                    key={beat.id}
                    onClick={() => {
                      router.push(`/${locale}/beats`);
                      setInput("");
                      setQuery("");
                    }}
                    className="p-4 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 flex flex-col"
                  >
                    <span className="text-sm font-bold">{beat.title}</span>
                    <span className="text-[10px] text-white/40 uppercase">
                      {beat.genre}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Abrir menu"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/5 min-h-[100dvh]">
          <nav className="flex flex-col p-8 gap-6 text-2xl font-black italic uppercase">
            <Link href={`/${locale}/beats`} onClick={() => setMenuOpen(false)}>
              Beats
            </Link>

            <Link
              href={`/${locale}/servicos`}
              onClick={() => setMenuOpen(false)}
            >
              Serviços
            </Link>

            <Link
              href={`/${locale}/portfolio`}
              onClick={() => setMenuOpen(false)}
            >
              Portfólio
            </Link>

            <Link href={`/${locale}/sobre`} onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>

            <div className="h-[1px] bg-white/10 my-4" />

            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest text-white/40">
                Idioma / Language
              </span>

              <div className="flex gap-4">
                <button
                  onClick={() => handleLocaleChange("pt")}
                  className={`text-sm ${
                    locale === "pt" ? "text-white underline" : "text-white/40"
                  }`}
                >
                  Português
                </button>

                <button
                  onClick={() => handleLocaleChange("en")}
                  className={`text-sm ${
                    locale === "en" ? "text-white underline" : "text-white/40"
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useLocale } from "@/hooks/useLocale";
// import { switchLocale } from "@/utils/switchLocale";
// import { useGlobalSearch } from "@/hooks/useGlobalSearch";
// import { useRouter } from "next/navigation";
// import { Search, Globe, Menu, X } from "lucide-react";

// export default function Header() {
//   const { locale, pathname } = useLocale();
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { query, setQuery, results } = useGlobalSearch();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLocaleChange = (newLocale: string) => {
//     const newPath = switchLocale(pathname, newLocale);
//     router.push(newPath);
//     setMenuOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           href={`/${locale}`}
//           className="font-black text-2xl tracking-tighter italic hover:opacity-80 transition-opacity"
//         >
//           7FATO
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] items-center text-white/60">
//           <Link
//             href={`/${locale}/beats`}
//             className="hover:text-white transition-colors"
//           >
//             Beats
//           </Link>
//           <Link
//             href={`/${locale}/servicos`}
//             className="hover:text-white transition-colors"
//           >
//             Serviços
//           </Link>
//           <Link
//             href={`/${locale}/portfolio`}
//             className="hover:text-white transition-colors"
//           >
//             Portfólio
//           </Link>

//           {/* LANGUAGE SELECTOR */}
//           <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
//             <Globe size={12} className="text-white/40" />
//             <select
//               value={locale}
//               onChange={(e) => handleLocaleChange(e.target.value)}
//               className="bg-transparent text-[10px] focus:outline-none cursor-pointer uppercase"
//             >
//               <option value="pt" className="bg-black text-white">
//                 PT
//               </option>
//               <option value="en" className="bg-black text-white">
//                 EN
//               </option>
//             </select>
//           </div>
//         </nav>

//         {/* SEARCH & MOBILE ACTIONS */}
//         <div className="flex items-center gap-4">
//           <div className="hidden md:block relative">
//             <div className="relative">
//               <Search
//                 size={14}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
//               />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Buscar Beats..."
//                 className="bg-white/5 border border-white/10 pl-9 pr-4 py-2 rounded-full text-xs focus:outline-none focus:border-white/30 w-48 transition-all focus:w-64"
//               />
//             </div>

//             {/* SEARCH RESULTS DROPDOWN */}
//             {results.length > 0 && (
//               <div className="absolute top-full right-0 w-64 bg-neutral-900 border border-white/10 mt-3 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
//                 {results.map((beat) => (
//                   <div
//                     key={beat.id}
//                     onClick={() => {
//                       router.push(`/${locale}/beats`);
//                       setQuery("");
//                     }}
//                     className="p-4 hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 flex flex-col"
//                   >
//                     <span className="text-sm font-bold">{beat.title}</span>
//                     <span className="text-[10px] text-white/40 uppercase">
//                       {beat.genre}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU DRAWER */}
//       {menuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/5 h-screen animate-in slide-in-from-right">
//           <nav className="flex flex-col p-8 gap-6 text-2xl font-black italic uppercase italic">
//             <Link href={`/${locale}/beats`} onClick={() => setMenuOpen(false)}>
//               Beats
//             </Link>
//             <Link
//               href={`/${locale}/servicos`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Serviços
//             </Link>
//             <Link
//               href={`/${locale}/portfolio`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Portfólio
//             </Link>

//             <div className="h-[1px] bg-white/10 my-4" />

//             <div className="flex flex-col gap-4">
//               <span className="text-xs font-bold tracking-widest text-white/40">
//                 Idioma / Language
//               </span>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => handleLocaleChange("pt")}
//                   className={`text-sm ${locale === "pt" ? "text-white underline" : "text-white/40"}`}
//                 >
//                   Português
//                 </button>
//                 <button
//                   onClick={() => handleLocaleChange("en")}
//                   className={`text-sm ${locale === "en" ? "text-white underline" : "text-white/40"}`}
//                 >
//                   English
//                 </button>
//               </div>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
