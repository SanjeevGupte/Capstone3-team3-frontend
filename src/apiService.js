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

    createQuote() {
        console.log ("Creating Quote..")
        return this.client.post(`${this.url}/api/quotes/`);
    }
}

export default CustomAPIService;