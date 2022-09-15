import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:3000/api/v1',
    headers: { 'Content-type': 'application/json'}
});

