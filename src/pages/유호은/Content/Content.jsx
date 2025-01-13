import "./Content.css";
import { InfoSection } from "./InfoSection/InfoSection";
import { ProfileSection } from "./ProfileSection/ProfileSection";

export function Content() {
  return (
    <div className="container" id="main-content">
      <ProfileSection />
      <InfoSection />
    </div>
  );
}
