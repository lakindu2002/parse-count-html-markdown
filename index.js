const {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
} = require('./lib/converter/converters.js');
const {
	countWordsInHtml,
	countWordsInMarkdown,
} = require('./lib/counter/counters.js');

module.exports.parser = {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
};

module.exports.counter = {
	countWordsInHtml,
	countWordsInMarkdown,
};