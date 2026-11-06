import React from 'react';
import { UserCheck, Sparkles, ChefHat, ShoppingCart, Clock, HeartPulse, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onCtaClick: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onCtaClick }) => {
  const audiencePoints = [
    {
      icon: HeartPulse,
      title: 'Têm mais de 40 anos e querem variar as refeições',
      desc: 'Para homens e mulheres que reconhecem a importância de uma alimentação diversificada e reconfortante nessa fase da vida.',
    },
    {
      icon: ChefHat,
      title: 'Gostam de cozinhar, mas precisam de novas ideias',
      desc: 'Para quem tem prazer em preparar a própria comida, mas sente que o repertório de pratos e temperos ficou limitado com o tempo.',
    },
    {
      icon: ShoppingCart,
      title: 'Querem organizar melhor as compras e o cardápio',
      desc: 'Para quem deseja ir à feira ou supermercado com foco, comprando o que realmente vai usar e evitando desperdício.',
    },
    {
      icon: Clock,
      title: 'Procuram receitas práticas para o cotidiano',
      desc: 'Para quem não tem horas livres para ficar na cozinha e busca opções rápidas, que cabem nos dias mais corridos da semana.',
    },
    {
      icon: Sparkles,
      title: 'Desejam construir hábitos alimentares mais equilibrados',
      desc: 'Para quem quer cuidar da saúde alimentar de maneira gradual, sustentável e leve, sem promessas milagrosas.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Identificação Real</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-[#16382B] leading-tight text-balance">
            Este material foi pensado para quem deseja cuidar melhor da alimentação.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Se você se identifica com uma ou mais dessas situações, o <strong className="text-[#16382B]">Intestino em Equilíbrio 40+</strong> foi elaborado pensando na sua rotina:
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiencePoints.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === 4;
            return (
              <div
                key={idx}
                className={`bg-[#FCFBF9] p-6 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#16382B]/10 text-[#16382B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#16382B] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-[#C59B27]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Feito sob medida para você</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#16382B] to-[#1E4D3B] text-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
              Pronto para transformar sua rotina na cozinha?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80">
              Acesso imediato a todas as 100 receitas e aos 4 bônus exclusivos.
            </p>
          </div>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C59B27] hover:bg-[#d8af3b] text-[#16382B] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-98 whitespace-nowrap"
          >
            <span>Quero Começar Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
