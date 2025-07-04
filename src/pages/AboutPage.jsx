import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <div class="style-color">
    <div class="body">
        <h2><Header/></h2>
          <div class="inner-body">
        <div class="page-style">
        <h1 class="float-text"><font color="blue">About Vivekanand College</font></h1>
        <p align="left">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
        <p align="left">Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p><hr></hr>
        
        <h3 align="left">Our Mission</h3>
        <ul>
      <li>To provide high-quality, accessible education across various disciplines.</li>
      <li>To foster research, innovation, and creativity among students and faculty.</li>
      <li>To cultivate a diverse and inclusive learning environment.</li>
      <li>To instill strong ethical values and leadership qualities.</li>
    </ul><hr></hr>

    <h3 align="left">Our Values</h3>
    <p align="left">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p><hr></hr>

 <h3 align="left">Our History</h3>
<p align="left">[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default AboutPage;