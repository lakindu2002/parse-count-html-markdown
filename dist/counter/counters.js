"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countWordsInMarkdown = exports.countWordsInHtml = void 0;

var _wordcount = _interopRequireDefault(require("wordcount"));

var _converters = require("../converter/converters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var countWordsInHtml = function countWordsInHtml(html) {
  var text = (0, _converters.parseHtmlToText)(html);
  return (0, _wordcount["default"])(text);
};

exports.countWordsInHtml = countWordsInHtml;

var countWordsInMarkdown = function countWordsInMarkdown(markdown) {
  var html = (0, _converters.parseMarkdownToHtml)(markdown);
  var text = (0, _converters.parseHtmlToText)(html);
  return (0, _wordcount["default"])(text);
};

exports.countWordsInMarkdown = countWordsInMarkdown;