import PortfolioPage from "@/components/PortfolioPage";
import {
  about,
  education,
  experience,
  interests,
  profile,
  projects,
  skills,
  buildInPractice,
} from "@/content_he";

export default function Page() {
  return (
    <PortfolioPage
      content={{ profile, about, buildInPractice, education, experience, interests, projects, skills }}
      isHebrew={true}
    />
  );
}