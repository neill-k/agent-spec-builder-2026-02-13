import type { SpecInput } from "@/lib/spec";

export const presets: Array<{ id: string; label: string; data: SpecInput }> = [
  {
    id: "support-triage",
    label: "Support Triage Agent",
    data: {
      appName: "Support Triage Agent Spec",
      objective:
        "Reduce time-to-first-response by auto-triaging inbound tickets, suggesting replies, and routing to the right queue with human approval.",
      primaryUsers: "Support reps, support lead, on-call engineer",
      context:
        "Inbound tickets arrive via Zendesk. The agent reads the ticket + customer history, classifies severity, suggests a draft response, and routes/escalates based on policy.",
      tools: [
        "Zendesk: read ticket",
        "Zendesk: add internal note",
        "Zendesk: update ticket fields (requires approval)",
        "Knowledge base search",
        "PagerDuty: create incident (requires approval)",
      ].join("\n"),
      dataSources: [
        "Zendesk tickets",
        "Customer CRM (read-only)",
        "Product/ops knowledge base",
        "Incident runbooks",
      ].join("\n"),
      constraints: [
        "No automated external responses without explicit human approval",
        "Respect PII handling policies",
        "Latency: < 10s for suggested triage",
      ].join("\n"),
      successMetrics: [
        "Time-to-first-response reduced by 30%",
        "Correct routing accuracy >= 90%",
        "Escalation precision (avoid false pages)",
      ].join("\n"),
      nonGoals: [
        "Fully autonomous ticket closure",
        "Training custom models",
      ].join("\n"),
      risks: [
        "Misclassification causing missed SLAs",
        "Over-escalation to on-call",
        "PII leakage in logs",
      ].join("\n"),
    },
  },
  {
    id: "sales-rfp",
    label: "RFP / Security Questionnaire Agent",
    data: {
      appName: "RFP Agent Spec",
      objective:
        "Speed up completion of RFPs/security questionnaires by extracting relevant answers from approved sources and generating drafts for review.",
      primaryUsers: "Sales engineer, security/compliance, legal",
      context:
        "Prospects send documents with long lists of questions. The agent searches approved sources (SOC2, policies, product docs) and drafts answers with citations.",
      tools: [
        "Document upload + text extraction",
        "Search in approved policy docs",
        "Citation formatter",
        "Export answers to CSV/Doc",
      ].join("\n"),
      dataSources: [
        "Security policies",
        "SOC2 report (restricted)",
        "Product documentation",
        "Prior approved questionnaires",
      ].join("\n"),
      constraints: [
        "Only use approved sources; no guessing",
        "Citations required for each answer",
        "Access control: SOC2 restricted",
      ].join("\n"),
      successMetrics: [
        "Draft completion time reduced by 50%",
        "Fewer back-and-forth clarifications",
      ].join("\n"),
      nonGoals: [
        "Sending answers directly to customers",
        "Editing source-of-truth documents",
      ].join("\n"),
      risks: [
        "Hallucinated claims without citations",
        "Accidental disclosure of restricted content",
      ].join("\n"),
    },
  },
];
