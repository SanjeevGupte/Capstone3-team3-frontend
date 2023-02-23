import 'bootstrap/dist/css/bootstrap.min.css';
import QuotesLandingPage from "../../components/quotesHome/QuotesHome";
import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";


function LandingPage() {
    return (
        <div className="Home">
            <Header isAuthenticated={isAuthenticated()} />
            <QuotesLandingPage/>
        </div>
    );   
}

export default LandingPage;