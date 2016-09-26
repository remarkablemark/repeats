'use strict';

/**
 * Repeat a string n times.
 *
 * @param  {String} str   - The string.
 * @param  {Number} [n=1] - The (natural) number of times to repeat.
 * @return {String}       - The repeated string.
 */
function repeats(str, n) {
    if (typeof str !== 'string') {
        throw new TypeError(
            'First argument must be a string. Received ' + typeof str
        );
    }
    if (!str.length) return str;
    n = n > 0 ? n : 1;
    return Array(n + 1).join(str);
}

module.exports = repeats;
