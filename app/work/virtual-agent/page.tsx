import type { Metadata } from "next";
import { CaseStudy, type CaseData } from "@/components/case-study";

export const metadata: Metadata = {
  title: "Virtual Agent — Designing a voice, not a bot · NPSIN",
  description:
    "An AI voice-agent platform for enterprise contact centers. One designer, full width: brand identity, bilingual guidelines, agent-configuration platform, and ops dashboard.",
};

const data: CaseData = {
  slug: "/work/virtual-agent",
  cover: "/images/virtual-agent-cover.jpg",
  coverFit: "cover",
  brandLogo: "/images/virtual-agent-logo.png",
  kicker: "AI Product + Brand · Enterprise voice",
  title: "Designing a voice, not a bot",
  subhead:
    "Virtual Agent is an AI voice-agent platform for enterprise contact centers in insurance, banking, and finance. I designed it across its full width — from the logomark and bilingual brand guidelines to the platform where teams build conversations, and the dashboard where they watch them run.",
  thesis: "In a voice product, the voice is the interface. Tone, pacing, and timing aren't polish — they're the core UX.",
  snapshot: [
    ["Role", "UX/UI Designer (brand + product)"],
    ["Timeline", "March 2026 – ongoing · MVP in pilot"],
    ["Team", "Designer (me) · Business · Dev · ML engineers"],
    ["Industry", "Enterprise contact centers — insurance, banking, finance"],
  ],
  impact: ["Brand Identity", "TH/EN Guidelines", "Agent Platform", "Ops Dashboard"],
  sections: [
    {
      n: "01",
      title: "When call centers can't grow with the business",
      blocks: [
        { t: "p", text: "Large financial businesses — insurers, banks, lenders — live on the phone. Payment reminders, promotion offers, follow-ups, questions: millions of routine calls that must happen, every month." },
        { t: "p", text: "But a call center scales in one currency only: people. Twenty agents can take twenty calls. Quality holds only as long as humans can hold it — through fatigue, turnover, and training cycles. The ceiling is structural, and business growth keeps pressing against it." },
        { t: "callout", text: "The question was never “how do we replace agents?” It was “how do we break the 1-person-1-call ceiling — without losing the human quality that makes calls work?”" },
        { t: "p", text: "The vision: AI agents absorb the routine at scale — reminders, notifications, prescreening — so the same twenty humans handle the conversations that genuinely need a person. And in this industry there's a catch that shapes everything: outbound calls from financial companies already fight suspicion. A call that feels robotic doesn't just fail — it gets hung up on before it starts." },
        { t: "art", src: "/images/va-capacity.jpg", label: "Human call centers scale in one currency — people; the ceiling is structural (illustrative)" },
      ],
    },
    {
      n: "02",
      title: "People don't resist voices that sound human",
      blocks: [
        { t: "p", text: "The core insight sounds obvious but changes everything: the failure mode of outbound bots isn't wrong answers — it's that people hang up before the bot gets to answer anything. The feeling of “I'm talking to a robot” creates resistance in the first seconds." },
        { t: "p", text: "Conceptually, the system works on two levers: intent — understanding what the caller means and where the conversation should go — and lag — managing the rhythm and response timing so the exchange flows at a human pace. A reply that's correct but lands half a second too late breaks the illusion of conversation; the design of timing matters as much as the design of words." },
        { t: "sub", text: "The tension I chose to address head-on" },
        { t: "p", text: "The better the voice, the louder the question: should a caller know they're talking to an AI? In finance — where trust is the entire product — we treated naturalness and transparency as design constraints to balance, not a trade to win. The call is made in the first seconds: the agent opens by identifying itself as an intelligent assistant. Disclosure isn't buried in fine print or left for the caller to infer — it's the first thing said, so the naturalness that follows is earned honestly, never used to deceive." },
        { t: "art", src: "/images/va-voice.jpg", label: "In a voice product, the voice is the interface — tone, pacing, and timing (illustrative)" },
      ],
    },
    {
      n: "03",
      title: "Designing the tool that designs conversations",
      blocks: [
        { t: "quote", text: "I didn't design the conversations. I designed the tool that lets other people design them." },
        { t: "p", text: "The platform's intended users are operations and business teams — not programmers. They configure what an agent says and how it responds to each intent, for the routine outbound work the agent handles: prescreening and notifications. The design goal is to make conversation-building accessible without flattening the flexibility real campaigns need — reminders, renewal offers, follow-ups, each with its own branching. At MVP that goal isn't fully reached: configuring an agent still demands real technical understanding, and closing that gap is the next design problem the product has to solve." },
        { t: "sub", text: "One decision, in full — what happens when a caller goes off-script." },
        { t: "p", text: "Context — Configuring an agent is heavy work: many technical fields, enough system understanding that it isn't something a business user picks up casually. And on the caller's side the stakes are sharp — if the configured intents don't cover what someone says, or they ask a question the flow was never built for, the agent ends the call. Off-script isn't a detour; it's a dead end." },
        { t: "p", text: "Options — (1) Make the agent broadly flexible enough to field anything, in or out of flow. (2) Keep the flow bounded, let ops author their own rules freely, and put the design effort into the agent's wording so callers rarely need to leave the flow at all." },
        { t: "p", text: "Trade-off — Flexibility isn't free in a voice product. The more open-ended the agent has to be, the more it has to reason over — and that surfaces as latency. A reply that's correct but arrives slow breaks the illusion of conversation. Chasing coverage trades against the one thing that makes a voice agent believable: rhythm." },
        { t: "p", text: "The call — Keep the flow deliberately bounded and give ops free rein over their rules, but move the hardest work upstream, into language. If the agent's first prompt is clear enough that a caller understands and answers correctly the first time, they don't drift off-script in the first place. Clarity does the work that flexibility can't afford." },
        { t: "sub", text: "The dashboard closes the loop on that call." },
        { t: "p", text: "Once agents run, teams need to see them run. The campaign dashboard is designed so a non-technical reader can read agent health in one glance: sentiment, call outcomes, and where callers' intent actually landed, up top — filterable across daily, weekly, monthly, or lifetime. And “repetition requests” is a first-class metric: how often callers ask the agent to repeat itself. That number is the operational readout of the clarity call. If the wording is doing its job, repetition stays low; when it climbs, ops can see exactly which agent needs its language tightened. A design decision becomes a number a non-technical team can act on." },
        { t: "p", text: "The platform and dashboard are confidential — not shown here even as mockups. This case carries on brand and reasoning instead." },
      ],
    },
    {
      n: "04",
      title: "A brand that sells trust to enterprises",
      blocks: [
        { t: "p", text: "Enterprise buyers in finance don't buy features — they buy someone safe to put between them and their customers. The brand had to say “advanced” and “trustworthy” in the same breath: too playful and it reads as a startup toy; too corporate and it disappears into every other vendor deck." },
        { t: "sub", text: "The logomark" },
        { t: "p", text: "I designed the logomark myself. The mark leads, telling the brand's story through form: triangles that build a “V” for Virtual, extended by a cursor-like shape for Agent — intelligent and forward-moving, pointing ahead rather than sitting still. The wordmark then carries that same identity into bold, confident type. What holds the two halves together is the smallest detail: a triangle in the mark's signature hue, standing in for the dot above the “i” in Virtual — a quiet bridge that fuses logomark and wordmark into one identity, not two elements placed side by side." },
        { t: "sub", text: "Bilingual guidelines" },
        { t: "p", text: "The guidelines run in Thai and English — and the hard part isn't translation, it's register. Thai formal enough for a bank must still sound like a person, not a legal notice. Every voice-and-tone rule had to hold in both languages, for both readers: the enterprise client reviewing the brand, and the team writing what the agent says." },
        { t: "quote", text: "Brand voice and agent voice are the same design problem. A brand that promises “human, professional, calm” and an agent that sounds hurried break the same trust." },
        { t: "art", src: "/images/virtual-agent-logo.png", light: true, label: "Virtual Agent logomark — the mark I designed: triangles building a “V,” extended into a cursor for “Agent”" },
      ],
    },
    {
      n: "05",
      title: "What shipped & what it enables",
      blocks: [
        { t: "p", text: "The platform is an MVP in pilot with trial clients in insurance, banking, and finance, ahead of a full launch. Client names and details are confidential — what I can show is what the system is built to make possible:" },
        { t: "list", items: [
          "The 1:1 ceiling is gone. Routine calls — reminders, notifications, prescreening — run at whatever scale the campaign needs, with escalation to humans built into the flow.",
          "Campaigns live in one place. Conversations are configured, launched, and monitored from a single platform — built to be owned by ops, with the honest caveat that at MVP configuring one still takes technical fluency the next iteration is meant to remove.",
          "One brand, everywhere. From the guidelines PDF to the voice on the line to the dashboard UI — a single, coherent character.",
        ] },
        { t: "p", text: "Delivered end-to-end: brand identity · bilingual TH/EN guidelines · agent-configuration platform · campaign ops dashboard. Client metrics are confidential — I'm happy to walk through the design process in detail in conversation." },
      ],
    },
  ],
  learnings: [
    "Designing sound is not designing screens. On a screen, users forgive a slow element; in a conversation, a half-second of wrong silence changes what the caller believes. Voice taught me to design in the dimension of time — where latency isn't a performance metric, it's tone.",
    "A designer can — and sometimes must — go into the machine. This was the project where I learned the AI craft hands-on: shaping conversation flows, defining intents, and understanding enough of how the model behaves to design with it rather than around it. Working shoulder to shoulder with ML and dev, that technical fluency wasn't a detour from design — it was what made the design real.",
    "Naming is design too. It's “Virtual Agent,” not “Call Bot” — the name holds the vision: virtual communication beyond the call center. The product grew into a brand because it was named like one.",
  ],
};

export default function Page() {
  return <CaseStudy data={data} />;
}
