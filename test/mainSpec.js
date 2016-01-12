'use strict';

var wrap = require('../');

////////////////////////
// Positive tests;
describe("Positive:", function () {

    beforeEach(function () {
        wrap.clear();
    });

    describe("with empty header and footer", function () {
        it("must return the text itself", function () {
            expect(wrap("")).toBe("");
            expect(wrap("a")).toBe("a");
            expect(wrap("abc")).toBe("abc");
        });
    });

    describe("with a header and a footer", function () {
        it("must return text wrapped up", function () {
            wrap.header = "h";
            wrap.footer = "f";
            expect(wrap("")).toBe("hf");
            expect(wrap("-")).toBe("h-f");
        });
    });

    describe("with a duplicate header", function () {
        it("must skip the header", function () {
            wrap.header = "h";
            expect(wrap("h")).toBe("h");
        });
    });

    describe("with a duplicate footer", function () {
        it("must skip the footer", function () {
            wrap.footer = "f";
            expect(wrap("f")).toBe("f");
        });
    });

});

////////////////////////
// Negative tests;
describe("Negative:", function () {

    beforeEach(function () {
        wrap.clear();
    });

    describe("passing in a non-text", function () {
        it("must throw an error", function () {
            expect(function () {
                wrap();
            }).toThrow("Invalid text input.");
        });
    });

    describe("setting a non-string header", function () {
        it("must throw an error", function () {
            expect(function () {
                wrap.header = 123;
            }).toThrow("Invalid header content.");
        });
    });

    describe("setting a non-string footer", function () {
        it("must throw an error", function () {
            expect(function () {
                wrap.footer = 123;
            }).toThrow("Invalid footer content.");
        });
    });

});
