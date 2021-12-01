const {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
} = require('./lib/converter/converters.js');
const {
	countWordsInHtml,
	countWordsInMarkdown,
} = require('./lib/counter/counters.js');

module.exports = {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
	countWordsInHtml,
	countWordsInMarkdown,
};