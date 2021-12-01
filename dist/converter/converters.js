"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMarkdownToHtml = exports.parseHtmlToText = exports.parseHtmlToMarkdown = void 0;

var _converterConfigs = require("./converter-configs");

var parseHtmlToMarkdown = function parseHtmlToMarkdown(html) {
  return _converterConfigs.htmlToMarkdown.turndown(html);
};

exports.parseHtmlToMarkdown = parseHtmlToMarkdown;

var parseMarkdownToHtml = function parseMarkdownToHtml(markdown) {
  return _converterConfigs.markdownToHtml.render(markdown);
};

exports.parseMarkdownToHtml = parseMarkdownToHtml;

var parseHtmlToText = function parseHtmlToText(html) {
  return (0, _converterConfigs.htmlToText)(html);
};

exports.parseHtmlToText = parseHtmlToText;