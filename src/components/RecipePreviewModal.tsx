import React from 'react';
import { X, Clock, Users, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';

interface RecipePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapterTitle?: string;
  sampleName?: string;
}

export const RecipePreviewModal: React.FC<RecipePreviewModalProps> = ({
  isOpen,
  onClose,
  chapterTitle = 'Exemplo do eBook',
  sampleName = 'Creme Aveludado de Abóbora com Gengibre & Sementes',
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FCFBF9] border border-[#16382B]/15 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-5 bg-[#16382B] text-white">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-widest text-[#D8AF3B] font-medium">
              Formato Padrão do eBook · {chapterTitle}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="font-serif text-2xl font-semibold mt-1 tracking-tight text-cream-100">
            {sampleName}
          </h3>
          <p className="text-xs text-cream-200/80 mt-1">
            Cada uma das 100 receitas segue rigorosamente esta estrutura didática, limpa e descomplicada.
          </p>
        </div>

        {/* Content body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-[#242E28]">
          {/* Metadata badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-[#FAF8F5] border border-[#16382B]/10 rounded-xl text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase">Tempo</span>
                <span className="font-semibold text-[#16382B]">25 minutos</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase">Rendimento</span>
                <span className="font-semibold text-[#16382B]">3 a 4 porções</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase">Dificuldade</span>
                <span className="font-semibold text-[#16382B]">Fácil e prática</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase">Momento</span>
                <span className="font-semibold text-[#16382B]">Almoço / Jantar</span>
              </div>
            </div>
          </div>

          {/* Ingredientes */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#16382B] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              Ingredientes e Quantidades
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>500g de abóbora japonesa (cabotiá) em cubos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>1 colher (chá) de gengibre fresco ralado</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>1 cebola pequena picada e 2 dentes de alho</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>2 colheres (sopa) de azeite de oliva extravirgem</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>600ml de água ou caldo caseiro de legumes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16382B] shrink-0" />
                <span>1 colher (sopa) de sementes de abóbora tostadas</span>
              </li>
            </ul>
          </div>

          {/* Modo de Preparo */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#16382B] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
              Modo de Preparo Passo a Passo
            </h4>
            <ol className="space-y-2.5 text-xs text-neutral-700 list-decimal list-inside pl-1">
              <li className="leading-relaxed">
                <strong className="text-neutral-900">Refogue os aromas:</strong> Aqueça o azeite em fogo médio e doure suavemente a cebola, o alho e o gengibre ralado até liberarem perfume.
              </li>
              <li className="leading-relaxed">
                <strong className="text-neutral-900">Cozinhe os vegetais:</strong> Adicione os cubos de abóbora e o caldo. Tampe e deixe cozinhar por cerca de 15 minutos até a abóbora amaciar por completo.
              </li>
              <li className="leading-relaxed">
                <strong className="text-neutral-900">Finalize e sirva:</strong> Bata delicadamente com um mixer ou liquidificador até atingir textura cremosa. Finalize nos pratos com as sementes tostadas por cima.
              </li>
            </ol>
          </div>

          {/* Dica do Vicente */}
          <div className="p-4 bg-[#F2F6F4] border border-[#16382B]/15 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#16382B] text-[#D8AF3B] flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                V
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16382B]">
                  Dica Prática do Vicente:
                </span>
                <p className="text-xs text-neutral-700 mt-1 italic leading-relaxed">
                  "Você pode tostar as sementes de abóbora numa frigideira seca por 2 minutinhos com uma pitada de cúrcuma e orégano. Além de dar uma crocância irresistível ao creme, você reaproveita as sementes sem desperdício."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-[#16382B] text-white rounded-lg hover:bg-[#1f4b3a] transition-colors"
          >
            Fechar Demonstração
          </button>
        </div>
      </div>
    </div>
  );
};
