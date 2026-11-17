// Every string on the page, in both languages. Facts here are the only claims the site makes
// (see ../PRODUCT.md, Evidence on Hand): do not add numbers that are not in that list.

export type Lang = 'en' | 'pt';

const contact = {
  email: 'vcastelli@usp.br',
  linkedin: 'https://www.linkedin.com/in/viniciuscastelli',
  github: 'https://github.com/castlelli/vivapay',
  portfolio: 'https://castlelli.github.io/',
};

export const strings = {
  en: {
    htmlLang: 'en',
    title: 'VivaPay: one card, zero cash',
    description:
      'VivaPay replaced cash at a 40-booth fair: 5,000+ people, 10,000 transactions and R$10K+ processed in three days, all on one QR card.',
    nav: { results: 'Results', how: 'How it works', ledger: 'Ledger', switchLabel: 'Português', switchShort: 'PT' },
    hero: {
      line1: 'One card.',
      line2: 'Zero cash.',
      lede: 'Cashless payments for events. Visitors top up once at the entrance, then pay at any booth with a QR card.',
      cta: 'Running an event? Let’s talk',
      secondary: 'See the results',
      imageAlt: 'A dark green VivaPay card standing on a wooden stall counter at a night fair, string lights blurred behind it.',
      cardNo: 'Voucher · Nº 0417',
    },
    stats: [
      { value: 'R$10K+', label: 'Processed' },
      { value: '5,000+', label: 'People' },
      { value: '10,000', label: 'Transactions' },
      { value: '40 · 3', label: 'Booths · days' },
    ],
    results: {
      big: '5,000+',
      body: 'people paid without cash over three days at VivaCTI, a 40-booth fair in Bauru, Brazil. Each payment was a QR scan that took seconds.',
      photoAlt: 'An overhead view of a crowded event hall, tinted green.',
      photoCredit: 'Stock photo, Unsplash. Not VivaCTI.',
      voucherLabel: 'Viva voucher',
      balance: 'Balance',
      sample: 'Sample',
      qrAlt: 'A working QR code that opens this page.',
    },
    how: {
      title: 'Three moves. Any booth.',
      intro: 'One system with three clients. Cashiers load credit, vendors charge it, and the books close themselves.',
      note: 'Screens recreated from the original apps, which run in Portuguese. Sample data.',
      steps: [
        {
          title: 'Top up',
          body: 'At the cashier, a visitor buys credit. VivaManager loads it onto their voucher and prints a receipt. Refunds happen here too.',
          client: 'VivaManager · desktop',
        },
        {
          title: 'Scan and pay',
          body: 'At the booth, the vendor scans the voucher with VivaSales, types the amount and taps once. The balance updates before the next customer steps up.',
          client: 'VivaSales · mobile',
        },
        {
          title: 'Close the books',
          body: 'When the doors close, organizers pull a report per booth and per cashier: sales, deposits and refunds, as a PDF.',
          client: 'VivaManager · reports',
        },
      ],
    },
    ledger: {
      title: 'Balances aren’t stored. They’re computed.',
      body: 'Every voucher keeps a running record of deposits, payments and refunds. Entries can be added, never edited. The balance is that record, added up every time it is read, so nothing can drift and every real traces back to the cashier who took it.',
      caption: 'Voucher Nº 0417 · sample',
      cols: ['Time', 'Where', 'Type', 'Amount'],
      rows: [
        ['18:02', 'Cashier 2', 'Deposit', '+30,00'],
        ['18:15', 'Booth 12', 'Payment', '−4,50'],
        ['18:41', 'Booth 07', 'Payment', '−8,00'],
        ['19:03', 'Booth 31', 'Payment', '−6,00'],
        ['19:20', 'Cashier 1', 'Deposit', '+10,00'],
        ['19:48', 'Booth 07', 'Payment', '−3,50'],
      ],
      total: 'Balance, derived',
      rulesTitle: 'A payment is refused when',
      rules: [
        'the event is not active,',
        'the vendor is not assigned to that event, or',
        'the derived balance is short.',
      ],
      replay: 'Replay',
    },
    origin: {
      title: 'Built for one fair. Trusted for three days.',
      body: 'VivaPay was built for VivaCTI, the annual fair at CTI-UNESP in Bauru, Brazil. I led a team of 7 student developers during our IT technician program, and it replaced cash at all 40 booths.',
      source: 'Read the source',
    },
    close: {
      title: 'Running an event?',
      title2: 'Let’s talk.',
      body: 'Fairs, festivals, expos, school events. If cash is slowing your lines down, write to me.',
      copy: 'Copy email',
      copied: 'Copied',
    },
    footer: {
      by: 'Vinicius Castelli',
      portfolio: 'Portfolio',
      credits: 'Hero image AI-generated. Crowd photo from Unsplash. Product screens recreated with sample data.',
    },
  },
  pt: {
    htmlLang: 'pt-BR',
    title: 'VivaPay: um cartão, zero dinheiro',
    description:
      'O VivaPay substituiu o dinheiro numa feira de 40 estandes: mais de 5.000 pessoas, 10.000 transações e mais de R$10 mil processados em três dias, num cartão QR.',
    nav: { results: 'Resultados', how: 'Como funciona', ledger: 'Extrato', switchLabel: 'English', switchShort: 'EN' },
    hero: {
      line1: 'Um cartão.',
      line2: 'Zero dinheiro.',
      lede: 'Pagamentos sem dinheiro para eventos. O visitante carrega uma vez na entrada e paga em qualquer estande com um cartão QR.',
      cta: 'Vai fazer um evento? Vamos conversar',
      secondary: 'Ver os resultados',
      imageAlt: 'Um cartão VivaPay verde-escuro em pé sobre o balcão de madeira de uma barraca, numa feira à noite, com luzes desfocadas ao fundo.',
      cardNo: 'Voucher · Nº 0417',
    },
    stats: [
      { value: 'R$10 mil+', label: 'Processados' },
      { value: '5.000+', label: 'Pessoas' },
      { value: '10.000', label: 'Transações' },
      { value: '40 · 3', label: 'Estandes · dias' },
    ],
    results: {
      big: '5.000+',
      body: 'pessoas pagaram sem dinheiro em três dias de VivaCTI, uma feira de 40 estandes em Bauru. Cada pagamento foi uma leitura de QR que levou segundos.',
      photoAlt: 'Vista de cima de um salão de evento lotado, em tom verde.',
      photoCredit: 'Foto de banco de imagens, Unsplash. Não é a VivaCTI.',
      voucherLabel: 'Voucher Viva',
      balance: 'Saldo',
      sample: 'Exemplo',
      qrAlt: 'Um QR code que funciona e abre esta página.',
    },
    how: {
      title: 'Três passos. Qualquer estande.',
      intro: 'Um sistema, três aplicativos. O caixa carrega o crédito, o vendedor cobra e o fechamento sai sozinho.',
      note: 'Telas recriadas a partir dos aplicativos originais. Dados de exemplo.',
      steps: [
        {
          title: 'Recarga',
          body: 'No caixa, o visitante compra crédito. O VivaManager carrega o valor no voucher e imprime o comprovante. Estornos também são feitos ali.',
          client: 'VivaManager · desktop',
        },
        {
          title: 'Leu, pagou',
          body: 'No estande, o vendedor lê o voucher com o VivaSales, digita o valor e toca uma vez. O saldo atualiza antes do próximo cliente chegar.',
          client: 'VivaSales · celular',
        },
        {
          title: 'Fechamento',
          body: 'Quando a feira fecha, a organização gera um relatório por estande e por caixa: vendas, depósitos e estornos, em PDF.',
          client: 'VivaManager · relatórios',
        },
      ],
    },
    ledger: {
      title: 'O saldo não é guardado. É calculado.',
      body: 'Cada voucher guarda um registro de depósitos, pagamentos e estornos. Dá para incluir, nunca editar. O saldo é a soma desse registro, refeita a cada leitura, então nada se perde e cada real tem origem no caixa que o recebeu.',
      caption: 'Voucher Nº 0417 · exemplo',
      cols: ['Hora', 'Onde', 'Tipo', 'Valor'],
      rows: [
        ['18:02', 'Caixa 2', 'Depósito', '+30,00'],
        ['18:15', 'Estande 12', 'Pagamento', '−4,50'],
        ['18:41', 'Estande 07', 'Pagamento', '−8,00'],
        ['19:03', 'Estande 31', 'Pagamento', '−6,00'],
        ['19:20', 'Caixa 1', 'Depósito', '+10,00'],
        ['19:48', 'Estande 07', 'Pagamento', '−3,50'],
      ],
      total: 'Saldo, calculado',
      rulesTitle: 'Um pagamento é recusado quando',
      rules: [
        'o evento não está ativo,',
        'o vendedor não está vinculado ao evento, ou',
        'o saldo calculado não cobre o valor.',
      ],
      replay: 'Repetir',
    },
    origin: {
      title: 'Feito para uma feira. Aprovado em três dias.',
      body: 'O VivaPay foi feito para a VivaCTI, a feira anual do CTI-UNESP em Bauru. Liderei um time de 7 desenvolvedores durante o curso técnico de informática, e o sistema substituiu o dinheiro nos 40 estandes.',
      source: 'Ver o código',
    },
    close: {
      title: 'Vai fazer um evento?',
      title2: 'Vamos conversar.',
      body: 'Feiras, festivais, exposições, eventos de escola. Se o dinheiro está travando as filas, me escreva.',
      copy: 'Copiar e-mail',
      copied: 'Copiado',
    },
    footer: {
      by: 'Vinicius Castelli',
      portfolio: 'Portfólio',
      credits: 'Imagem de capa gerada por IA. Foto do público do Unsplash. Telas recriadas com dados de exemplo.',
    },
  },
} as const;

export { contact };
