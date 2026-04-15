import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Benefits from "../components/home/Benefits";
import YogaClasses from "../components/home/YogaClasses";
import MotivationGuide from "../components/motivation/MotivationGuide";
import Programs from "../components/motivation/Programs";
import Testimonials from "../components/motivation/Testimonials";
import CTA from "../components/motivation/CTA";
// import JoinYogaClassesForm from "../components/common/JoinYogaClassesForm";

export default function Home() {

  

  return (
    <>
      <Hero />
      <MotivationGuide />
      {/* <Services /> */}
      {/* <Benefits /> */}
      <Programs />
      <Testimonials />
      {/* <YogaClasses /> */}
      <CTA />
      {/* <JoinYogaClassesForm /> */}
    </>
  );
}
