# HTML and Markdown Parser/Word Counter

A frontend/backend library to support parsing HTML to Markdown and Markdown to HTML with additional support of word counting for markdown text and HTML text.

## Installing

Using npm:
```
$ npm install html-markdown-parser-counter
```

## Importing the Library

Import the module using `CommonJS` with `require()` to obtain intellisense.

```javascript
const library = require('html-markdown-parser-counter');
```

```javascript
const { counter, parser } = library;

const { countWordsInHtml, countWordsInMarkdown } = counter;

const { parseHtmlToMarkdown, parseMarkdownToHtml, parseHtmlToText } = parser;
```

The `counter` provides functions used for providing a word count in HTML, Markdown text

The `parser` provides functions used for transforming content from HTML to Markdown and vice-versa.

## Using the Library

Using the counter: 
```javascript
console.log(countWordsInHtml('<p>Hello World</p>')); // logs '2' to the console

console.log(countWordsInMarkdown('## Hello World **!**')); // logs '3' to the console
```

Using the parser: 
```javascript
console.log(parseHtmlToMarkdown('<p>Hello World</p>')); // logs 'Hello World' to the console

console.log(parseMarkdownToHtml('## Hello World')); // logs '<h2>Hello World</h2>' to the console

console.log(parseHtmlToText('<p><b>Hello World</b></p>')); // logs 'Hello World' to the console
```