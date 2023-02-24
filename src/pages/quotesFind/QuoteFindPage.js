import 'bootstrap/dist/css/bootstrap.min.css';
import QuotesFindPage from "../../components/quotesFind/QuotesFind";
import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";


function QuotesFindPg() {
    return (
        <div className="QuotesFind">
            <Header isAuthenticated={isAuthenticated()} />
            <QuotesFindPage/>
        </div>
    );   
}

export default QuotesFindPg;