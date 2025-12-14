import AvailableLoans from "../AvailableLoans/AvailableLoans";
import FAQSection from "../AvailableLoans/FAQSection";
import FeedbackCarousel from "../AvailableLoans/Feedback";
import HeroBanner from "../AvailableLoans/HeroBanner";
import HowItWorks from "../AvailableLoans/HowItWorks";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AvailableLoans></AvailableLoans>
      <HowItWorks></HowItWorks>
      <FeedbackCarousel></FeedbackCarousel>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
