import fetch from "node-fetch";
import tokenService from './tokenService';

const BASE_URL = '/api/characters';

export function create(match, id) {
    return fetch(`${BASE_URL}/${id}/matches`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(match)
    }).then(res => res.json());
}