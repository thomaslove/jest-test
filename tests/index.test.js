"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('basic', () => {
    expect((0, src_1.sum)()).toBe(0);
});
test('basic again', () => {
    expect((0, src_1.sum)(1, 2)).toBe(3);
});
