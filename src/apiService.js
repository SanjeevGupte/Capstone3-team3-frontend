import axios from 'axios';

class CustomAPIService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
    }

    findAgent(state) {
        return this.client.get(`${this.url}/api/agents`, state);
    }
}

export default CustomAPIService;