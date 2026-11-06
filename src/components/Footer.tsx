import React from 'react';
import { Sliders, Shield } from 'lucide-react';

interface FooterProps {
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfig }) => {
  return (
    <footer className="bg-[#0B1C15] text-cream-200/80 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-cream-50 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] inline-block" />
              <span>Intestino em Equilíbrio 40+</span>
            </h3>
            <p className="text-xs text-cream-200/60">
              Jornada de 21 Dias para a Saúde Digestiva · Apresentado por Vicente Valença
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream-200/70">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#dor" className="hover:text-white transition-colors">Identificação</a>
            <a href="#jornada" className="hover:text-white transition-colors">A Jornada</a>
            <a href="#conteudo" className="hover:text-white transition-colors">O Que Você Recebe</a>
            <a href="#bonus" className="hover:text-white transition-colors">4 Bônus</a>
            <a href="#planos" className="hover:text-white transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1 text-[#D8AF3B] hover:underline"
              title="Ajustar preço e link de checkout"
            >
              <Sliders className="w-3 h-3" />
              <span>Configurações</span>
            </button>
          </div>
        </div>

        {/* Legal & Medical Notice (Mandatory) */}
        <div className="p-5 bg-white/5 rounded-xl border border-white/10 text-xs text-cream-200/70 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-[#D8AF3B]">
            <Shield className="w-4 h-4" />
            <span>Aviso Legal e Educativo</span>
          </div>
          <p>
            Material educativo e culinário. Não substitui orientação individual de médico ou nutricionista. Não constitui tratamento, cura, diagnóstico ou promessa de resultados clínicos.
          </p>
          <p className="text-[11px] text-cream-200/50">
            A jornada de 21 dias visa oferecer um roteiro culinário orientativo para enriquecer a alimentação e favorecer o conforto digestivo através de receitas equilibradas. Consulte sempre seu profissional de saúde de confiança antes de realizar alterações expressivas em sua dieta.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/50 text-center sm:text-left">
          <div>
            Intestino em Equilíbrio 40+ © 2026 — Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacidade Protegida</span>
            <span>·</span>
            <span>Termos de Uso</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
