/* eslint-disable no-undef */
const {
	parseHtmlToMarkdown,
	parseMarkdownToHtml,
	parseHtmlToText,
	countWordsInHtml,
	countWordsInMarkdown,
} = require('./index.js');

test('Test Should Parse HTML to Markdown Successfully', ()=>{
	const html = '<p>Hello World</p>';
	const markdown = 'Hello World';
	expect(parseHtmlToMarkdown(html)).toEqual(markdown);
});

test('Test Should Parse Markdown to HTML Successfully', ()=>{
	const markdown = '**Hello**';
	const html = '<p><strong>Hello</strong></p>';
	expect(parseMarkdownToHtml(markdown.toLowerCase()).trim().toLowerCase()).toEqual(html.toLowerCase().trim());
});

test('Test Should Parse HTML to Text Successfully', ()=>{
	const html = '<p>Hello World</p>';
	const text = 'Hello World';
	expect(parseHtmlToText(html)).toEqual(text);
});

test('Test Should Count Words In HTML Successully', ()=>{
	const html = '<p>Hello World</p>';
	expect(countWordsInHtml(html)).toEqual(2);
});

test('Test Should Count Words In Markdown Successfully',()=>{
	const markdown = 'Hello World';
	expect(countWordsInMarkdown(markdown)).toEqual(2);
});