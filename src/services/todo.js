import update from 'immutability-helper';

/**
 * Henter listen av huskeliste elementer.
 * @return {Array}
 */

export function getAll() {
    return [
        {
            id: 1,
            text: 'Lære seg Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Lære seg React',
            completed: false
        },
        {
            id: 3,
            text: 'Bygge en React App',
            completed: false
        },{
            id: 4,
            text: 'Sette seg inn i React hooks',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returnerer en ny liste med oppdatert data.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * Teller for å gi elementene i listen en unik ID, starter på 1
 * @type {Number}
 */

let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Legger til et nytt element i listen og returnerer den gamle listen, med ny data lagt til. (immutable)
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */

export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
