import { CampusUnavailable } from "@/components/campus/CampusUnavailable";
// TODO(auth): validate a server session and cohort enrollment before loading CampusContent.
// No private data is imported, fetched or serialized while access is unavailable.
export default function CampusPage() { return <CampusUnavailable />; }
