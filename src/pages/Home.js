import { Summary, Testimonials, Skills, Gallery, Ticker } from "../components/";

export default function Home(resumeData) {
  return (
    <div>

      <Summary data={resumeData.data.main} />
      <Ticker data = {resumeData.data} />
      <Testimonials data={resumeData.data.main} />
      <Skills data={resumeData.data} />
    
     
      <Gallery />
    </div>
  );
}
