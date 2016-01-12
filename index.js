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
        // The header is added, if it is either not found,
        // or when there are non-empty symbols before it;
        var result, th = trim(wrap.header), tf = trim(wrap.footer);
        if (th.length) {
            var headerIdx = text.indexOf(th);
            if (headerIdx < 0) {
                result = wrap.header + text;
            } else {
                while (--headerIdx >= 0 && isGap(text[headerIdx]));
                result = headerIdx < 0 ? text : wrap.header + text;
            }
        } else {
            result = wrap.header + text;
        }
        // The footer is added, if it is either not found,
        // or when there are non-empty symbols following it;
        if (tf.length) {
            var footerIdx = text.lastIndexOf(tf);
            if (footerIdx < 0) {
                result += wrap.footer;
            } else {
                footerIdx += tf.length;
                while (isGap(text[footerIdx]) && ++footerIdx < text.length);
                if (footerIdx === text.length) {
                    result += wrap.footer;
                }
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
        while (isGap(text[i]) && ++i < text.length);
        while (isGap(text[k]) && --k > i);
        if (i < k) {
            return text.substr(i, k - i);
        }
    }
    return '';
}

function isGap(s) {
    return s === ' ' || s === '\t' || s === '\r' || s === '\n';
}

module.exports = wrap;
