const markdownIt = require('markdown-it')({
	html: false,
	xhtmlOut: false,
	breaks: true,
	langPrefix: 'language-',
	linkify: true,
	typographer: false,
});

// prevent creating links for emails
markdownIt.linkify.set({ fuzzyLink: false });

const service = require('turndown');
const turndownService = new service();

const { convert } = require('html-to-text');

module.exports = {
	markdownToHtml: markdownIt,
	htmlToMarkdown: turndownService,
	htmlToText: convert,
};
