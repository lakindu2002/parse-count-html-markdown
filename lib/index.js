import {
	parseHtmlToMarkdown,
	parseHtmlToText,
	parseMarkdownToHtml,
} from './converter/converters';
import { countWordsInHtml, countWordsInMarkdown } from './counter/counters';

export const converters = {
	htmlToMarkdown: parseHtmlToMarkdown,
	htmlToText: parseHtmlToText,
	markdownToHtml: parseMarkdownToHtml,
};

export const counters = {
	countWordsInHtml: countWordsInHtml,
	countWordsInMarkdown: countWordsInMarkdown,
};