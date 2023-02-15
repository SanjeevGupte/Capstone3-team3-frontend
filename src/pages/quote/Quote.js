import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import GridCards from "../../components/gridcards/GridCards";
import { isAuthenticated } from "../../utils/authHelper";

function Quote(props) {
  return (
    <div className="Quote">
        <Header isAuthenticated={isAuthenticated()} />
        <Slideshow/>
        <GridCards/>
    </div>
  );
}

export default Quote;
