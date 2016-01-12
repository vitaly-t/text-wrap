'use strict';

////////////////////////////////////////////////
// Removes empty symbols from the beginning and
// the end of the text, and returns the result.
function trim(text) {
    if (text.length) {
        var i = 0, k = text.length - 1;
        while (isGap(text[i]) && ++i < text.length);
        while (isGap(text[k]) && --k > i);
        if (i <= k) {
            return text.substr(i, k - i + 1);
        }
    }
    return '';
}

////////////////////////////////////
// Identifies a gap / empty symbol.
function isGap(s) {
    return s === ' ' || s === '\t' || s === '\r' || s === '\n';
}

module.exports = {
    isGap: isGap,
    trim: trim
};
