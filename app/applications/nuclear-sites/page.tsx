import { applications } from "@/lib/applications";
import { ApplicationPage } from "@/components/ApplicationPage";

export default function Page() {
  const application = applications.find((item) => item.slug === "nuclear-sites")!;
  return <ApplicationPage application={application} />;
}
