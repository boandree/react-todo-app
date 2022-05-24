import React from 'react';

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     Objektet
 * @param  {Array}             Array av utvalgte attributter.
 * @return {Object}            Nytt objekt med de utvalgte attributtene.
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wrapper react children elementer med props.
 */
export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * Sjekker om string inkluderer substringen
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}
