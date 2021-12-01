"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownToHtml = exports.htmlToText = exports.htmlToMarkdown = void 0;

var _turndown = _interopRequireDefault(require("turndown"));

var _html2plaintext = _interopRequireDefault(require("html2plaintext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var markdownIt = require('markdown-it')({
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: false
}); // prevent creating links for emails


markdownIt.linkify.set({
  fuzzyLink: false
});
var turndownService = new _turndown["default"]();
var markdownToHtml = markdownIt;
exports.markdownToHtml = markdownToHtml;
var htmlToMarkdown = turndownService;
exports.htmlToMarkdown = htmlToMarkdown;
var htmlToText = _html2plaintext["default"];
exports.htmlToText = htmlToText;