import wordcounter from 'wordcount';
import {
	parseHtmlToText,
	parseMarkdownToHtml,
} from '../converter/converters';

export const countWordsInHtml = (html) => {
	const text = parseHtmlToText(html);
	return wordcounter(text);
};

export const countWordsInMarkdown = (markdown) => {
	const html = parseMarkdownToHtml(markdown);
	const text = parseHtmlToText(html);
	return wordcounter(text);
};