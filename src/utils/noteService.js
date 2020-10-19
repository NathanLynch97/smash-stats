import fetch from "node-fetch";
import tokenService from './tokenService';

const BASE_URL = '/api/characters';

export function create(note, id) {
    return fetch(`${BASE_URL}/${id}/notes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(note)
    }).then(res => res.json());
}

export function deleteOne(n_id, id) {
    return fetch(`${BASE_URL}/${id}/notes/${n_id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
}