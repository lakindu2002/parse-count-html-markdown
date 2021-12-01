import * as converters from './lib/converter/converters';
import * as counters from './lib/counter/counters';

const {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
} = converters;
const {
	countWordsInHtml,
	countWordsInMarkdown,
} = counters;

export const parser = {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
};

export const counter = {
	countWordsInHtml,
	countWordsInMarkdown,
};