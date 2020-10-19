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

export function update(match, id) {
    return fetch(`${BASE_URL}/${id}/matches/${match._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(match)
    }).then(res => res.json());
}

export function deleteOne(m_id, id) {
    return fetch(`${BASE_URL}/${id}/matches/${m_id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
}