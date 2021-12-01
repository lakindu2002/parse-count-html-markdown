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

import TurndownService from 'turndown';
const turndownService = new TurndownService();

import convert from 'html2plaintext';

export const markdownToHtml = markdownIt;
export const htmlToMarkdown = turndownService;
export const htmlToText = convert;
