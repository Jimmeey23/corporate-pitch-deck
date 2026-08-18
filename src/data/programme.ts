export type Tone = "light" | "dark";

export interface Metric {
  label: string;
  value: string;
  note?: string;
}

export interface Scenario {
  key: "low" | "medium" | "high";
  label: string;
  tag: string;
  metrics: Metric[];
  revenue: number;
}

export interface Tier {
  name: string;
  price: number;
  pkg: string;
  perks: string[];
  mix: number;
  featured?: boolean;
}

export interface OptionDef {
  id: number;
  num: string;
  name: string;
  short: string;
  tagline: string;
  bestFor: string;
  anchor: string;
  tone: Tone;
  mechanics: Metric[];
  callout: { title: string; text: string; important?: boolean };
  scenarios: Scenario[];
  footnote: string;
  tiers?: Tier[];
  blended?: number;
}

export const fmtINR = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export const fmtShort = (n: number) =>
  n >= 1e7
    ? `₹${(n / 1e7).toFixed(2)} Cr`
    : n >= 1e5
      ? `₹${(n / 1e5).toFixed(1).replace(/\.0$/, "")} L`
      : `₹${Math.round(n / 1e3)}K`;

export const OPTIONS: OptionDef[] = [
  {
    id: 1,
    num: "01",
    name: "Flexible Benefits Listing",
    short: "Flexible Benefits",
    tagline: "Physique 57 inside your flexible-benefits marketplace - at no cost to your organisation until employees opt in.",
    bestFor: "Fits flexible-benefits platforms",
    anchor: "₹1,88,100 per head / year",
    tone: "light",
    mechanics: [
      { label: "All-In Annual membership", value: "₹2,09,000", note: "Published studio rate, pre-tax" },
      { label: "Your corporate saving", value: "10%", note: "On 3, 6 and 12-month memberships" },
      { label: "Your people's price", value: "₹1,88,100", note: "Redeemable through flexi wallets" },
      { label: "Eligible team size", value: "40 employees", note: "Illustrative, per location" }
    ],
    callout: {
      title: "Zero cost until employees opt in",
      text: "Physique 57 appears as a preferred partner in your benefits marketplace. Your organisation budgets nothing until employees enrol through their flexi wallet - and every membership carries a 10% corporate saving across 3, 6 and 12-month tenures."
    },
    scenarios: [
      { key: "low", label: "Low", tag: "10% opt in", metrics: [ { label: "Opt-in rate", value: "10%" }, { label: "Members", value: "4 of 40" } ], revenue: 752400 },
      { key: "medium", label: "Medium", tag: "25% opt in", metrics: [ { label: "Opt-in rate", value: "25%" }, { label: "Members", value: "10 of 40" } ], revenue: 1881000 },
      { key: "high", label: "High", tag: "40% opt in", metrics: [ { label: "Opt-in rate", value: "40%" }, { label: "Members", value: "16 of 40" } ], revenue: 3009600 }
    ],
    footnote: "All corporate pricing is benchmarked to our published Mumbai studio rates - transparent, consistent and centrally maintained."
  },
  {
    id: 2,
    num: "02",
    name: "Pooled Class Credits",
    short: "Pooled Credits",
    tagline: "One pre-purchased block of class credits, shared across your whole team - the more you commit, the lower the rate.",
    bestFor: "Perfect for high-energy teams",
    anchor: "₹1,300–1,563 per class",
    tone: "dark",
    mechanics: [
      { label: "Single class, walk-in", value: "₹1,850", note: "Published studio rate" },
      { label: "Best public rate (8-class pack)", value: "₹1,563", note: "What your teams could pay today, retail" },
      { label: "250+ credit block", value: "₹1,563", note: "Matches the best public rate" },
      { label: "500+ credit block", value: "₹1,400", note: "10% below the best public rate" },
      { label: "1,000+ credit block", value: "₹1,300", note: "17% below the best public rate" }
    ],
    callout: {
      title: "A benefit that's genuinely better",
      text: "Many 'corporate discounts' quietly match what employees could already buy themselves. We hold a firm line: every block is priced at or below our best public per-class rate - and meaningfully below it from 500 credits up. Credits are pooled, shareable across employees, valid for 12 months and can be topped up at any time.",
      important: true
    },
    scenarios: [
      { key: "low", label: "Low", tag: "Starter block", metrics: [ { label: "Block size", value: "250 credits" }, { label: "Per class", value: "₹1,563" } ], revenue: 390750 },
      { key: "medium", label: "Medium", tag: "10% below public rates", metrics: [ { label: "Block size", value: "500 credits" }, { label: "Per class", value: "₹1,400" } ], revenue: 700000 },
      { key: "high", label: "High", tag: "17% below public rates", metrics: [ { label: "Block size", value: "1,000 credits" }, { label: "Per class", value: "₹1,300" } ], revenue: 1300000 }
    ],
    footnote: "Priced with intent: your people always pay less through you than they would walking in alone."
  },
  {
    id: 3,
    num: "03",
    name: "Talent Retention • The Leadership Concierge",
    short: "Leadership Concierge",
    tagline: "A concierge-grade All-In membership for the people your organisation cannot afford to lose.",
    bestFor: "Made for retention & leadership",
    anchor: "₹2,50,000 per head / year",
    tone: "dark",
    mechanics: [
      { label: "Programme price / head", value: "₹2,50,000", note: "All-In Annual + concierge services" },
      { label: "Equivalent retail value", value: "₹3,10,000+", note: "If the same benefits were assembled privately" },
      { label: "Concierge privileges", value: "6 included", note: "Privates, guest passes, freezes & more" },
      { label: "Ideal cohort", value: "5–20 leaders", note: "High-potential, succession & key-talent groups" }
    ],
    callout: {
      title: "Designed as a retention investment",
      text: "Most partners enrol their high-potential leaders, succession candidates and key retention priorities. The concierge experience - two private sessions per quarter, priority booking, four guest passes per quarter, two additional membership freezes per year, a hosted annual class and a multi-year price promise - reads as executive care, not gym access."
    },
    scenarios: [
      { key: "low", label: "Low", tag: "Founding cohort", metrics: [ { label: "Leaders enrolled", value: "5" }, { label: "Per head", value: "₹2,50,000" } ], revenue: 1250000 },
      { key: "medium", label: "Medium", tag: "Leadership bench", metrics: [ { label: "Leaders enrolled", value: "10" }, { label: "Per head", value: "₹2,50,000" } ], revenue: 2500000 },
      { key: "high", label: "High", tag: "Extended leadership", metrics: [ { label: "Leaders enrolled", value: "20" }, { label: "Per head", value: "₹2,50,000" } ], revenue: 5000000 }
    ],
    footnote: "Multi-year partnerships are price-protected, so each leader's benefit stays consistent for the full length of the agreement."
  },
  {
    id: 4,
    num: "04",
    name: "Tiered Membership Menu",
    short: "Tiered Menu",
    tagline: "Three ready-made membership tiers your HR team can publish as-is - with privileges employees can't get at the front desk.",
    bestFor: "A ready-made HR menu",
    anchor: "₹1,72,500 blended per head / year",
    tone: "light",
    mechanics: [],
    tiers: [
      { name: "Base", price: 150000, pkg: "Single-Modality Annual · ~15% corporate saving", perks: ["Single modality access", "1 guest pass / quarter", "Standard booking window"], mix: 50 },
      { name: "Mid", price: 175000, pkg: "All-Access Annual · ~15% corporate saving", perks: ["All class modalities", "2 guest passes / quarter", "1 extra freeze / year", "Quarterly progress check-in"], mix: 30, featured: true },
      { name: "Premium", price: 225000, pkg: "All-Access Annual + concierge", perks: ["4 guest passes / quarter", "2 extra freezes / year", "Monthly concierge check-in", "2 private-class credits / quarter", "Priority booking window"], mix: 20 }
    ],
    blended: 172500,
    callout: {
      title: "An exclusive your people can feel",
      text: "Each tier adds privileges unavailable to walk-in members - guest passes, extra freezes, concierge check-ins and private-class credits. Blended estimates assume a 50 / 30 / 20 mix across tiers; we review it with you quarterly and refine it to how your teams actually enrol."
    },
    scenarios: [
      { key: "low", label: "Low", tag: "Single-team pilot", metrics: [ { label: "Total members", value: "10" }, { label: "Blended per head", value: "₹1,72,500" } ], revenue: 1725000 },
      { key: "medium", label: "Medium", tag: "Department-wide", metrics: [ { label: "Total members", value: "25" }, { label: "Blended per head", value: "₹1,72,500" } ], revenue: 4312500 },
      { key: "high", label: "High", tag: "Whole of business", metrics: [ { label: "Total members", value: "40" }, { label: "Blended per head", value: "₹1,72,500" } ], revenue: 6900000 }
    ],
    footnote: "Estimates assume a 50% Base / 30% Mid / 20% Premium mix - refined with you each quarter as real enrolment patterns emerge."
  },
  {
    id: 5,
    num: "05",
    name: "On-Site & Hosted Classes",
    short: "Hosted Classes",
    tagline: "We bring the barre to you - instructor, mats and music included. All your team has to do is show up.",
    bestFor: "The easiest way to start",
    anchor: "₹30,000–35,000 per session",
    tone: "light",
    mechanics: [
      { label: "Hosted class at your office", value: "₹35,000", note: "Up to 25 participants · instructor & mats included" },
      { label: "24+ sessions per year", value: "₹32,500", note: "A fortnightly rhythm" },
      { label: "48+ sessions per year", value: "₹30,000", note: "A weekly rhythm" },
      { label: "Offsites & wellness days", value: "from ₹1,50,000", note: "Curated multi-session formats" }
    ],
    callout: {
      title: "The easiest first step",
      text: "No commute, no scheduling friction - hosted sessions consistently draw the highest attendance of any format we offer. Most partners begin here: a monthly or quarterly class that builds a following, then grows naturally into studio memberships."
    },
    scenarios: [
      { key: "low", label: "Low", tag: "Monthly", metrics: [ { label: "Rhythm", value: "12 sessions / yr" }, { label: "Per session", value: "₹35,000" } ], revenue: 420000 },
      { key: "medium", label: "Medium", tag: "Fortnightly", metrics: [ { label: "Rhythm", value: "24 sessions / yr" }, { label: "Per session", value: "₹32,500" } ], revenue: 780000 },
      { key: "high", label: "High", tag: "Weekly", metrics: [ { label: "Rhythm", value: "48 sessions / yr" }, { label: "Per session", value: "₹30,000" } ], revenue: 1440000 }
    ],
    footnote: "Priced per session rather than per head - a simple way to introduce Physique 57 before rolling out memberships."
  },
  {
    id: 6,
    num: "06",
    name: "Digital Access Pass",
    short: "Digital Pass",
    tagline: "Our on-demand and livestream library for hybrid and distributed teams - every pin code, from day one.",
    bestFor: "For hybrid & distributed teams",
    anchor: "₹9,500–12,000 per seat / year",
    tone: "dark",
    mechanics: [
      { label: "On-demand annual, retail", value: "₹18,000", note: "Published consumer price" },
      { label: "Corporate · 50+ seats", value: "₹12,000 / seat", note: "33% below retail" },
      { label: "Corporate · 150+ seats", value: "₹11,000 / seat", note: "39% below retail" },
      { label: "Corporate · 300+ seats", value: "₹9,500 / seat", note: "47% below retail" }
    ],
    callout: {
      title: "Every pin code, from day one",
      text: "The only programme that reaches distributed and non-Mumbai teams immediately - no studio, no scheduling, no travel. Bundle it with studio programmes for hybrid workforces; participation analytics are included in your monthly report."
    },
    scenarios: [
      { key: "low", label: "Low", tag: "One business unit", metrics: [ { label: "Seats", value: "50" }, { label: "Per seat / year", value: "₹12,000" } ], revenue: 600000 },
      { key: "medium", label: "Medium", tag: "Multi-city rollout", metrics: [ { label: "Seats", value: "150" }, { label: "Per seat / year", value: "₹11,000" } ], revenue: 1650000 },
      { key: "high", label: "High", tag: "Company-wide", metrics: [ { label: "Seats", value: "300" }, { label: "Per seat / year", value: "₹9,500" } ], revenue: 2850000 }
    ],
    footnote: "Annual seat licences, billed centrally. Unused seats can be reassigned each quarter."
  }
];

export const PORTFOLIO = {
  low: OPTIONS.reduce((s, o) => s + o.scenarios[0].revenue, 0),
  medium: OPTIONS.reduce((s, o) => s + o.scenarios[1].revenue, 0),
  high: OPTIONS.reduce((s, o) => s + o.scenarios[2].revenue, 0)
};
