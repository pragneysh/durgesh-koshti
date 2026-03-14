import AboutHero from "../components/about/AboutHero";
import AboutJourney from "../components/about/AboutJourney";
import MissionVision from "../components/about/MissionVision";
import Founder from "../components/about/Founder";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {

  const baseURL = "https://opensheet.elk.sh/1f93QxOHfDuz2m_gBJcAdhx9JnxBu3c-9A6ygdl3uM8Y";

  return (
    <div className="bg-gray-50">
      <AboutHero baseURL={baseURL} />
      <AboutJourney baseURL={baseURL} />
      <MissionVision baseURL={baseURL} />
      <Founder baseURL={baseURL} />
      <AboutCTA baseURL={baseURL} />
    </div>
  );
}