export const siteName = "COBWEB Defence Systems";
export const siteUrl = "https://www.cobweb-defence.tech";
export const positioning = "An early-stage conceptual programme exploring a modular aerial barrier for fixed critical infrastructure. Feasibility, performance and suitability have not been established.";
export const pages = [
  ["Home", positioning],
  ["The concept", "A high-level overview of the COBWEB modular aerial barrier concept."],
  ["Development", "Current development status for the early-stage COBWEB concept."],
  ["Potential applications", "Potential assessment contexts for the COBWEB concept."],
  ["Partnerships", "Non-sensitive partnership introductions for the COBWEB programme."],
  ["Threat context", "High-level context for fixed-infrastructure resilience."],
  ["About COBWEB", "About the conceptual programme and its website operator."],
  ["Contact", "Enquiry information for relevant organisations."],
  ["Privacy", "Privacy information for this public information website."],
  ["Cookies", "Cookie information for this website."],
  ["Terms of use", "Terms for this public information website."],
  ["Export-control statement", "General export-control information."]
] as const;
export function pageMetadata(title: string, description: string) {
  return { title, description };
}