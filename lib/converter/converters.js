import { markdownToHtml, htmlToMarkdown, htmlToText } from './converter-configs';

export const parseHtmlToMarkdown = (html) => {
	return htmlToMarkdown.turndown(html);
};

export const parseMarkdownToHtml = (markdown) => {
	return markdownToHtml.render(markdown);
};

export const parseHtmlToText = (html) => {
	return htmlToText(html);
};