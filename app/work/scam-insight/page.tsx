import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Scam Insight Dashboard — Making invisible damage visible · NPSIN",
  description:
    "A data platform aggregating scam intelligence across major organizations, with AI-assisted query and summarization — designed to make the scale of scam damage legible to analysts and the public.",
};

const data: CaseData = {
  kicker: "Short case · Data platform · Public communication",
  title: "Making invisible damage visible",
  subhead:
    "Scam losses are a national-scale problem that most people only see one victim at a time. This dashboard aggregates intelligence from multiple major organizations and uses AI-assisted query and summarization to make the true scale legible — to analysts and to the public.",
  snapshot: [
    ["Role", "UX/UI Designer"],
    ["Timeline", "~2 months"],
    ["Team", "Business unit · Designer (me) · Dev"],
    ["Scope", "Dashboard design · Data visualization · AI-assisted query UX"],
  ],
  sections: [
    {
      n: "01",
      title: "Fragmented data, one blurred picture",
      blocks: [
        { t: "p", text: "Scam damage in Thailand is enormous but fragmented: each bank, each platform, each agency sees only its own slice. Data lives in silos, formats differ, and the public hears anecdotes instead of scale. The design challenge: one place where fragmented data becomes a shared, readable picture — for two very different audiences at once." },
      ],
    },
    {
      n: "02",
      title: "Two audiences, one source of truth",
      blocks: [
        { t: "p", text: "Analysts need depth: filters, cross-source comparison, drill-down. The public needs clarity: what's happening, how big, am I at risk. Designing for both meant separating “explore” from “understand” — not with layered disclosure on one screen, but with two distinct surfaces." },
        { t: "p", text: "For the organizations and their analysts: a set of purpose-built dashboards, each screen reporting one topic for one user group, so depth never collapses into a single overloaded view. For the public: a separate, plain-language AI search that reports the situation openly — the same intelligence, reshaped for someone who just wants to know how big the problem is and whether they're at risk." },
        { t: "sub", text: "AI-assisted query, with its seams visible" },
        { t: "p", text: "The AI layer lets users ask questions in plain language and get summarized answers from aggregated data — turning “query skill” from a gatekeeper into a given. The design work was trust calibration: because an answer is stitched together from several organizations' data, it carries its provenance with it. Each part of a summary is tagged with the source it was drawn from, so a reader can see the seams — which slice of the picture came from where — instead of trusting one confident-sounding paragraph." },
        { t: "art", label: "Silos → one picture (abstract, fictional data)" },
      ],
    },
    {
      n: "03",
      title: "What I can show",
      blocks: [
        { t: "p", text: "This work sits close to sensitive, multi-organization data. The public version of this case stays abstract by design — no organization names, no real figures, no internal data structures." },
        { t: "quote", text: "Full case study with sanitized visuals: available upon request." },
        { t: "p", text: "Ask me about this case — napasin.int@gmail.com" },
      ],
    },
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
