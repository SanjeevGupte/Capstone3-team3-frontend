import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { isAuthenticated } from "../../utils/authHelper";

function Agent(props) {
  return (
    <div className="Home">
        <Header isAuthenticated={isAuthenticated()} />
        <Hero />
    </div>
  );
}

export default Agent;
