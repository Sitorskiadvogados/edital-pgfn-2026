/* eslint-disable */
/* =============================================================
   Conteúdo da landing — Edital PGFN 6/2026
   Dados técnicos fixos (não inventar) + copy em dois tons.
   ============================================================= */

// ---- Dados técnicos do edital (imutáveis) --------------------
const EDITAL = {
  numero: 'Edital PGFN nº 6/2026',
  publicado: '01/06/2026',
  prazo: '30/09/2026',
  prazoHora: '19h',
  portal: 'portal Regularize',
  tetoDebito: 'R$ 45 milhões',
  descMax: '65%',
  descMaxPF: '70%',
  descAcessorios: '100%',
  parcelas: '133',
  inscritosGeral: '03/03/2026',
  inscritosPequeno: '01/06/2025',
};

// ---- Números (linguagem condicional obrigatória) ------------
const NUMEROS = [
  { cond: 'Até', val: '65', unit: '%', lbl: 'de desconto sobre o valor total do débito (até 70% para PF, MEI, ME, EPP e empresas em recuperação judicial).' },
  { cond: 'Até', val: '100', unit: '%', lbl: 'de redução sobre juros, multas e encargos legais, conforme a modalidade aplicável.' },
  { cond: 'Até', val: '133', unit: 'meses', lbl: 'de prazo para o pagamento parcelado do saldo negociado.' },
  { cond: 'Até', val: '45', unit: 'mi', lbl: 'de débito inscrito em dívida ativa da União por contribuinte podem ser elegíveis.' },
];

// ---- Modalidades --------------------------------------------
const MODALIDADES = [
  { ti: 'Capacidade de pagamento', bd: 'Modalidade baseada na CAPAG do contribuinte (classificação A, B, C ou D). A faixa de desconto possível varia conforme a capacidade de pagamento aferida pela PGFN.' },
  { ti: 'Transação de pequeno valor', bd: 'Voltada a débitos de menor expressão econômica, com regras próprias de elegibilidade e condições simplificadas de adesão.' },
  { ti: 'Difícil ou onerosa recuperação', bd: 'Aplicável a débitos classificados como de difícil recuperação ou irrecuperáveis, em que a transação pode contemplar os maiores percentuais de redução.' },
];

// ---- Elegibilidade ------------------------------------------
const ELEGIBILIDADE = [
  { b: 'Débitos inscritos até 03/03/2026', t: ' em dívida ativa da União são elegíveis pela regra geral do edital.' },
  { b: 'Pequeno valor: inscritos até 01/06/2025', t: ', conforme a regra específica dessa modalidade.' },
  { b: 'Pessoas físicas e jurídicas', t: ' com débito de até R$ 45 milhões podem aderir.' },
  { b: 'Adesão dentro do prazo', t: ' do edital, com acompanhamento de cada etapa.' },
];

// ---- Para quem ----------------------------------------------
const PUBLICO = [
  { tag: 'Pessoa física', ti: 'PF, MEI, ME e EPP', bd: 'Pessoas físicas e os enquadramentos de pequeno porte podem acessar a faixa ampliada de desconto, de até 70% sobre o valor total.' },
  { tag: 'Pessoa jurídica', ti: 'Empresas e sociedades', bd: 'Empresas com débito inscrito em dívida ativa — inclusive em recuperação judicial — podem negociar conforme a capacidade de pagamento aferida.' },
];

// ---- Passos -------------------------------------------------
const PASSOS = [
  { n: '01', ti: 'Levantamento dos débitos', bd: 'Identificação das inscrições em dívida ativa, das datas de inscrição e do enquadramento possível dentro do edital.' },
  { n: '02', ti: 'Análise de elegibilidade', bd: 'Verificação da modalidade aplicável e das condições que podem incidir sobre o caso concreto, sempre de forma individualizada.' },
  { n: '03', ti: 'Adesão à transação', bd: 'Formalização da adesão à transação, dentro do prazo, com acompanhamento de cada etapa do processo.' },
];

// ---- Copy nos dois tons -------------------------------------
const COPY = {
  // -------- TOM TÉCNICO / INSTITUCIONAL --------
  tecnico: {
    toneName: 'Técnico · institucional',
    alert: ['Adesão aberta até', '30/09/2026', 'para regularizar débitos na dívida ativa da União'],
    heroEyebrow: 'Edital PGFN nº 6/2026 · publicado em 01/06/2026',
    heroTitle: ['Transação tributária para débitos inscritos em ', 'dívida ativa da União', '.'],
    heroLead: 'Está aberta a adesão ao Edital PGFN nº 6/2026. Débitos de até R$ 45 milhões podem ser negociados com redução de juros, multas e encargos e prazo estendido de pagamento, conforme a modalidade aplicável a cada caso.',
    ctaPrimary: 'Solicitar análise de elegibilidade',
    ctaGhost: 'Conhecer as condições',
    formEyebrow: 'Análise de elegibilidade',
    formTitle: 'Verifique se o seu débito pode ser enquadrado.',
    formSub: 'Envie seus dados para uma análise individualizada das condições do edital aplicáveis ao seu caso. Sem compromisso.',
    numbersLabel: 'Condições previstas no edital',
    numbersTitle: 'O que a transação por edital pode oferecer.',
    numbersNote: 'Os percentuais são limites máximos previstos no edital e variam conforme a modalidade e a análise do caso concreto.',
    explainLabel: 'Sobre o edital',
    explainTitle: 'Uma janela para regularizar passivos fiscais junto à União.',
    explainBody: [
      'A transação por adesão é o instrumento pelo qual a Procuradoria-Geral da Fazenda Nacional autoriza a negociação de débitos inscritos em dívida ativa, mediante concessões recíprocas e dentro de parâmetros objetivos.',
      'O Edital PGFN nº 6/2026 disciplina as modalidades, os percentuais máximos de redução e os prazos de pagamento. O enquadramento depende da natureza do débito, da data de inscrição e da capacidade de pagamento do contribuinte.',
      'O escritório atua na leitura técnica de cada situação, na verificação da modalidade aplicável e no acompanhamento de todas as etapas da adesão.',
    ],
    modsLabel: 'Modalidades',
    modsTitle: 'Três caminhos possíveis de transação.',
    eligLabel: 'Elegibilidade',
    eligTitle: 'Quem pode aderir, e até quando.',
    whoLabel: 'Público',
    stepsLabel: 'Como funciona',
    stepsTitle: 'Da análise à adesão, com acompanhamento técnico.',
    advLabel: 'Responsável técnico',
    advName: 'Robson Sitorski Lins',
    advOab: 'OAB/MS 9.678',
    advBody: [
      'A atuação em direito tributário do escritório reúne planejamento e contencioso fiscal, com foco na leitura precisa de cada passivo e das alternativas legais de regularização.',
      'Cada adesão à transação parte de uma análise individualizada — não há solução padronizada. O enquadramento correto na modalidade adequada é o que define as condições efetivamente aplicáveis.',
    ],
    captureLabel: 'Próximo passo',
    captureTitle: 'Entenda as condições aplicáveis ao seu débito.',
    captureLead: 'O prazo de adesão vai até 30 de setembro de 2026, às 19h. A análise da modalidade aplicável e das reduções possíveis depende do exame do caso concreto.',
  },

  // -------- TOM EMPÁTICO / ACESSÍVEL --------
  empatico: {
    toneName: 'Empático · acessível',
    alert: ['Há tempo para regularizar — até', '30/09/2026', 'para negociar seu débito'],
    heroEyebrow: 'Edital PGFN nº 6/2026 · publicado em 01/06/2026',
    heroTitle: ['Tem dívida com a União? ', 'Pode haver uma saída', '.'],
    heroLead: 'O novo edital da PGFN reabre a possibilidade de renegociar débitos inscritos em dívida ativa — para pessoas físicas e empresas. Entender se você se enquadra, e em quais condições, é o primeiro passo.',
    ctaPrimary: 'Quero entender meu caso',
    ctaGhost: 'Ver as condições',
    formEyebrow: 'Comece por aqui',
    formTitle: 'Será que o seu débito se enquadra?',
    formSub: 'Deixe seus dados e receba uma análise individualizada das condições do edital que podem se aplicar à sua situação. Sem compromisso.',
    numbersLabel: 'O que o edital pode trazer',
    numbersTitle: 'Condições que podem aliviar o seu débito.',
    numbersNote: 'Estes são os limites máximos previstos no edital. O que se aplica ao seu caso depende da modalidade e da análise da sua situação.',
    explainLabel: 'Entenda',
    explainTitle: 'Uma chance de colocar a dívida em dia, com mais fôlego.',
    explainBody: [
      'Quando um débito vai para a dívida ativa da União, juros e multas se acumulam e a sensação é de que não há saída. O edital de transação existe justamente para abrir um caminho de regularização.',
      'O Edital PGFN nº 6/2026 reúne diferentes modalidades, com descontos e prazos que variam conforme o tipo de débito, a data de inscrição e a capacidade de pagamento de cada contribuinte.',
      'O papel do escritório é traduzir essas regras para a sua realidade: entender o que se aplica ao seu caso e acompanhar cada etapa da adesão, do começo ao fim.',
    ],
    modsLabel: 'Caminhos possíveis',
    modsTitle: 'Há mais de uma forma de negociar.',
    eligLabel: 'Você se enquadra?',
    eligTitle: 'Quem pode aderir — e até quando dá tempo.',
    whoLabel: 'Para quem é',
    stepsLabel: 'Como acontece',
    stepsTitle: 'Um passo de cada vez, com você acompanhado.',
    advLabel: 'Quem conduz',
    advName: 'Robson Sitorski Lins',
    advOab: 'OAB/MS 9.678',
    advBody: [
      'À frente da área tributária do escritório, com atuação que reúne planejamento e contencioso fiscal e um jeito de trabalhar próximo de quem precisa resolver.',
      'Cada situação é diferente, e cada dívida tem uma história. Por isso a análise é sempre individual — é ela que mostra quais condições realmente podem se aplicar ao seu caso.',
    ],
    captureLabel: 'Vamos conversar',
    captureTitle: 'Dê o primeiro passo para regularizar.',
    captureLead: 'O prazo vai até 30 de setembro de 2026, às 19h. Quanto antes você entender as condições possíveis, mais tranquila fica a decisão.',
  },
};

// Texto fixo de compliance (igual nos dois tons)
const COMPLIANCE = {
  disclaimerBig: 'A análise do caso concreto é indispensável. Consulte um advogado.',
  lines: [
    'Esta página tem caráter exclusivamente informativo sobre o Edital PGFN nº 6/2026 e não constitui oferta, promessa de resultado ou garantia de obtenção de qualquer benefício. Os percentuais e prazos citados são limites máximos previstos no edital e dependem da modalidade aplicável e da análise individualizada de cada situação.',
    'Conteúdo veiculado em observância ao Código de Ética e Disciplina da OAB, à vedação à captação indevida de clientela prevista no art. 34, IV, do Estatuto da Advocacia (Lei nº 8.906/94) e ao Provimento CFOAB nº 94/2000. As informações aqui prestadas não substituem a consulta a profissional habilitado.',
  ],
};

// ---- Pequenos componentes apresentacionais ------------------
function Icon({ name, size = 20, stroke = 1.6, ...rest }) {
  // Lucide é carregado via CDN; usamos <i data-lucide>. Fallback: dot.
  return <i data-lucide={name} style={{ width: size, height: size }} {...rest}></i>;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.lp-reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

Object.assign(window, {
  EDITAL, NUMEROS, MODALIDADES, ELEGIBILIDADE, PUBLICO, PASSOS, COPY, COMPLIANCE,
  Icon, useReveal,
});
