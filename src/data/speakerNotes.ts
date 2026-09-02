/**
 * Speaker notes, keyed by slide id. Shown only to the presenter, behind the
 * notes button in the deck chrome - never rendered into the slide itself, and
 * never captured by the export.
 *
 * `hook` is the one line to open on. `points` are the beats to hit.
 * `watchFor` is the objection this slide tends to provoke.
 */
export interface SpeakerNote {
  hook: string;
  points: string[];
  watchFor?: string;
}

export const SPEAKER_NOTES: Record<string, SpeakerNote> = {
  cover: {
    hook: "Don't read the slide. Ask what they currently offer, and whether anyone uses it.",
    points: [
      "Get their current benefit named out loud before you present anything - it becomes the thing you compare against all deck.",
      "Ask who else is in the room and what each of them needs to sign off. HR wants adoption, finance wants the number, leadership wants retention.",
      "Set the frame: 20 minutes, five options, you only need two of them."
    ],
    watchFor: "If they say 'we already have a gym tie-up', good. That is slide 3's entire argument."
  },
  opportunity: {
    hook: "This is the only slide where you talk about the market. Keep it under two minutes.",
    points: [
      "Lead with the Deloitte India cost figure - it is the one number in this section a CFO will already have seen.",
      "The 47% workplace-stress figure is the bridge: this is not a lifestyle problem, it is a workplace-design problem, so a workplace intervention is the right lever.",
      "Land the P&L band at the bottom on THEIR headcount. Say their number out loud, not the illustrative one."
    ],
    watchFor: "Do not oversell the macro. They are not buying a market, they are buying an outcome."
  },
  "status-quo": {
    hook: "Lead with the total. Say the number, then stop for a beat before explaining it.",
    points: [
      "Three leaks, not one. Attrition is the one they already track; presenteeism is the biggest and the one nobody budgets against.",
      "The unused-benefit panel is the sharpest thing on the slide - ₹75 lakh spent, sixty people using it, ₹1.25 lakh each. Ask what their own utilisation figure is. They usually cannot produce one.",
      "Everything here is arithmetic, not a study. Say that out loud and offer to rerun it on their headcount - the offer is more persuasive than the numbers.",
      "Use the comparison table as the answer, not the argument. Let them read it while you stay quiet."
    ],
    watchFor: "If they push back on 5% presenteeism, drop it to 2% in conversation. The total is still enormous, and conceding an assumption cheaply buys the rest."
  },
  heritage: {
    hook: "Say the framing out loud: every claim on this slide was made by someone else.",
    points: [
      "Lead with Good Housekeeping and The Fit Guide - one of only five studios in New York to earn both five-star awards. Then stop; do not read all four cards.",
      "The Vogue India award is the one that matters in this room. It says the brand is recognised in their market, not just imported into it.",
      "Pivot fast to the right-hand panel. The awards make them comfortable; the certification, the enrolment argument and the three delivery formats are what they actually have to defend internally.",
      "The certification point pre-empts the biggest objection to any multi-city rollout: will the class in Pune be the class we bought in Mumbai. Yes, and it is contractual."
    ],
    watchFor: "Awards get superseded. Re-confirm src/data/brand.ts before every pitch - a stale award is the one claim here a prospect can catch."
  },
  method: {
    hook: "Sixty seconds. This is brand, not argument - do not linger.",
    points: [
      "Isometric holds, joint-kind, visible change in eight sessions. That is the whole method pitch.",
      "57 minutes is a calendar argument, not a fitness one. Say it that way to a room of busy people.",
      "The community point matters more than it sounds - it is why members return, and return is what the whole deck is selling."
    ]
  },
  roi: {
    hook: "Set their real inputs on screen. Do not present the defaults.",
    points: [
      "Ask for their cohort size and average CTC and change the toggles live. The arithmetic in front of them is worth more than any slide you could have prepared.",
      "Lead with the line that holds at every setting: one departure you prevent pays for several of these memberships. Cohort break-even moves with their inputs - do not promise 'one person' before you have seen their numbers.",
      "Say explicitly that you have NOT used the '$3.27 returned per $1' wellness figure, and why - the 2019 randomised trial did not replicate it. Naming the weak argument you refused to make buys you the strong one."
    ],
    watchFor: "If they challenge 7.5 months of CTC as a replacement cost, ask what number they use. Whatever they say, put it in - the case survives at half."
  },
  architecture: {
    hook: "Do not walk all five. Ask which two are worth opening.",
    points: [
      "The cards are clickable - let them choose, and skip the rest. A deck they steered is a deck they remember.",
      "Point at the per-attended-class line under each price. That is the number that makes a premium rate read as the cheap option.",
      "If they have a flexi-benefits platform, option 01 is the zero-friction start. If they don't, go to 05."
    ]
  },
  "opt-1": {
    hook: "The headline is zero employer cost, not the annual price.",
    points: [
      "Lead with ₹15,675 a month, employee-funded. Never open on ₹1,88,100.",
      "Nothing is budgeted until an employee opts in - this option can be approved without a budget conversation at all.",
      "The 10% corporate saving holds across 3, 6 and 12-month tenures, so short-tenure employees are not penalised."
    ],
    watchFor: "They will ask whether it integrates with their platform. Get the platform name and commit to checking, do not guess."
  },
  "opt-2": {
    hook: "Credits are only spent when someone actually turns up. Say that first.",
    points: [
      "Zero waste is the differentiator: an unused membership still costs; an unused credit does not.",
      "Be upfront that we hold a firm line against 'corporate discounts' that merely match public pricing - then show the 500 and 1,000 tiers that beat it.",
      "Pooled across the whole team, valid 12 months, top up any time. This is the lowest-governance option on the list."
    ],
    watchFor: "The 250-credit tier matches the best public rate rather than beating it. Steer to 500+ or expect the question."
  },
  "opt-3": {
    hook: "This is a retention line item, not a fitness one. Pitch it to whoever owns attrition.",
    points: [
      "Tie it straight back to the breakeven slide: 10 leaders at ₹2.5L is ₹25 lakh; one departure at ₹25L CTC costs ₹15.6L.",
      "Walk the concierge inclusions out loud - two privates a quarter, four guest passes, extra freezes, hosted annual class. It reads as executive care.",
      "The multi-year price promise matters to this buyer specifically: their leadership benefit does not degrade mid-agreement."
    ],
    watchFor: "Equity concerns - 'why only leaders?'. Answer: this sits alongside a broader programme, it does not replace one."
  },
  "opt-4": {
    hook: "This is the option HR can publish without redesigning anything.",
    points: [
      "Three tiers, ready to paste into their benefits handbook as-is.",
      "The 50/30/20 mix is our assumption, not a fact - say so before they say it, and offer to re-model on their actual enrolment each quarter.",
      "Every tier includes something unavailable at the front desk. That exclusivity is what makes it feel like a benefit rather than a discount."
    ]
  },
  "opt-5": {
    hook: "This is the easiest yes in the deck. Use it when the room is hesitant.",
    points: [
      "No commute, no scheduling friction - it consistently draws the highest attendance of any format we run.",
      "Priced per session, not per head, so there is no membership, no seat licence and nothing unused.",
      "Most partners start here and grow into memberships once a following exists. Frame it as a route in, not a lesser option."
    ]
  },
  portfolio: {
    hook: "Hand them the controls. Build their mix in the room.",
    points: [
      "Drag the bars to whatever they just told you about their teams, or type exact figures.",
      "Most partners run two or three programmes, not one - different teams, different goals.",
      "Send the resulting mix in the follow-up email the same day, while the shape of it is still theirs."
    ],
    watchFor: "Do not let the total become the conversation. It is a planning tool, not a quote."
  },
  standard: {
    hook: "This is the de-risking slide. Deliver it as a list of things they no longer have to do.",
    points: [
      "A named account lead means their HR team is not running this programme - we are.",
      "Launch communications are built and delivered by us. That removes the most common reason wellness benefits fail: nobody knew.",
      "Monthly reporting is what turns this from a perk into something they can defend in a leadership review."
    ]
  },
  faq: {
    hook: "Skip it if the room is engaged. Open it if procurement or finance is present.",
    points: [
      "The low-adoption answer and the pricing-fairness answer are the two that matter - go there first.",
      "Multi-year price lock is the finance unlock. Say it even if nobody asks.",
      "If they raise something not on this slide, write it down visibly and commit to a date."
    ]
  },
  roadmap: {
    hook: "Ninety days from signature to a scaled programme. Make the timeline feel small.",
    points: [
      "Weeks 0-2 is design and needs about two hours of their time in total.",
      "The leadership kickoff class in week 3-4 does more for enrolment than any email campaign - push for it.",
      "First reporting pack lands in week 9, well inside their next quarterly review."
    ]
  },
  next: {
    hook: "Make the ask, then stop talking.",
    points: [
      "One design session, one hosted class for 25 people, at our cost, within three weeks. Say it as one sentence and let the silence sit.",
      "The taster costs them nothing and produces attendance data from their own people - that is the argument that survives after you leave the room.",
      "Leave with a date in a diary, not an action item. Offer two specific slots."
    ],
    watchFor: "If they will not commit to a date, ask what needs to happen first and who owns it."
  },
  thanks: {
    hook: "Follow up the same day, while the deck is still open on their screen.",
    points: [
      "Send the deck, their modelled mix from the portfolio slide, and the two proposed taster dates.",
      "Attach the award citations if they showed any scepticism on the recognition slide.",
      "Copy whoever was named as a sign-off but was not in the room."
    ]
  }
};
