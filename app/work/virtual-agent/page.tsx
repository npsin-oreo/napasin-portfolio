import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Virtual Agent: designing a voice, not a bot · NPSIN",
  description:
    "An AI voice-agent platform for enterprise contact centers. One designer, full width: brand identity, bilingual guidelines, agent-configuration platform, and ops dashboard. POC piloted; MVP redesign in development.",
};

const data: CaseData = {
  slug: "/work/virtual-agent",
  cover: "/images/virtual-agent-cover.jpg",
  coverFit: "cover",
  brandLogo: "/images/virtual-agent-logo.png",
  kicker: "AI product + brand · Enterprise voice",
  title: "Designing a voice, not a bot",
  subhead:
    "Virtual Agent is an AI voice-agent platform for enterprise contact centers in insurance, banking, and finance. I designed it across its full width, from the logomark and bilingual brand guidelines to the platform where teams build conversations, and the dashboard where they watch them run.",
  thesis: "In a voice product, the voice is the interface. Tone, pacing, and timing aren't polish; they're the core UX.",
  tldr: [
    "An AI voice-agent platform for enterprise contact centers, designed across its full width: brand, platform, and dashboard.",
    "The POC piloted on real calls with enterprise clients; the MVP, a redesign that folds in what the pilot taught us, is now in development.",
  ],
  snapshot: [
    ["Role", "End-to-end Product & Service Designer (solo designer, brand and product)"],
    ["I owned", "Brand identity and TH/EN guidelines, the agent-configuration platform UX/UI, and the ops dashboard"],
    ["Team", "Business, engineering, and ML, who own the conversation flows and intents themselves"],
    ["Status", "POC piloted with enterprise trial clients · MVP redesign in development"],
  ],
  impact: ["Brand identity", "TH/EN guidelines", "Agent platform", "Ops dashboard"],
  sections: [
    {
      n: "01",
      kicker: "The problem",
      title: "When call centers can't grow with the business",
      blocks: [
        { t: "lead", text: "Large financial businesses, insurers, banks, and lenders, live on the phone. Payment reminders, promotion offers, follow-ups, questions: millions of routine calls that must happen, every month. But a call center scales in one currency only: people." },
        { t: "p", text: "Twenty agents can take twenty calls. Quality holds only as long as humans can hold it, through fatigue, turnover, and training cycles. The ceiling is structural, and business growth keeps pressing against it." },
        { t: "callout", text: "The question was never “how do we replace agents?” It was “how do we break the one-person-one-call ceiling without losing the human quality that makes calls work?”" },
        { t: "p", text: "The vision: AI agents absorb the routine at scale, the reminders, notifications, and prescreening, so the same twenty humans handle the conversations that genuinely need a person. And in this industry there's a catch that shapes everything: outbound calls from financial companies already fight suspicion. A call that feels robotic doesn't just fail; it gets hung up on before it starts." },
        { t: "art", src: "/images/va-capacity.jpg", label: "Human call centers scale in one currency, people, and the ceiling is structural (illustrative)" },
      ],
    },
    {
      n: "02",
      kicker: "The insight",
      title: "People don't resist voices that sound human",
      blocks: [
        { t: "lead", text: "The core insight sounds obvious but changes everything: the failure mode of outbound bots isn't wrong answers, it's that people hang up before the bot gets to answer anything. The feeling of “I'm talking to a robot” creates resistance in the first seconds." },
        { t: "duo", items: [
          { icon: "target", title: "Intent", text: "Understanding what the caller means and where the conversation should go. Get it wrong and the agent answers a question nobody asked." },
          { icon: "clock", title: "Lag", text: "The rhythm and timing of the reply. A response that's correct but lands half a second late breaks the illusion of conversation; timing is designed as carefully as words." },
        ] },
        { t: "sub", text: "The tension I chose to address head-on" },
        { t: "p", text: "The better the voice, the louder the question: should a caller know they're talking to an AI? In finance, where trust is the entire product, we treated naturalness and transparency as design constraints to balance, not a trade to win. The agent opens by identifying itself as an intelligent assistant. Disclosure isn't buried in fine print; it's the first thing said, so the naturalness that follows is earned honestly, never used to deceive." },
        { t: "art", src: "/images/va-voice.jpg", label: "In a voice product, the voice is the interface: tone, pacing, and timing (illustrative)" },
      ],
    },
    {
      n: "03",
      kicker: "What I designed · The platform",
      title: "Designing the tool that designs conversations",
      blocks: [
        { t: "band", text: "I didn't design the conversations. I designed the tool that lets other people design them." },
        { t: "lead", text: "The platform's intended users are operations and business teams, not programmers. They configure what an agent says and how it responds to each intent, for the routine outbound work the agent handles. The goal is conversation-building without flattening the flexibility real campaigns need, and at MVP that goal isn't fully reached: configuring an agent still demands real technical understanding, and closing that gap is the next design problem." },
        { t: "sub", text: "One decision, in full: what happens when a caller goes off-script." },
        { t: "steps", items: [
          { label: "Context", text: "Configuring an agent is heavy, technical work. And on the caller's side the stakes are sharp: if the configured intents don't cover what someone says, the agent ends the call. Off-script isn't a detour; it's a dead end." },
          { label: "Options", text: "Make the agent broadly flexible enough to field anything, in or out of flow. Or keep the flow bounded, let ops author their own rules freely, and put the design effort into the agent's wording instead." },
          { label: "Trade-off", text: "Flexibility isn't free in a voice product. The more open-ended the agent, the more it reasons over, and that surfaces as latency. Chasing coverage trades against the one thing that makes a voice agent believable: rhythm." },
          { label: "The call", text: "Keep the flow deliberately bounded, and move the hardest work upstream into language. If the agent's first prompt is clear enough that a caller answers correctly the first time, they don't drift off-script at all. Clarity does the work that flexibility can't afford." },
        ] },
        { t: "sub", text: "The dashboard closes the loop on that call." },
        { t: "p", text: "Once agents run, teams need to see them run. The campaign dashboard is designed so a non-technical reader can read agent health in one glance: sentiment, call outcomes, and where callers' intent actually landed. And “repetition requests” is a first-class metric: how often callers ask the agent to repeat itself. If the wording is doing its job, repetition stays low; when it climbs, ops can see exactly which agent needs its language tightened. A design decision becomes a number a non-technical team can act on." },
        { t: "p", text: "The platform and dashboard are confidential, not shown here even as mockups. This case carries on brand and reasoning instead." },
      ],
    },
    {
      n: "04",
      kicker: "What I designed · The brand",
      title: "A brand that sells trust to enterprises",
      blocks: [
        { t: "lead", text: "Enterprise buyers in finance don't buy features; they buy someone safe to put between them and their customers. The brand had to say “advanced” and “trustworthy” in the same breath: too playful and it reads as a startup toy; too corporate and it disappears into every other vendor deck." },
        { t: "sub", text: "The logomark" },
        { t: "p", text: "I designed the logomark myself. The mark leads, telling the brand's story through form: triangles that build a “V” for Virtual, extended by a cursor-like shape for Agent, intelligent and forward-moving. What holds it together is the smallest detail: a triangle in the mark's signature hue standing in for the dot above the “i” in Virtual, a quiet bridge that fuses logomark and wordmark into one identity." },
        { t: "sub", text: "Bilingual guidelines" },
        { t: "p", text: "The guidelines run in Thai and English, and the hard part isn't translation, it's register. Thai formal enough for a bank must still sound like a person, not a legal notice. Every voice-and-tone rule had to hold in both languages, for both readers: the enterprise client reviewing the brand, and the team writing what the agent says." },
        { t: "quote", text: "Brand voice and agent voice are the same design problem. A brand that promises “human, professional, calm” and an agent that sounds hurried break the same trust." },
        { t: "art", src: "/images/virtual-agent-logo.png", light: true, label: "Virtual Agent logomark, the mark I designed: triangles building a “V,” extended into a cursor for “Agent”" },
      ],
    },
    {
      n: "05",
      kicker: "How we worked",
      title: "Going into the machine",
      blocks: [
        { t: "lead", text: "The conversation flows and intents themselves are built by the ML team; my job was to design everything people touch around them. Doing that honestly meant going into the machine: learning how intents resolve, where latency comes from, and what the model can and can't hold, deep enough to design with it rather than around it." },
        { t: "p", text: "That fluency shaped real decisions. Latency budgets became a design constraint, not an engineering footnote: it's why the off-script answer is bounded flow plus sharper language instead of an open-ended agent. And when a platform control implied something the model couldn't honor, we caught it in design reviews with ML, before it became a broken promise in a client call." },
      ],
    },
    {
      n: "06",
      kicker: "Where it stands",
      title: "POC proven on real calls. MVP in the making.",
      blocks: [
        { t: "lead", text: "The POC version has already been piloted on real usage with enterprise trial clients in insurance, banking, and finance. What we learned there is now driving the MVP: a redesign of the platform with expanded functionality, built to make configuring and running agents genuinely efficient. Client names and metrics stay confidential." },
        { t: "list", items: [
          "Shipped and in use: the brand identity and bilingual TH/EN guidelines, from logomark to voice-and-tone.",
          "Piloted: the POC platform and dashboard, tested on real outbound calls with trial clients.",
          "In development: the MVP redesign, folding pilot learnings into a platform ops teams can truly own.",
        ] },
        { t: "p", text: "Delivered end to end so far: brand identity, bilingual guidelines, the agent-configuration platform, and the campaign ops dashboard. I'm happy to walk through the design process in detail in conversation." },
      ],
    },
  ],
  learnings: [
    "Designing sound is not designing screens. On a screen, users forgive a slow element; in a conversation, a half-second of wrong silence changes what the caller believes. Voice taught me to design in the dimension of time, where latency isn't a performance metric, it's tone.",
    "A designer can, and sometimes must, go into the machine. The flows and intents belong to the ML team, but designing the tool around them meant learning their mechanics deep enough to design with the model rather than around it. That technical fluency wasn't a detour from design; it was what made the design real.",
    "Naming is design too. It's “Virtual Agent,” not “Call Bot,” and the name holds the vision: virtual communication beyond the call center. The product grew into a brand because it was named like one.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
