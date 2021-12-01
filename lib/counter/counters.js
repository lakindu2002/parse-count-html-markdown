import wordcounter from 'wordcount';
import * as converters from '../converter/converters.js';
const {
	parseHtmlToText, parseMarkdownToHtml,
} = converters;

const countWordsInHtml = (html) => {
	const text = parseHtmlToText(html);
	return wordcounter(text);
};

const countWordsInMarkdown = (markdown) => {
	const html = parseMarkdownToHtml(markdown);
	const text = parseHtmlToText(html);
	return wordcounter(text);
};

export default {
	countWordsInHtml,
	countWordsInMarkdown,
};
