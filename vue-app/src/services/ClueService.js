import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Eli-159/Treasure_Hunt',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getClue(code) {
        return apiClient.get('/clues?code=' + code);
    }
}