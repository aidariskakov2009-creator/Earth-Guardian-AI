# Research Paper Outline — Composite Environmental Risk Indices for Public-Facing Dashboards

*This is a structural outline for a research paper or research-competition
submission about the design and evaluation of composite environmental risk
scores — the kind of methodology work that would justify the scoring approach
used in Earth Guardian AI. It is a template to fill in with real analysis, not
a completed paper, and contains no fabricated results or citations.*

## Working Title
"Designing Interpretable Composite Risk Indices for Multi-Domain
Environmental Dashboards"

## Abstract (template)
State the problem (fragmented environmental data), the proposed approach
(a transparent, weighted composite index across climate, water, air, and
disaster indicators), and what a reader should take away (a methodology and
its tradeoffs — not a claim of a validated predictive model).

## 1. Introduction
- Motivate the need for legible, single-number risk communication (compare to
  existing single-number public indices: AQI, UV Index, hurricane categories)
- State clearly that this work is about **index design and communication**,
  not a novel climate-prediction model

## 2. Related Work
- Existing composite indices (AQI methodology, ND-GAIN Country Index, INFORM
  Risk Index) — review their weighting methodologies and public criticism of
  them
- Literature on risk communication and dashboard design for non-expert audiences

## 3. Methodology
- Define candidate input indicators per domain (temperature anomaly, water
  stress ratio, AQI, disaster probability)
- Describe weighting approach (this repository uses fixed, disclosed weights
  as a starting point — a real paper should test sensitivity to weighting
  choices and consider learned weights from historical outcome data)
- Describe validation approach: what ground truth would be used to check
  whether the composite score actually predicts adverse outcomes
  (e.g., historical disaster damage data, insurance claims, mortality data)

## 4. Evaluation Plan
- Sensitivity analysis: how much do rankings change under different weight
  assumptions?
- Comparison against existing single-domain indices for the same locations
- User study: can non-expert users correctly interpret and act on the
  composite score, compared to seeing the four raw components separately?

## 5. Discussion
- Tradeoffs of compressing multi-domain risk into one number (loss of
  nuance vs. gain in legibility)
- Ethical considerations: risk of a flawed index driving real policy or
  investment decisions; need for uncertainty quantification, not just a
  point estimate

## 6. Limitations
- Composite indices are only as good as their inputs; garbage-in-garbage-out
  risk is high when source data quality varies by region (which it does —
  monitoring density is lower in lower-income regions, biasing any global index)

## 7. Future Work
- Replace fixed weights with a model trained against real historical outcome
  data, with proper train/validation/test splits and reported accuracy metrics
- Formal comparison against domain-expert risk assessments

---

**Important:** Do not submit this outline as a finished paper. Any real
submission needs actual data, actual citations to peer-reviewed literature,
and actual evaluation results — none of which are fabricated here.
