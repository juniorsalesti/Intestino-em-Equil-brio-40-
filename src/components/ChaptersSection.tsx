import React, { useState } from 'react';
import { Coffee, Utensils, Moon, Apple, Soup, GlassWater, CalendarCheck, Eye, Sparkles } from 'lucide-react';
import { Chapter } from '../types';
import { RecipePreviewModal } from './RecipePreviewModal';

export const ChaptersSection: React.FC = () => {
  const [selectedPreview, setSelectedPreview] = useState<{ chapterTitle: string; sampleName: string } | null>(null);

  const chapters: Chapter[] = [
    {
      number: 1,
      title: '20 CAFÉS DA MANHÃ',
      countText: '20 Receitas',
      description: 'Opções leves e nutritivas para despertar a digestão com suavidade e energia equilibrada.',
      sampleRecipes: ['Panqueca de Aveia & Canela', 'Ovos Mexidos Cremosos com Cúrcuma', 'Mingau Funcional de Chia & Frutas'],
      tag: 'Manhãs Leves',
    },
    {
      number: 2,
      title: '20 ALMOÇOS',
      countText: '20 Receitas',
      description: 'Pratos completos e variados com fibras, proteínas magras e combinações fáceis de digerir.',
      sampleRecipes: ['Salmão Grelhado com Ervas & Quinoa', 'Frango ao Forno com Legumes Coloridos', 'Tigela Mediterrânea de Grão-de-Bico'],
      tag: 'Refeição Principal',
    },
    {
      number: 3,
      title: '25 JANTARES',
      countText: '25 Receitas',
      description: 'Preparações pensadas para evitar a sensação de estufamento e peso ao deitar.',
      sampleRecipes: ['Omelete de Espinafre & Ricota Suave', 'Cuscuz Marroquino com Legumes Assados', 'Peixe Papillote com Azeite e Ervas'],
      tag: 'Noites Confortáveis',
    },
    {
      number: 4,
      title: '15 LANCHES RÁPIDOS',
      countText: '15 Receitas',
      description: 'Alternativas práticas para manter a saciedade entre as refeições sem recorrer a industrializados.',
      sampleRecipes: ['Mix Crocante de Sementes Tostadas', 'Dip de Homus Rápido com Palitos de Cenoura', 'Bolinhos Rústicos de Maçã e Canela'],
      tag: 'Pausas Inteligentes',
    },
    {
      number: 5,
      title: '10 SOPAS E CALDOS',
      countText: '10 Receitas',
      description: 'Caldos quentes, reconfortantes e altamente hidratantes, ricos em minerais naturais.',
      sampleRecipes: ['Creme de Abóbora com Gengibre & Sementes', 'Caldo Dourado de Cenoura com Cúrcuma', 'Sopa Rústica de Lentilhas & Vegetais'],
      tag: 'Conforto Térmico',
    },
    {
      number: 6,
      title: '10 BEBIDAS NATURAIS',
      countText: '10 Receitas',
      description: 'Águas aromatizadas e sucos funcionais simples para estimular a hidratação diária.',
      sampleRecipes: ['Água Aromatizada de Hortelã e Limão', 'Suco Verde Suave sem Complicação', 'Infusão Refrescante de Erva-Cidreira'],
      tag: 'Hidratação Ativa',
    },
    {
      number: 7,
      title: 'PLANEJAMENTO ALIMENTAR DE 21 DIAS',
      countText: 'Roteiro Completo',
      description: 'A distribuição estratégica e flexível para você experimentar as receitas sem improviso.',
      sampleRecipes: ['Semana 1: Organização e Despensa', 'Semana 2: Ampliação do Cardápio', 'Semana 3: Consolidação dos Hábitos'],
      tag: 'O Método',
    },
  ];

  const getChapterIcon = (num: number) => {
    switch (num) {
      case 1: return Coffee;
      case 2: return Utensils;
      case 3: return Moon;
      case 4: return Apple;
      case 5: return Soup;
      case 6: return GlassWater;
      case 7: return CalendarCheck;
      default: return Utensils;
    }
  };

  return (
    <section id="capitulos" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] block">
            O Conteúdo da Jornada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Os 7 Capítulos do Material
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            As receitas são o mecanismo que torna a jornada de 21 dias possível, prazerosa e sustentável.
          </p>
        </div>

        {/* Visual Strip: Real culinary flatlay */}
        <div className="mb-14 rounded-2xl overflow-hidden shadow-lg border border-white bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 h-64 sm:h-72 lg:h-80 overflow-hidden">
              <picture>
                <source srcSet="/images/pratos_receitas.webp" type="image/webp" />
                <img
                  src="/images/pratos_receitas.webp"
                  alt="Variedade de preparações e pratos naturais do eBook"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  width={700}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/healthy_dishes_recipes_1793915829137.jpg';
                  }}
                />
              </picture>
            </div>
            <div className="md:col-span-5 p-6 sm:p-8 space-y-3 bg-[#FCFBF9]">
              <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block">
                Comida de Verdade
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#16382B]">
                Pratos reais para o dia a dia de quem tem mais de 40 anos.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Ingredientes que você encontra facilmente em feiras e supermercados. Nada de itens caros, inacessíveis ou preparos complicados.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16382B]">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  Com a curadoria prática de Vicente Valença
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The 7 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => {
            const Icon = getChapterIcon(chapter.number);
            const isFullWidth = chapter.number === 7;
            
            return (
              <div
                key={chapter.number}
                className={`bg-[#FCFBF9] p-6 sm:p-7 rounded-2xl border border-[#16382B]/10 hover:border-[#C59B27]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#FCFBF9] via-[#FAF8F5] to-[#F5EFE3]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#16382B]/10 text-[#16382B] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                        Capítulo {chapter.number}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#16382B] bg-[#16382B]/5 px-2.5 py-1 rounded-md">
                      {chapter.countText}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#16382B] mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {chapter.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-200/60">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                      Exemplos no capítulo:
                    </span>
                    <ul className="space-y-1 text-xs text-neutral-700">
                      {chapter.sampleRecipes.map((recipe, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                          <span className="truncate">{recipe}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Passo a passo didático
                  </span>
                  <button
                    onClick={() =>
                      setSelectedPreview({
                        chapterTitle: `Capítulo ${chapter.number} — ${chapter.title}`,
                        sampleName: chapter.sampleRecipes[0] || 'Receita do Capítulo',
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16382B] hover:text-[#C59B27] transition-colors py-1 px-2.5 rounded-md hover:bg-[#16382B]/5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Formato</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Recipe Preview Modal */}
      {selectedPreview && (
        <RecipePreviewModal
          isOpen={true}
          onClose={() => setSelectedPreview(null)}
          chapterTitle={selectedPreview.chapterTitle}
          sampleName={selectedPreview.sampleName}
        />
      )}
    </section>
  );
};
