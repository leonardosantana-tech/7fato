"use client";

import { X, Copy } from "lucide-react";

type Props = {
  beatName: string;
  onClose: () => void;
};

export default function BuyModal({ beatName, onClose }: Props) {
  const message = `Salve 7FATO! Tenho interesse no beat "${beatName}" que vi no site. Como funciona a licença?`;

  const handleAction = async () => {
    await navigator.clipboard.writeText(message);
    // Link direto para o perfil do estúdio
    window.open("https://www.instagram.com/7fato", "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
            Adquirir Beat
          </h2>
          <p className="text-gray-400 text-sm">
            O link abrirá o Instagram e copiará a mensagem abaixo.
          </p>
        </div>

        <div className="bg-black/40 border border-white/5 p-4 rounded-lg mb-6 text-sm text-gray-300 font-mono italic">
          "{message}"
        </div>

        <div className="space-y-3">
          <button
            onClick={handleAction}
            className="w-full bg-white text-black font-black uppercase py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
          >
            <Copy size={18} /> Copiar e Abrir Instagram
          </button>

          <button
            onClick={onClose}
            className="w-full text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-gray-400 py-2 transition-colors"
          >
            Voltar ao catálogo
          </button>
        </div>
      </div>
    </div>
  );
}
