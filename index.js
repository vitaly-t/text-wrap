'use strict';

module.exports = function () {
    throw new Error("Not Implemented!");
};

/*
* API:
*
* var fwrap = require();
* fwrap.addHeader(file, header);
* // file - text=> file name, stream, buffer;
* // header -
*
* fwrap.header(h).add();
*
* NO. You do not want to read header + footer 1000 times, only once!
* SO...
*
* fwrap.header = "some header";
* fwrap.footer = "some footer";
*
* And then:
*
* fwrap(text), where file is either a file name or stream ir Buffer;
*
* then it becomes a text-wrap;
* */
