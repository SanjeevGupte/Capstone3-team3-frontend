import axios from 'axios';

class CustomAPIService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
    }

    findAgent(state) {
        console.log ("State :" + state)
        return this.client.get(`${this.url}/api/agents/${state}`);
    }

    GetQuote(email) {
        console.log ("Email :" + email)
        return this.client.get(`${this.url}/api/quotes/${email}`);
    }

    createQuote(quote) {
        console.log ("Creating Quote API Service")
        return this.client.post(`${this.url}/api/quotes`, quote);
    }
}

export default CustomAPIService;