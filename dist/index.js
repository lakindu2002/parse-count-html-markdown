"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counters = exports.converters = void 0;

var _converters = require("./converter/converters");

var _counters = require("./counter/counters");

var converters = {
  htmlToMarkdown: _converters.parseHtmlToMarkdown,
  htmlToText: _converters.parseHtmlToText,
  markdownToHtml: _converters.parseMarkdownToHtml
};
exports.converters = converters;
var counters = {
  countWordsInHtml: _counters.countWordsInHtml,
  countWordsInMarkdown: _counters.countWordsInMarkdown
};
exports.counters = counters;