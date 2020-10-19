import fetch from "node-fetch";
import tokenService from './tokenService';
import { token } from "morgan";

const BASE_URL = '/api/characters';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(character) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(character)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json())
}