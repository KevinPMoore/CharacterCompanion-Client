import config from '../config';

const DND5ESRD = {
    getAllRaces() {
        return fetch(`${config.DND5E_API_ENDPOINT}/races`, {
            headers: {},
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    getRaceByName(name) {
        return fetch(`${config.DND5E_API_ENDPOINT}/races/${name}`, {
            headers: {},
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    getAllClasses() {
        return fetch(`${config.DND5E_API_ENDPOINT}/classes`, {
            headers: {},
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
    getClassByName(name) {
        return fetch(`${config.DND5E_API_ENDPOINT}/classes/${name}`, {
            headers: {},
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },
}

export default DND5ESRD;