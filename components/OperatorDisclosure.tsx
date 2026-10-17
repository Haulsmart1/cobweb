import { operator } from "@/lib/operator";

export function OperatorDisclosure() {
  return <p className="form-note">Website operator: {operator.name}. Company number {operator.companyNumber}. Registered in {operator.jurisdiction}. Registered office: {operator.registeredOffice}. COBWEB is a project, not a separate incorporated company.</p>;
}
