import 'bootstrap/dist/css/bootstrap.min.css';
import MultiStepForm from "../../components/quoteForm/MultiStepForm";
import Header from "../../components/header/Header";
import quoteHeader from "../../components/quoteForm/quoteHeader";
import { isAuthenticated } from "../../utils/authHelper";


function QuoteForm() {
    return (
        <div className="Home">
            <Header isAuthenticated={isAuthenticated()} />
            <quoteHeader/>
            <MultiStepForm/>
        </div>
    );   
}

export default QuoteForm;