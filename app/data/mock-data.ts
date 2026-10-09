import type {
  PolicyDocument,
  PolicySource,
} from "@/app/types/policy";

export const documents: PolicyDocument[] = [
  { name: "Company_Handbook.pdf", date: "Jun 10, 2025", size: "2.4 MB" },
  { name: "Content_Moderation_Policy.pdf", date: "Jun 10, 2025", size: "1.8 MB" },
  { name: "Prohibited_Content_Policy.pdf", date: "Jun 10, 2025", size: "1.2 MB" },
  { name: "Escalation_Procedure.pdf", date: "Jun 10, 2025", size: "1.5 MB" },
  { name: "Quality_Guidelines.pdf", date: "Jun 10, 2025", size: "1.1 MB" },
  { name: "Appeal_Process.pdf", date: "Jun 10, 2025", size: "982 KB" },
  { name: "Incident_Reporting_SOP.pdf", date: "Jun 10, 2025", size: "1.3 MB" },
  { name: "Employee_Conduct_Policy.pdf", date: "Jun 10, 2025", size: "1.0 MB" },
  { name: "Data_Privacy_Policy.pdf", date: "Jun 10, 2025", size: "1.6 MB" },
  { name: "Customer_Support_SOP.pdf", date: "Jun 10, 2025", size: "1.4 MB" },
];

export const sources: PolicySource[] = [
  {
    name: "Content Moderation Policy.pdf",
    page: "Page 12",
    section: "Threats and Violence",
    relevance: "0.93",
    excerpt:
      "Any content that contains direct threats of violence, credible threats to an individual or group, or promotion of self-harm should be escalated to the appropriate review team...",
  },
  {
    name: "Escalation Procedure.pdf",
    page: "Page 5",
    section: "Escalation Criteria",
    relevance: "0.88",
    excerpt:
      "Cases involving threats, illegal activity, or high-risk content must be escalated immediately to the specialized review team for further assessment and action.",
  },
];

export const recentChats = [
  "When should a moderator escalate a case?",
  "What content requires immediate review?",
  "What is the appeal process?",
  "How do I report an incident?",
];