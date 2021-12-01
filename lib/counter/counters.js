const wordcounter = require('wordcount');
const {
	parseHtmlToText,
	parseMarkdownToHtml,
} = require('../converter/converters.js');

const countWordsInHtml = (html) => {
	const text = parseHtmlToText(html);
	return wordcounter(text);
};

const countWordsInMarkdown = (markdown) => {
	const html = parseMarkdownToHtml(markdown);
	const text = parseHtmlToText(html);
	return wordcounter(text);
};

module.exports = {
	countWordsInHtml,
	countWordsInMarkdown,
};
