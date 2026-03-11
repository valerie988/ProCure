
import Hero from "../../components/Hero";
import Intro from "../../components/Intro";
import KeyServices from "../../components/KeyServices";


const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Intro />
      <KeyServices />
     
    </div>
  );
};

export default HomePage;