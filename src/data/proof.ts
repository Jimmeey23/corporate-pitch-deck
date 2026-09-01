/**
 * First-party proof points.
 *
 * ⚠️  THESE ARE PLACEHOLDER VALUES. Replace every number below with the real
 *     figure from the studio management system before this deck is shown to
 *     anyone. There is no longer a warning rendered on the slide itself, so
 *     nothing will stop an unverified number reaching a prospect except this
 *     comment. A wrong number here is worse than no number: these are the only
 *     claims in the deck a prospect can hold us to.
 *
 * Where each figure comes from:
 *   attendanceRate    - attended bookings ÷ total bookings, corporate members, trailing 12m
 *   sessionsPerMonth  - mean attended sessions per active member per month
 *   retention12m      - % of members active 12 months after first class
 *   fillRate          - booked seats ÷ available seats, all classes
 *   nps               - corporate cohort NPS, most recent survey
 */
export interface ProofStat {
  value: number;
  format: (n: number) => string;
  label: string;
  context: string;
}

export const PROOF_STATS: ProofStat[] = [
  {
    value: 68,
    format: (n) => `${Math.round(n)}%`,
    label: "Attendance rate across corporate members",
    context: "Typical corporate gym benefit utilisation sits near 12% a month"
  },
  {
    value: 6.4,
    format: (n) => n.toFixed(1),
    label: "Attended sessions per member, per month",
    context: "A benefit that becomes a habit, not a card in a wallet"
  },
  {
    value: 71,
    format: (n) => `${Math.round(n)}%`,
    label: "Members still active at 12 months",
    context: "Boutique-fitness benchmark is roughly 50-60%"
  },
  {
    value: 62,
    format: (n) => `${Math.round(n)}`,
    label: "Corporate member NPS",
    context: "Measured across the corporate cohort at the last survey"
  }
];

/** Replace with a real, named, approved partner story. */
export const CASE_STUDY = {
  client: "A 240-person financial-services firm, BKC",
  challenge:
    "A gym reimbursement benefit sat on the books for two years with single-digit utilisation. HR wanted something people would actually use, and something they could report on.",
  intervention:
    "Fortnightly hosted classes on site for one quarter, then a tiered membership menu opened to the teams who had already built the habit.",
  results: [
    { label: "Enrolment in the first quarter", value: "31%", note: "of eligible employees" },
    { label: "Attendance across the year", value: "68%", note: "of booked sessions" },
    { label: "Attrition in the enrolled cohort", value: "-4pp", note: "vs. the rest of the business" }
  ],
  quote:
    "It is the first benefit we have offered where people ask us when the next session is.",
  attribution: "Head of People (name and logo on request)"
};

/** Replace with logos in /public/images/logos and real partner names. */
export const PARTNER_LOGOS: string[] = [];
export const PARTNER_COUNT = 0;
