'use strict';

function TextWrap(txt, opt) {

    if (!(this instanceof TextWrap)) {
        return twGlobal.wrap(txt, opt);
    }

    var header = '', footer = '';

    this.wrap = function (text, options) {

        if (typeof text !== 'string') {
            throw new TypeError("Invalid text input.");
        }

        var skip = options && options.skipCheck,
            unique = options && options.unique;

        if (skip) {
            return header + text + footer;
        }

        var result, th = trim(header), tf = trim(footer);

        if (th.length) {
            var headerIdx = text.indexOf(th);
            if (headerIdx < 0) {
                result = header + text;
            } else {
                if (unique) {
                    result = text;
                } else {
                    while (--headerIdx >= 0 && isGap(text[headerIdx]));
                    result = headerIdx < 0 ? text : header + text;
                }
            }
        } else {
            result = header + text;
        }

        if (tf.length) {
            var footerIdx = text.lastIndexOf(tf);
            if (footerIdx < 0) {
                result += footer;
            } else {
                if (!unique) {
                    footerIdx += tf.length;
                    while (footerIdx < text.length && isGap(text[footerIdx++]));
                    if (footerIdx < text.length) {
                        result += footer;
                    }
                }
            }
        } else {
            result += footer;
        }

        return result;
    };

    Object.defineProperty(this, 'header', {
        get: function () {
            return header;
        },
        set: function (text) {
            if (typeof text !== 'string') {
                throw new Error("Invalid header content.");
            }
            header = text;
        }
    });

    Object.defineProperty(this, 'footer', {
        get: function () {
            return footer;
        },
        set: function (text) {
            if (typeof text !== 'string') {
                throw new Error("Invalid footer content.");
            }
            footer = text;
        }
    });

    this.clear = function () {
        header = '';
        footer = '';
    };
}

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

function isGap(s) {
    return s === ' ' || s === '\t' || s === '\r' || s === '\n';
}

var twGlobal = new TextWrap();

TextWrap.clear = function () {
    twGlobal.clear();
};

Object.defineProperty(TextWrap, 'header', {
    get: function () {
        return twGlobal.header;
    },
    set: function (text) {
        twGlobal.header = text;
    }
});

Object.defineProperty(TextWrap, 'footer', {
    get: function () {
        return twGlobal.footer;
    },
    set: function (text) {
        twGlobal.footer = text;
    }
});

module.exports = TextWrap;
