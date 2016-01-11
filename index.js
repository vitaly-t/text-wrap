'use strict';

function wrap(text, options) {

    if (typeof text !== 'string') {
        throw new TypeError("Invalid text input.");
    }

    if (typeof wrap.header !== 'string') {
        throw new Error("Invalid header content.");
    }

    if (typeof wrap.footer !== 'string') {
        throw new Error("Invalid footer content.");
    }

    if (options && options.skipCheck) {
        return wrap.header + text + wrap.footer;
    } else {
        var result, th = trim(wrap.header), tf = trim(wrap.footer);
        if (th.length) {
            result = text.indexOf(th) < 0 ? wrap.header + text : text;
        } else {
            result = wrap.header + text;
        }
        if (tf.length) {
            if (text.lastIndexOf(tf) < 0) {
                result += wrap.footer;
            }
        } else {
            result += wrap.footer;
        }
        return result;
    }
}

wrap.header = '';
wrap.footer = '';

function trim(text) {
    if (text.length) {
        var i = 0, k = text.length - 1;
        while ((text[i] === ' ' || text[i] === '\t' || text[i] === '\r' || text[i] === '\n') && ++i < text.length);
        while ((text[k] === ' ' || text[k] === '\t' || text[k] === '\r' || text[k] === '\n') && --k > i);
        if (i < k) {
            return text.substr(i, k - i);
        }
    }
    return '';
}

module.exports = wrap;
