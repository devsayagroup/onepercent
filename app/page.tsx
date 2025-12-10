
import HeroSection from '@/components/section/Hero'
import AboutSection from '@/components/section/About';
import RoomsSection from '@/components/section/Room';
import MemberSection from '@/components/section/Members';
import ExperiencesSection from '@/components/section/Experiences';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <RoomsSection/>
      {/* <MemberSection/> */}
      <ExperiencesSection/>
    </>
  );
}
