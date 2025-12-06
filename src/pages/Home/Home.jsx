import Plants from "../../components/Home/Plants";
import AvailableLoans from "../AvailableLoans/AvailableLoans";
import FeedbackCarousel from "../AvailableLoans/Feedback";
import HowItWorks from "../AvailableLoans/HowItWorks";

const Home = () => {
  return (
    <div>
      <AvailableLoans></AvailableLoans>
      <HowItWorks></HowItWorks>
      <FeedbackCarousel></FeedbackCarousel>
    </div>
  );
};

export default Home;
