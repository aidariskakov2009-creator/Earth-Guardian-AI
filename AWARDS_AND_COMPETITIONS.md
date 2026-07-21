# Awards & Competitions Guide

This project is well-suited to climate-tech, social-impact, and youth
innovation competitions. Below is guidance for adapting it to specific
programs. **Always read each program's current rules directly before
applying** — deadlines, eligibility, and formats change year to year, and
this document does not substitute for that.

## Programs This Could Fit

| Program | Focus | Why this project could fit |
|---|---|---|
| MIT Solve | Tech solutions to global challenges | Broad climate/environment scope, working demo |
| Conrad Challenge | Student innovation, STEM | Full-stack build + business case docs |
| Diamond Challenge | High school entrepreneurship | Business model + pitch deck included |
| Technovation | Girls/youth-led tech for good | Working app + social impact framing |
| AI for Good (ITU) | AI applied to UN SDGs | Frame the composite-scoring approach as an AI/ML roadmap item (see Technical Architecture's honesty note about what's currently rule-based vs. model-based) |
| WSA Young Innovators | Youth digital innovation | Polished UI, clear documentation |
| Global Youth Challenge | Youth-led social innovation | Community modules (Learning Hub, Volunteer Network) |
| National Founder Cup | Student entrepreneurship | Business model + roadmap |
| UNESCO Innovation Programs | Education & sustainability innovation | Learning Hub module, open research data angle |

## Before You Submit — Checklist

- [ ] Confirm current eligibility rules (age, team size, country) for the
      specific program and year
- [ ] Do **not** present mock data as live/real measurements to judges —
      be upfront that this is a front-end platform on realistic mock data,
      as disclosed in the README
- [ ] Tailor the Pitch Deck outline to the program's actual required format
      and slide count
- [ ] Have a live, working demo link ready (deploy via Vercel/Netlify — the
      project builds cleanly with `npm run build`)
- [ ] Prepare to answer: "What would it take to get real data into this?"
      (Answer is in `TECHNICAL_ARCHITECTURE.md`)
- [ ] Prepare to answer: "What's actually AI here today vs. planned?"
      (Answer: today's "AI-generated" scores are disclosed, transparent
      composite formulas — not a trained model. Be upfront about this if asked.)

## Positioning Advice

Judges for youth/social-impact competitions consistently reward **honesty
about current state + a credible plan**, over polish that oversells maturity.
This project's documentation is deliberately written to support that framing:
lead with what's genuinely built (the interactive product, the design system,
the technical depth of 15 pages and a component library) and be direct about
what's aspirational (real data, real users, a trained prediction model).
