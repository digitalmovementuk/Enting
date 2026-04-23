export type PageKey =
  | 'home'
  | 'monthly-cfo'
  | 'financial-reporting'
  | 'cashflow-management'
  | 'about'
  | 'contact'

export type NavItem = {
  label: string
  href: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ServiceCard = {
  key: 'monthly-cfo' | 'financial-reporting' | 'cashflow-management'
  label: string
  title: string
  href: string
  description: string
  benefit: string
  bullets: string[]
}

export type ServicePageContent = {
  key: ServiceCard['key']
  label: string
  href: string
  title: string
  eyebrow: string
  headline: string
  intro: string
  formHeading: string
  formCta: string
  trustChips: string[]
  heroPoints: { label: string; value: string }[]
  overview: string[]
  problems: { title: string; text: string }[]
  process: { step: string; title: string; text: string }[]
  deliverables: string[]
  outcomes: string[]
  whyChoose: string[]
  faq: FaqItem[]
  related: { label: string; href: string }[]
  finalCtaTitle: string
  finalCtaBody: string
}

const BASE_URL = import.meta.env.BASE_URL ?? '/'

export const toUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  if (path === '/' || path === '') {
    return BASE_URL
  }

  if (path.startsWith('#')) {
    return `${BASE_URL}${path}`
  }

  return `${BASE_URL}${path.replace(/^\/+/, '')}`
}

export const company = {
  name: 'Financeable Consulting',
  shortName: 'Financeable',
  tagline: 'Practical finance support for growing businesses',
  summary:
    'Financeable Consulting helps growing businesses improve monthly finance visibility through Monthly CFO, Financial Reporting, and Cashflow Management support.',
  locationSummary: 'London-focused support for founder-led businesses, SMEs, and selected UK growth hubs.',
  primaryCta: 'Book a consultation',
  secondaryCta: 'Explore services',
  floatingCta: 'Quick enquiry',
  contactFallbackLabel: 'Use the enquiry form',
  serviceAreaLabel: 'London, central London districts, South East London, East London, and Manchester',
  enquiryNote: 'No public phone number or WhatsApp line was found, so the site uses a direct enquiry route instead.',
  footerNote:
    'Built as a conversion-focused advisory site with clear service explanations, practical FAQs, and a low-friction enquiry path.',
}

export const serviceAreas = [
  'London',
  'City of London',
  'Westminster',
  'Southwark',
  'London Bridge',
  "King's Cross",
  'Farringdon',
  'East London',
  'South East London',
  'Manchester',
]

export const navItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export const serviceCards: ServiceCard[] = [
  {
    key: 'monthly-cfo',
    label: 'Monthly CFO',
    title: 'Senior finance support without a full-time CFO hire',
    href: '/services/monthly-cfo/',
    description:
      'A recurring finance leadership model for businesses that need clearer reporting, sharper decision support, and a dependable monthly finance rhythm.',
    benefit: 'Bring monthly clarity and financial leadership into the business before a permanent senior hire is justified.',
    bullets: ['Monthly finance cadence', 'Leadership decision support', 'Reporting and forecast review'],
  },
  {
    key: 'financial-reporting',
    label: 'Financial Reporting',
    title: 'Management reporting that is built for decisions',
    href: '/services/financial-reporting/',
    description:
      'Clearer monthly reporting, management accounts, and budget-versus-actual visibility for teams that need reliable numbers and sharper commentary.',
    benefit: 'Turn reports into a management tool instead of a delayed monthly admin task.',
    bullets: ['Management accounts', 'Variance analysis', 'Monthly visibility'],
  },
  {
    key: 'cashflow-management',
    label: 'Cashflow Management',
    title: 'Forward cash visibility before pressure turns into risk',
    href: '/services/cashflow-management/',
    description:
      'Cash forecasting, planning cadence, and practical finance support for growing businesses that need control over liquidity and near-term decisions.',
    benefit: 'Reduce cash surprises and make growth decisions with better forward visibility.',
    bullets: ['Rolling cash forecast', 'Decision support', 'Growth-stage planning'],
  },
]

export const homepageContent = {
  eyebrow: 'London Finance Support',
  headline: 'Senior finance support for businesses that need clearer monthly decisions.',
  intro:
    'Financeable Consulting helps founder-led businesses and growing teams bring order to reporting, cash visibility, and finance leadership. The focus is practical: clearer monthly numbers, stronger decision support, and a better operating rhythm without the cost of a full-time finance director or CFO too early.',
  trustChips: ['Monthly CFO', 'Financial Reporting', 'Cashflow Management', 'London-focused support'],
  heroPoints: [
    { label: 'Monthly visibility', value: 'Structured and decision-ready' },
    { label: 'Cash outlook', value: 'More useful than a bank-balance guess' },
    { label: 'Working style', value: 'Practical, calm, and commercially useful' },
  ],
  problemCards: [
    {
      title: 'Reporting arrives too late to guide decisions',
      text: 'Leadership keeps moving, but the financial picture lands after decisions have already been made.',
    },
    {
      title: 'Cash feels harder to read than it should',
      text: 'Even profitable businesses can feel exposed when receipts, spend, and growth commitments are not visible in one clear rhythm.',
    },
    {
      title: 'The business has outgrown informal finance handling',
      text: 'Bookkeeping and year-end compliance may exist, but the leadership team still lacks dependable monthly finance support.',
    },
  ],
  signatureOffer: {
    label: 'Signature Offer',
    title: 'Monthly CFO support that connects reporting, cash visibility, and leadership decisions.',
    body: [
      'The Monthly CFO service is the clearest entry point for businesses that need more than reporting and less than a full-time senior finance hire. It combines recurring finance leadership, management discussion, reporting review, and practical decision support.',
      'That makes it especially useful when growth has outpaced the current finance setup. Instead of reacting to numbers after the fact, leadership gets a clearer monthly rhythm around what happened, what is changing, and what deserves action next.',
    ],
    highlights: ['Monthly review cadence', 'Management interpretation', 'Forecast and cash discussion'],
  },
  process: [
    {
      step: '01',
      title: 'Understand the current finance setup',
      text: 'Review how reporting, forecasting, and decision ownership work today, and identify where clarity is being lost.',
    },
    {
      step: '02',
      title: 'Build a practical monthly rhythm',
      text: 'Create a reporting and review cadence that leadership can actually use rather than another finance document nobody trusts.',
    },
    {
      step: '03',
      title: 'Improve interpretation and control',
      text: 'Connect management numbers, budget movement, and cash visibility to the decisions that matter most.',
    },
    {
      step: '04',
      title: 'Support better monthly decisions',
      text: 'Use finance as a management tool for hiring, growth pacing, pricing, spend control, and short-term priorities.',
    },
  ],
  whyChoose: [
    'Built around finance clarity, not generic advisory language',
    'Designed for businesses that are too complex for informal finance handling but too early for a full-time senior hire',
    'Focused on decision usefulness, not just historic reporting output',
    'Low-friction enquiry route with no invented proof or inflated claims',
  ],
  reassurance: [
    {
      title: 'No fake proof layer',
      text: 'The site avoids invented testimonials, ratings, and credentials. Trust is built through specific services, clear process, and realistic expectations.',
    },
    {
      title: 'A commercially useful finance lens',
      text: 'The emphasis is on management visibility, budget versus actual understanding, and cash planning that supports action.',
    },
    {
      title: 'Structured for later SEO expansion',
      text: 'The live site is the core six-page brand layer, while the 450-page keyword matrix remains ready for later rollout.',
    },
  ],
  aboutBlurb:
    'Financeable Consulting is positioned as a practical finance partner for founder-led businesses, startups, and growing SMEs that need clearer monthly control. The approach is designed to fit before a full-time senior finance hire is justified.',
  faq: [
    {
      question: 'Who is Financeable Consulting best suited to?',
      answer:
        'It is best suited to founder-led businesses, growing SMEs, and small leadership teams that need stronger reporting, cash visibility, and practical finance support without hiring a full-time senior leader too early.',
    },
    {
      question: 'What services does Financeable Consulting offer?',
      answer:
        'The core services are Monthly CFO, Financial Reporting, and Cashflow Management. Together they cover recurring finance leadership, better monthly visibility, and stronger control over planning and liquidity.',
    },
    {
      question: 'Does this replace our current accountant?',
      answer:
        'Not necessarily. The support can sit alongside an existing accountant, bookkeeper, or finance manager to add structure, interpretation, and decision support.',
    },
    {
      question: 'Is the service only for businesses in trouble?',
      answer:
        'No. It is often most useful when a business is growing, hiring, or managing more complexity than the current finance setup can handle comfortably.',
    },
    {
      question: 'How do we start?',
      answer:
        'The first step is a consultation to understand how reporting, cash planning, and finance decisions are working today and where more clarity is needed.',
    },
    {
      question: 'Are public reviews available?',
      answer:
        'No safely attributable public Google reviews were found during research, so the site uses service clarity and process detail instead of a fabricated review section.',
    },
  ],
  finalCtaTitle: 'Make the finance function easier to manage each month.',
  finalCtaBody:
    'If reporting is delayed, cash visibility is weak, or finance decisions still rely too much on instinct, Financeable Consulting can help build a clearer monthly rhythm.',
}

export const servicePageContent: Record<ServicePageContent['key'], ServicePageContent> = {
  'monthly-cfo': {
    key: 'monthly-cfo',
    label: 'Monthly CFO',
    href: '/services/monthly-cfo/',
    eyebrow: 'Monthly CFO',
    title: 'Monthly CFO',
    headline: 'Monthly CFO support for businesses that need clarity, control, and better monthly decisions.',
    intro:
      'Monthly CFO support gives a growing business access to senior finance leadership without the cost and commitment of a full-time CFO hire. Financeable Consulting helps leadership teams build a dependable monthly finance rhythm so reporting, forecasting, and decision-making become easier to manage.',
    formHeading: 'Talk about monthly CFO support',
    formCta: 'Book a consultation',
    trustChips: ['Recurring finance leadership', 'Monthly reporting rhythm', 'London-focused support'],
    heroPoints: [
      { label: 'Core role', value: 'Senior finance guidance every month' },
      { label: 'Best for', value: 'Growing teams not ready for a full-time CFO' },
      { label: 'Outcome', value: 'Clearer monthly decisions and accountability' },
    ],
    overview: [
      'Monthly CFO support sits between a standard accountant relationship and a permanent senior finance hire. It is designed for businesses that need more leadership and commercial interpretation than basic compliance or bookkeeping can provide.',
      'In practical terms, the service can include monthly management review, reporting interpretation, KPI discussion, budget-versus-actual analysis, cash outlook review, and support around the decisions that shape growth and margin.',
      'The real value is not only in producing reports. It is in creating a repeatable operating rhythm around those reports so leadership has a clearer framework for deciding what to do next.',
    ],
    problems: [
      {
        title: 'Leadership is making decisions without enough financial context',
        text: 'Numbers exist, but the business still lacks clear interpretation around margin, spend, hiring affordability, or the next month of cash pressure.',
      },
      {
        title: 'Reporting and forecasting are inconsistent',
        text: 'The finance cycle depends on manual effort, arrives late, or changes shape every month, making it harder to build management confidence.',
      },
      {
        title: 'The business has outgrown ad hoc finance support',
        text: 'Complexity has increased, but the finance function still lacks the senior view needed to connect numbers to business choices.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Review the current finance rhythm',
        text: 'Understand how reporting, forecasting, and management decisions are currently handled and where the biggest visibility gaps sit.',
      },
      {
        step: '02',
        title: 'Define the monthly operating cadence',
        text: 'Set the timetable, outputs, and review points that make monthly finance more consistent and easier to use.',
      },
      {
        step: '03',
        title: 'Interpret the numbers properly',
        text: 'Translate reporting, trends, and variance into clear management actions instead of leaving the team with raw outputs alone.',
      },
      {
        step: '04',
        title: 'Support decisions through the month',
        text: 'Use recurring finance leadership to test assumptions, review risks, and make decisions with stronger financial context.',
      },
    ],
    deliverables: [
      'Monthly management pack and commentary',
      'Budget-versus-actual review',
      'KPI tracking and discussion',
      'Rolling cash and forecast discussion',
      'Management meeting support and action framing',
      'Commercial insight on margin, spend, and planning assumptions',
    ],
    outcomes: [
      'More dependable monthly reporting discipline',
      'Clearer links between finance data and management action',
      'Better judgment around hiring, spend, and growth pacing',
      'A senior finance layer without a full-time salary commitment',
    ],
    whyChoose: [
      'Focused on practical monthly finance leadership rather than ceremonial CFO positioning',
      'Useful when a business needs stronger control but is not yet ready for a permanent senior hire',
      'Built to work alongside an existing accountant, bookkeeper, or internal finance resource',
    ],
    faq: [
      {
        question: 'What does a monthly CFO do?',
        answer:
          'A monthly CFO provides recurring senior finance leadership, including review of reporting, interpretation of business performance, forecast support, and guidance for monthly management decisions.',
      },
      {
        question: 'Is this the same as a fractional CFO?',
        answer:
          'They are closely related. Monthly CFO usually describes a recurring monthly cadence, while fractional CFO is the broader part-time leadership category.',
      },
      {
        question: 'Who is the service best suited to?',
        answer:
          'It is best suited to growing businesses that have outgrown basic finance handling but are not yet ready for the cost or commitment of a full-time CFO.',
      },
      {
        question: 'Can it work with our current accountant or finance manager?',
        answer:
          'Yes. The role often sits alongside an existing accountant, bookkeeper, or finance manager to add leadership, structure, and commercial interpretation.',
      },
      {
        question: 'What should we expect each month?',
        answer:
          'Most businesses should expect structured reporting, commentary, review of the important numbers, and discussion of the risks and actions that matter next.',
      },
    ],
    related: [
      { label: 'Financial Reporting', href: '/services/financial-reporting/' },
      { label: 'Cashflow Management', href: '/services/cashflow-management/' },
      { label: 'Contact', href: '/contact/' },
    ],
    finalCtaTitle: 'Bring stronger finance leadership into the monthly rhythm.',
    finalCtaBody:
      'If the business needs clearer reporting, better interpretation, and more confidence behind monthly decisions, Monthly CFO support is a practical next step.',
  },
  'financial-reporting': {
    key: 'financial-reporting',
    label: 'Financial Reporting',
    href: '/services/financial-reporting/',
    eyebrow: 'Financial Reporting',
    title: 'Financial Reporting',
    headline: 'Financial reporting that gives leadership clearer monthly visibility.',
    intro:
      'Financial Reporting support helps a business move from delayed, hard-to-interpret numbers to a clear monthly reporting rhythm that management can actually use. Financeable Consulting focuses on management accounts, commentary, and budget-versus-actual visibility that support decisions instead of slowing them down.',
    formHeading: 'Review your reporting setup',
    formCta: 'Request a reporting review',
    trustChips: ['Management accounts', 'Variance analysis', 'Monthly visibility'],
    heroPoints: [
      { label: 'Core role', value: 'Clearer monthly performance visibility' },
      { label: 'Best for', value: 'Teams that need better management accounts' },
      { label: 'Outcome', value: 'Reports that explain what changed and why' },
    ],
    overview: [
      'Financial reporting should do more than send a profit and loss statement once a month. A useful reporting service gives leadership a dependable view of how the business is performing, where pressure is building, and what deserves action before the next month starts.',
      'That usually includes management accounts, KPI tracking, commentary on revenue and margin movement, overhead review, and structured budget-versus-actual analysis.',
      'The goal is straightforward: give management a clearer way to read performance, understand what drove it, and decide what to do next.',
    ],
    problems: [
      {
        title: 'Reports arrive too late to shape action',
        text: 'By the time the numbers are distributed, the business is already acting without a clear view of what happened in the last month.',
      },
      {
        title: 'The reports do not explain enough',
        text: 'Raw outputs are present, but commentary is weak and the numbers are not being turned into practical management insight.',
      },
      {
        title: 'Different teams rely on different versions of performance',
        text: 'Sales, operations, and finance each have their own view, so leadership spends time reconciling numbers instead of making decisions.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Audit the current reporting process',
        text: 'Review the month-end timetable, data sources, reporting pack structure, and where management is currently losing clarity.',
      },
      {
        step: '02',
        title: 'Define a more useful reporting rhythm',
        text: 'Create a practical monthly process with clearer ownership, reporting outputs, KPI views, and management review points.',
      },
      {
        step: '03',
        title: 'Strengthen interpretation',
        text: 'Use reporting commentary and variance review to explain what moved, why it moved, and where attention is needed.',
      },
      {
        step: '04',
        title: 'Make the numbers easier to act on',
        text: 'Turn the monthly pack into a clearer operating tool for pricing, hiring, cost control, and planning.',
      },
    ],
    deliverables: [
      'Monthly management accounts',
      'Performance commentary',
      'Budget-versus-actual review',
      'Variance analysis and KPI summaries',
      'Leadership-ready review notes',
      'Optional departmental or project views where needed',
    ],
    outcomes: [
      'Faster monthly visibility for leadership',
      'A more dependable management reporting discipline',
      'Stronger understanding of revenue, margin, and cost movement',
      'Meetings that focus more on action and less on reconciling numbers',
    ],
    whyChoose: [
      'Built for management usefulness rather than reporting for reporting’s sake',
      'Good fit when numbers exist but clarity is still missing',
      'Works alongside existing finance and bookkeeping delivery',
    ],
    faq: [
      {
        question: 'What is included in financial reporting support?',
        answer:
          'It usually includes monthly management accounts, KPI tracking, finance commentary, and budget-versus-actual review built around management needs.',
      },
      {
        question: 'Is this the same as year-end accounts?',
        answer:
          'No. Year-end accounts are primarily for statutory and compliance purposes. Financial reporting support is focused on timely management visibility.',
      },
      {
        question: 'Who benefits most from this service?',
        answer:
          'It is most useful for growing businesses whose leadership team needs clearer monthly information and more reliable management reporting discipline.',
      },
      {
        question: 'Can this work with our current accountant or bookkeeper?',
        answer:
          'Yes. The service can sit alongside an existing finance resource to improve reporting quality, structure, and interpretation.',
      },
      {
        question: 'Why does budget-versus-actual analysis matter?',
        answer:
          'It helps management understand where performance differs from plan and whether the gap is timing-related, operational, or structural.',
      },
    ],
    related: [
      { label: 'Monthly CFO', href: '/services/monthly-cfo/' },
      { label: 'Cashflow Management', href: '/services/cashflow-management/' },
      { label: 'Contact', href: '/contact/' },
    ],
    finalCtaTitle: 'Make monthly reporting easier to trust and easier to use.',
    finalCtaBody:
      'If the team needs stronger monthly visibility, better commentary, and a clearer budget-versus-actual discipline, Financial Reporting support can create that structure.',
  },
  'cashflow-management': {
    key: 'cashflow-management',
    label: 'Cashflow Management',
    href: '/services/cashflow-management/',
    eyebrow: 'Cashflow Management',
    title: 'Cashflow Management',
    headline: 'Cashflow management that gives leadership earlier visibility and calmer decisions.',
    intro:
      'Cashflow Management support helps businesses understand not only how much cash they have today, but how cash is likely to move over the coming weeks and months. Financeable Consulting focuses on cash forecasting, planning cadence, and practical decision support before pressure turns into risk.',
    formHeading: 'Review your cash visibility',
    formCta: 'Start a cash review',
    trustChips: ['Cash forecasting', 'Decision support', 'Growth-stage planning'],
    heroPoints: [
      { label: 'Core role', value: 'Forward cash visibility' },
      { label: 'Best for', value: 'Growing teams with uneven cash timing' },
      { label: 'Outcome', value: 'Less guesswork around liquidity decisions' },
    ],
    overview: [
      'Cashflow management is not just watching the bank balance. It is understanding the timing and drivers behind cash movement, then building a process that makes upcoming pressure visible sooner.',
      'That can include rolling cash forecasts, review of expected receipts and committed outgoings, scenario planning, working-capital discussion, and regular analysis of the assumptions that are shaping liquidity.',
      'The service is especially useful for founder-led businesses, startups, and growing teams where commercial momentum can hide fragile cash mechanics.',
    ],
    problems: [
      {
        title: 'Cash decisions rely too much on instinct',
        text: 'Leadership has a general feel for the bank balance, but not a dependable forecast that shows how growth, payroll, and payment timing interact.',
      },
      {
        title: 'Profit and cash are being confused',
        text: 'The business may look healthy on paper while short-term liquidity remains more exposed than management realises.',
      },
      {
        title: 'Growth is putting pressure on liquidity',
        text: 'Hiring, software spend, supplier timing, or client payment delays are creating uncertainty that needs a clearer planning rhythm.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Review the current cash view',
        text: 'Understand whether a forecast exists, how assumptions are maintained, and where the main blind spots are sitting today.',
      },
      {
        step: '02',
        title: 'Build a more useful forecast rhythm',
        text: 'Create a rolling forecast and review cadence that fits how the business actually operates and updates as trading changes.',
      },
      {
        step: '03',
        title: 'Test assumptions and scenarios',
        text: 'Pressure-test receipts, spend, growth commitments, and runway assumptions so management can see where risk builds first.',
      },
      {
        step: '04',
        title: 'Use cash visibility to guide decisions',
        text: 'Support planning around hiring, spend control, pricing, and short-term priorities with better forward context.',
      },
    ],
    deliverables: [
      'Rolling cash forecast',
      'Forecast assumption log',
      'Expected inflow and outflow review',
      'Scenario planning for pressure points',
      'Working-capital and runway visibility where relevant',
      'Cash-focused management discussion notes',
    ],
    outcomes: [
      'Earlier visibility on pressure points',
      'Better planning around commitments and growth timing',
      'Less reactive decision making',
      'More confidence in short-term cash discussions',
    ],
    whyChoose: [
      'Designed for practical use rather than theoretical treasury language',
      'Useful before cash stress becomes severe, not only during crisis moments',
      'Works well alongside broader reporting and monthly CFO support',
    ],
    faq: [
      {
        question: 'What is included in cashflow management support?',
        answer:
          'It usually includes rolling cash forecasting, review of expected receipts and outgoings, scenario planning, and discussion of the decisions that affect liquidity.',
      },
      {
        question: 'Is this only for businesses already in trouble?',
        answer:
          'No. It is also useful for businesses that are growing, hiring, investing, or dealing with uneven payment timing and want better forward visibility early.',
      },
      {
        question: 'What is the difference between profit and cash flow?',
        answer:
          'Profit shows whether revenue exceeds costs over a period. Cash flow shows when money actually comes in and out, which is why a profitable business can still experience cash pressure.',
      },
      {
        question: 'How often should the cash forecast be reviewed?',
        answer:
          'That depends on the business, but many growing teams benefit from a weekly or monthly review cadence so assumptions stay current.',
      },
      {
        question: 'Can this work with our existing finance support?',
        answer:
          'Yes. The service can sit alongside an existing accountant, finance manager, or bookkeeper to strengthen forecasting, visibility, and cash-related decision support.',
      },
    ],
    related: [
      { label: 'Monthly CFO', href: '/services/monthly-cfo/' },
      { label: 'Financial Reporting', href: '/services/financial-reporting/' },
      { label: 'Contact', href: '/contact/' },
    ],
    finalCtaTitle: 'Reduce cash surprises before they start shaping the wrong decisions.',
    finalCtaBody:
      'If cash visibility is weak, the forecast is not trusted, or growth is creating uncertainty, Cashflow Management support can bring much stronger control.',
  },
}

export const aboutContent = {
  eyebrow: 'About Financeable',
  headline: 'A finance advisory model built for useful monthly control, not generic consultancy theatre.',
  intro:
    'Financeable Consulting is positioned for businesses that need finance support to become clearer, calmer, and more commercially useful. The focus is not on adding noise or corporate theatre. It is on helping leadership teams understand performance, cash movement, and monthly priorities with less friction.',
  principles: [
    {
      title: 'Useful over impressive',
      text: 'The work should help management make better decisions, not create the appearance of sophistication without practical value.',
    },
    {
      title: 'Clear process over ad hoc finance firefighting',
      text: 'Reporting, review, and cash planning work better when they happen on a dependable rhythm instead of only when pressure spikes.',
    },
    {
      title: 'Commercial context over finance isolation',
      text: 'The numbers only matter when they are connected to pricing, hiring, delivery, margin, and growth choices.',
    },
  ],
  fitCards: [
    {
      title: 'Founder-led businesses',
      text: 'When the founder is still carrying too much finance decision load and needs a clearer monthly structure around the numbers.',
    },
    {
      title: 'Growing SMEs',
      text: 'When the business has become too operationally complex for informal finance handling but does not need a full-time senior hire yet.',
    },
    {
      title: 'Startups and small leadership teams',
      text: 'When growth pace, planning assumptions, and cash pressure need better visibility and more disciplined discussion.',
    },
  ],
  collaborationSteps: [
    {
      step: '01',
      title: 'Start with the current setup',
      text: 'Review how reporting, visibility, and finance decisions work today.',
    },
    {
      step: '02',
      title: 'Clarify what good looks like',
      text: 'Define the reporting rhythm, cash visibility, and level of support that management actually needs.',
    },
    {
      step: '03',
      title: 'Build the monthly cadence',
      text: 'Put practical review points and outputs in place so finance becomes easier to trust and use.',
    },
  ],
  faq: [
    {
      question: 'Does the business provide compliance or statutory accountancy services?',
      answer:
        'The published positioning is focused on Monthly CFO, Financial Reporting, and Cashflow Management support. The site does not make unverified regulated or certification claims.',
    },
    {
      question: 'Why is the About page written around the advisory model rather than named team biographies?',
      answer:
        'No safely attributable public staff or founder information was available during research, so the page is written around verified service positioning instead of invented personal detail.',
    },
    {
      question: 'Is Financeable Consulting only for London businesses?',
      answer:
        'The site is London-led because that is the strongest provided location focus, but the broader service-area language also includes selected UK growth hubs.',
    },
    {
      question: 'What is the best next step after reading this page?',
      answer:
        'Use the contact page or the page enquiry forms to start a conversation about reporting, monthly CFO support, or cash visibility.',
    },
  ],
  finalCtaTitle: 'Finance support should make leadership calmer, not busier.',
  finalCtaBody:
    'If the business needs a clearer finance rhythm and stronger monthly visibility, Financeable Consulting is designed to start that conversation simply.',
}

export const contactContent = {
  eyebrow: 'Contact',
  headline: 'Start an enquiry with enough context to make the first conversation useful.',
  intro:
    'Financeable Consulting is built around a low-friction enquiry route. If reporting is unclear, cash feels hard to read, or the business needs more practical finance support, use the form to explain the challenge and the next conversation can stay focused on what matters.',
  contactCards: [
    {
      title: 'Monthly CFO',
      text: 'For recurring finance leadership, monthly reporting review, and management decision support.',
    },
    {
      title: 'Financial Reporting',
      text: 'For management accounts, clearer monthly visibility, and stronger budget-versus-actual analysis.',
    },
    {
      title: 'Cashflow Management',
      text: 'For rolling cash forecasts, liquidity visibility, and better planning during growth pressure.',
    },
  ],
  whatToShare: [
    'What feels hardest to see in the numbers today',
    'Whether the main issue is reporting, cash visibility, or broader finance support',
    'What has changed recently in the business: growth, hiring, margin pressure, or payment timing',
    'What a more useful monthly finance rhythm would ideally help management do',
  ],
  faq: [
    {
      question: 'What happens after an enquiry is sent?',
      answer:
        'The first conversation should clarify the current setup, where visibility is being lost, and which service path is the best fit.',
    },
    {
      question: 'Can we enquire if we are not sure which service we need?',
      answer:
        'Yes. The form is designed for businesses that know they need stronger finance support but are still deciding whether the issue is Monthly CFO, Reporting, or Cashflow Management.',
    },
    {
      question: 'Is there a public phone number or WhatsApp line?',
      answer:
        'No public phone number or WhatsApp line was safely attributable during research, so the site uses a direct enquiry route instead.',
    },
    {
      question: 'Do you need a full brief before making contact?',
      answer:
        'No. A short description of the current finance challenge is enough to make the first conversation useful.',
    },
  ],
  finalCtaTitle: 'Start with the finance issue that is already slowing decisions down.',
  finalCtaBody:
    'A short enquiry is enough to begin. Share what feels unclear today, and the next conversation can focus on the practical route forward.',
}
