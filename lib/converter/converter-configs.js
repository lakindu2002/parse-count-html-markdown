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

const TurndownService = require('turndown') ? require('turndown') : require('turndown').default;
const turndownService = new TurndownService();

const convert = require('html2plaintext');

module.exports = {
	markdownToHtml: markdownIt,
	htmlToMarkdown: turndownService,
	htmlToText: convert,
};
