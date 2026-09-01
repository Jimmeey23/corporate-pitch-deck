/**
 * One set of assumptions behind every rupee figure the deck derives for itself.
 *
 * Slides 02, 03 and 06 all argue from the same arithmetic. Keeping the inputs
 * here means a prospect who checks one slide against another finds them
 * consistent - and means changing an assumption changes the whole deck, rather
 * than leaving one slide quietly contradicting the next.
 *
 * These are DERIVED figures, not citations. Every one is arithmetic a buyer can
 * redo on the back of an envelope, which is the point: nothing here depends on
 * them trusting a study.
 */
export const ILLUSTRATIVE = {
  /** An illustrative mid-size corporate office. */
  headcount: 500,
  /** Average cost to company across the cohort. */
  ctc: 2500000,
  /** Annual voluntary attrition. Broadly typical of Indian corporate offices. */
  attrition: 0.18,
  /**
   * Cost of replacing a mid-to-senior hire, in months of CTC. 7.5 is the
   * midpoint of the widely used 6-9 month range - recruitment fees, notice
   * overlap, onboarding and the productivity ramp.
   */
  replacementMonths: 7.5,
  workingDays: 240,
  /** Sick days avoided per active member per year. Deliberately conservative. */
  sickDaysAvoided: 3,
  /**
   * Productivity drag from people who are at work but unwell or disengaged.
   * Presenteeism is consistently reported as the largest single component of
   * the wellbeing cost, and 5% is at the cautious end of published estimates.
   */
  presenteeismDrag: 0.05,
  /** Attrition improvement modelled on an enrolled cohort. Two points. */
  attritionDelta: 0.02
} as const;

const M = ILLUSTRATIVE;

/** Cost of losing one person at a given CTC. */
export const replacementCost = (ctc: number = M.ctc) => ctc * (M.replacementMonths / 12);

/** Cost of one working day of that person's time. */
export const dayRate = (ctc: number = M.ctc) => ctc / M.workingDays;

/** People who walk out of the illustrative business each year. */
export const ANNUAL_EXITS = M.headcount * M.attrition;

/** What replacing them costs. */
export const ATTRITION_BILL = ANNUAL_EXITS * replacementCost();

/** Days lost to sickness across the business, valued at the day rate. */
export const ABSENTEEISM_BILL = M.headcount * M.sickDaysAvoided * dayRate();

/** The quiet one: people at their desks, not at their best. */
export const PRESENTEEISM_BILL = M.headcount * M.ctc * M.presenteeismDrag;

export const TOTAL_INACTION_BILL = ATTRITION_BILL + ABSENTEEISM_BILL + PRESENTEEISM_BILL;

/** Returned by a two-point improvement in attrition across the business. */
export const ATTRITION_UPSIDE = M.headcount * M.attritionDelta * replacementCost();

/* ------------------------- The unused-benefit trap ------------------------- */

/**
 * A benefit's real price is not what it costs per head - it is what it costs
 * per head who actually uses it. Corporate gym benefits in India are commonly
 * reported at low double-digit monthly utilisation; we model 12%.
 */
export const GYM_BENEFIT = {
  perHead: 15000,
  utilisation: 0.12
};

export const GYM_ANNUAL_SPEND = M.headcount * GYM_BENEFIT.perHead;
export const GYM_ACTUAL_USERS = M.headcount * GYM_BENEFIT.utilisation;
export const GYM_COST_PER_USER = GYM_ANNUAL_SPEND / GYM_ACTUAL_USERS;
