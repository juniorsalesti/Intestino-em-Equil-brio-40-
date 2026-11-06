import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como recebo o material?',
      answer:
        'Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso e os links diretos para download de todos os arquivos digitais (eBook principal e os 4 bônus exclusivos). O acesso é liberado em minutos no Pix ou cartão de crédito.',
    },
    {
      question: 'O produto funciona pelo celular?',
      answer:
        'Sim, perfeitamente! Os materiais foram diagramados em formato PDF de alta resolução com tipografia confortável para leitura em smartphones, tablets, notebooks e computadores. Você também pode imprimir se preferir ter o material físico na cozinha.',
    },
    {
      question: 'Preciso seguir o planejamento exatamente?',
      answer:
        'Não. O planejamento de 21 dias funciona como um roteiro flexível para eliminar a dúvida diária sobre o que comer. Você pode trocar a ordem dos dias, repetir receitas que mais gostou e adaptar o cronograma à dinâmica da sua semana.',
    },
    {
      question: 'O plano é uma dieta restritiva?',
      answer:
        'Não. A proposta do Intestino em Equilíbrio 40+ é focada em variedade e organização, não em corte radical de calorias ou passar fome. O objetivo é enriquecer o seu prato com ingredientes naturais que favoreçam o conforto digestivo.',
    },
    {
      question: 'Preciso comprar ingredientes especiais?',
      answer:
        'Não. Todas as 100 receitas utilizam ingredientes comuns de feiras livres e supermercados habituais: legumes da estação, folhas verdes, tubérculos, grãos acessíveis, azeite, ervas aromáticas e proteínas do dia a dia.',
    },
    {
      question: 'Posso adaptar as receitas?',
      answer:
        'Sim! Cada receita inclui a "Dica Prática do Vicente", na qual ele sugere opções de substituição de ingredientes para você aproveitar o que já tem na despensa e respeitar suas preferências pessoais.',
    },
    {
      question: 'O material substitui acompanhamento nutricional?',
      answer:
        'Não. O material é exclusivamente educativo e culinário. Ele oferece ideias práticas de refeições e organização do cardápio, mas não substitui consultas individuais com médicos, nutricionistas ou tratamentos clínicos específicos.',
    },
    {
      question: 'Os quatro bônus estão incluídos?',
      answer:
        'Sim! Ao se inscrever nesta página, você recebe o pacote completo com o eBook principal de 100 receitas, o planejamento de 21 dias e todos os 4 bônus (Diário dos 21 Dias, Lista de Mercado Inteligente, Guia dos Chás e Infusões e Manhãs Leves) sem qualquer custo extra.',
    },
    {
      question: 'Posso utilizar o material mesmo tendo mais de 60 anos?',
      answer:
        'Com certeza! O projeto foi pensado especialmente para homens e mulheres a partir dos 40 anos, sendo excelente para quem tem 50, 60, 70 anos ou mais. As receitas são suaves, fáceis de mastigar, digerir e preparar no cotidiano.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respostas Claras</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16382B] leading-tight text-balance">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B27] mx-auto mt-2" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
            Tire suas dúvidas sobre o funcionamento, formato e entrega da jornada de 21 dias.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FCFBF9] rounded-2xl border border-[#16382B]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#16382B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#16382B]/5 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#16382B] text-[#D8AF3B]' : 'text-[#16382B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in-50 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
