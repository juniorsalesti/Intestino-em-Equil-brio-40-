import React from 'react';
import { ListOrdered, ChefHat, Users2, Clock3, MessageSquareHeart, Check, Sparkles } from 'lucide-react';

export const RecipeStructure: React.FC = () => {
  const recipeBenefits = [
    {
      icon: ListOrdered,
      title: 'Ingredientes e quantidades',
      desc: 'Medidas claras e fáceis de reproduzir sem precisar de balanças de alta precisão.',
    },
    {
      icon: ChefHat,
      title: 'Modo de preparo',
      desc: 'Etapas explicadas de forma didática, sem termos técnicos complicados de gastronomia.',
    },
    {
      icon: Users2,
      title: 'Rendimento',
      desc: 'Informação exata de quantas porções cada preparo rende para você evitar sobras indesejadas.',
    },
    {
      icon: Clock3,
      title: 'Tempo aproximado de preparo',
      desc: 'Saiba com antecedência quanto tempo você vai levar na cozinha para se planejar com tranquilidade.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Dica prática do Vicente',
      desc: 'O toque de acolhimento do apresentador com sugestões de substituições e segredos de sabor.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            Padrão Editorial de Qualidade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl font-bold text-[#16382B] leading-tight text-balance">
            Muito mais do que uma lista de ingredientes.
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Cada uma das 100 receitas foi organizada para garantir que qualquer pessoa, com qualquer nível de habilidade, consiga reproduzir com segurança e prazer.
          </p>
        </div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {recipeBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFBF9] p-5 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#16382B] text-[#D8AF3B] flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#16382B] mb-2">
                    <Check className="w-4 h-4 text-[#C59B27] stroke-[3] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center gap-1 text-[11px] text-[#C59B27] font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Em todas as 100 receitas</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
