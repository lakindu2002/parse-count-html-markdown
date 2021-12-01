import converters from './converter-configs.js';
const { markdownToHtml, htmlToMarkdown, htmlToText } = converters;

const parseHtmlToMarkdown = (html) => {
	return htmlToMarkdown.turndown(html);
};

const parseMarkdownToHtml = (markdown) => {
	return markdownToHtml.render(markdown);
};

const parseHtmlToText = (html) => {
	return htmlToText(html);
};

export default {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText
};
