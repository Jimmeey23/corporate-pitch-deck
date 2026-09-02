import { OPTIONS } from "../data/programme";

/**
 * The published rate card, as it appears in the leave-behind brochure.
 *
 * ⚠️  These figures mirror the mechanics on the programme slides in
 *     src/data/programme.ts. The slide data stores most prices as display
 *     strings rather than numbers, so they cannot all be derived - the tier
 *     prices below are imported, the rest are stated here. If a price changes,
 *     change it in BOTH places, and check the per-attended-class figures in
 *     `unitCost` still hold.
 *
 * All rates are exclusive of GST and benchmarked to published Mumbai studio
 * rates.
 */

export interface RateRow {
  item: string;
  note?: string;
  published?: string;
  corporate: string;
  saving?: string;
}

export interface RateSection {
  title: string;
  /** Only where it says something page one has not already said. */
  intro?: string;
  columns: [string, string, string];
  rows: RateRow[];
}

const tiers = OPTIONS.find((o) => o.id === 4)!.tiers!;
const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export const RATE_SECTIONS: RateSection[] = [
  {
    title: "Memberships",
    columns: ["Published rate", "Corporate rate", "Saving"],
    rows: [
      {
        item: "All-In Annual membership",
        note: "Unlimited access, all modalities",
        published: "₹2,09,000",
        corporate: "₹1,88,100",
        saving: "10%"
      },
      {
        item: `${tiers[0].name} tier — single-modality annual`,
        note: "1 guest pass per quarter",
        published: "₹1,76,000",
        corporate: inr(tiers[0].price),
        saving: "~15%"
      },
      {
        item: `${tiers[1].name} tier — all-access annual`,
        note: "2 guest passes per quarter, 1 extra freeze",
        published: "₹2,09,000",
        corporate: inr(tiers[1].price),
        saving: "~15%"
      },
      {
        item: `${tiers[2].name} tier — all-access plus concierge`,
        note: "4 guest passes per quarter, 2 private credits",
        published: "On application",
        corporate: inr(tiers[2].price),
        saving: "—"
      },
      {
        item: "Leadership Concierge",
        note: "All-In Annual plus six concierge privileges",
        published: "₹3,10,000+ assembled privately",
        corporate: "₹2,50,000",
        saving: "19%"
      }
    ]
  },
  {
    title: "Pooled class credits",
    intro:
      "Pooled across the whole team. Credits are consumed only when someone attends, are valid twelve months, and can be topped up at any time.",
    columns: ["Best public rate", "Your rate per class", "Saving"],
    rows: [
      {
        item: "Single class, walk-in",
        note: "Published studio rate",
        published: "₹1,850",
        corporate: "₹1,850",
        saving: "—"
      },
      {
        item: "8-class pack",
        note: "The best rate an employee can buy alone",
        published: "₹1,563",
        corporate: "₹1,563",
        saving: "—"
      },
      { item: "250+ credit block", published: "₹1,563", corporate: "₹1,563", saving: "Matches best public" },
      { item: "500+ credit block", published: "₹1,563", corporate: "₹1,400", saving: "10% below public" },
      { item: "1,000+ credit block", published: "₹1,563", corporate: "₹1,300", saving: "17% below public" }
    ]
  },
  {
    title: "On-site & hosted classes",
    columns: ["Participants", "Per session", "Per head"],
    rows: [
      { item: "Single hosted class at your office", published: "Up to 25", corporate: "₹35,000", saving: "₹1,400" },
      { item: "24+ sessions a year", note: "A fortnightly rhythm", published: "Up to 25", corporate: "₹32,500", saving: "₹1,300" },
      { item: "48+ sessions a year", note: "A weekly rhythm", published: "Up to 25", corporate: "₹30,000", saving: "₹1,200" },
      { item: "Offsites & wellness days", note: "Curated multi-session formats", published: "By design", corporate: "From ₹1,50,000", saving: "—" }
    ]
  }
];

export const INCLUDED = [
  { title: "A dedicated programme partner", text: "A named account lead and quarterly reviews." },
  { title: "Launch communications, done for you", text: "Co-branded emails, creatives and posters from week one." },
  { title: "Monthly participation reporting", text: "Enrolment, attendance and engagement, every month." },
  { title: "A quarterly team experience", text: "One hosted experience each quarter to keep enrolment high." },
  { title: "Guest passes built in", text: "The programme grows by word of mouth." },
  { title: "Simple, consolidated billing", text: "One GST-compliant invoice, every location." }
];

export const TERMS = [
  "All rates are exclusive of GST and benchmarked to published Mumbai studio rates, centrally maintained and consistent across every city we serve.",
  "Pooled class credits are valid for twelve months from purchase, are shared across your whole team, and may be topped up at any time.",
  "Multi-year partnerships are price-protected for the full length of the agreement.",
  "Hosted-class pricing covers up to 25 participants per session, including instructor, mats and music.",
  "Figures shown are indicative and finalised with your programme design."
];
