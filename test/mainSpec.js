'use strict';

var TextWrap = require('../');
var tw = new TextWrap();

////////////////////////
// Positive tests;
describe("Positive:", function () {

    beforeEach(function () {
        tw.clear();
    });

    describe("with empty header and footer", function () {
        it("must return the text itself", function () {
            expect(tw.wrap("")).toBe("");
            expect(tw.wrap("a")).toBe("a");
            expect(tw.wrap("abc")).toBe("abc");
        });
    });

    describe("with a header and a footer", function () {
        it("must return text wrapped up", function () {
            tw.header = "h";
            tw.footer = "f";
            expect(tw.wrap("")).toBe("hf");
            expect(tw.wrap("-")).toBe("h-f");
        });
    });

    describe("with a duplicate header", function () {
        it("must skip the header", function () {
            tw.header = "h";
            expect(tw.wrap("h")).toBe("h");
        });
    });

    describe("with a duplicate footer", function () {
        it("must skip the footer", function () {
            tw.footer = "f";
            expect(tw.wrap("f")).toBe("f");
        });
    });

});

////////////////////////
// Negative tests;
describe("Negative:", function () {

    beforeEach(function () {
        tw.clear();
    });

    describe("passing in a non-text", function () {
        it("must throw an error", function () {
            expect(function () {
                tw.wrap();
            }).toThrow("Invalid text input.");
        });
    });

    describe("setting a non-string header", function () {
        it("must throw an error", function () {
            expect(function () {
                tw.header = 123;
            }).toThrow("Invalid header content.");
        });
    });

    describe("setting a non-string footer", function () {
        it("must throw an error", function () {
            expect(function () {
                tw.footer = 123;
            }).toThrow("Invalid footer content.");
        });
    });

});
