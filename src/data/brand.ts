/**
 * Third-party recognition and the operating facts a corporate buyer weighs.
 *
 * Deliberately NOT on this slide: founder biographies and a studio-by-studio
 * chronology. A People or Procurement lead is not buying the founding story -
 * they are asking whether this brand is credible enough to put in front of
 * their CEO, and whether it can actually serve their teams.
 *
 * Every entry below is externally verifiable. Sources:
 *   Good Housekeeping   - physique57.com/blog/physique-57-award-wins-2022-best-overal-barre-workout/
 *   Shape               - physique57.com/blog/physique-57-voted-best-at-home-barre-workout-by-shape/
 *   The Fit Guide       - physique57.com/blog/physique-57-joins-elite-list-of-5-star-fitness-studios-by-the-fit-guide/
 *   Vogue Beauty Awards - physique57.com/buzz/ (Vogue India, 31 Jul 2022)
 *   Barre Certification - physique57.com/blog/introducing-barre-certification/
 *   Press index         - physique57.com/buzz/
 *   India launch        - physique57india.com (Four Seasons Mumbai, April 2018)
 *   Bengaluru studio    - physique57india.com/bangalore/ (Vittal Mallya Road)
 *
 * ⚠️  Re-check before each pitch. Awards get superseded, and an out-of-date
 *     claim is the one thing on this slide a prospect can catch.
 */

export interface Award {
  title: string;
  body: string;
  year?: string;
  note?: string;
}

export const AWARDS: Award[] = [
  {
    title: "Best Overall Barre Workout",
    body: "Good Housekeeping",
    year: "2022",
    note: "Named above every other barre programme reviewed"
  },
  {
    title: "5-Star Award & 5-Star Class Experience",
    body: "The Fit Guide",
    note: "One of only five studios in New York City to earn both"
  },
  {
    title: "Best At-Home Barre Workout",
    body: "Shape",
    note: "The format that now serves hybrid and distributed teams"
  },
  {
    title: "Six Best Brands in the Beauty Business",
    body: "Vogue Beauty Awards, India",
    year: "2022",
    note: "Recognised in the Indian market, not only the American one"
  }
];

/** Publications that have covered the brand. Rendered as chips. */
export const FEATURED_IN = [
  "The New York Times",
  "The Wall Street Journal",
  "Forbes",
  "Vogue India",
  "Architectural Digest India",
  "Good Housekeeping",
  "Shape",
  "Women's Health"
];

export const BRAND_STATS = [
  { value: 2006, format: (n: number) => String(Math.round(n)), label: "Founded in New York" },
  { value: 6, format: (n: number) => `${Math.round(n)} cities`, label: "NY · NJ · Dubai · Bangkok · Mumbai · Bengaluru" },
  { value: 500, format: (n: number) => `${Math.round(n)}+`, label: "On-demand classes" }
];

/**
 * The three facts that answer a buyer's real questions: can you deliver
 * consistently, have you operated at this level before, and can you reach all
 * of our people.
 */
export const OPERATING_PROOF = [
  {
    title: "A proprietary instructor certification",
    text: "Not all barre is created equal - we certify every instructor to one standard, so the class in Mumbai is the class in Manhattan. Consistency is contractual, not aspirational."
  },
  {
    title: "It solves the enrolment problem",
    text: "Wellbeing benefits rarely fail at delivery - they fail at sign-up. A brand your teams already follow removes the hardest part of any rollout: people opt in because they want this particular studio, not because HR asked them twice."
  },
  {
    title: "Studio, on-site and on-demand",
    text: "Three delivery formats from one contract. Head-office teams, satellite offices and fully remote employees are all reachable under the same programme."
  }
];
