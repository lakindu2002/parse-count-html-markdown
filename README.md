# HTML and Markdown Parser/Word Counter

A frontend/backend library to support parsing HTML to Markdown and Markdown to HTML with additional support of word counting for markdown text and HTML text.

## Installing

Using npm:
```
$ npm i parse-count-html-markdown
```

## Importing the Library

Import the module using `ES6` with `import`

```javascript
import { converters, counters } from "parse-count-html-markdown";
```

```javascript
const { htmlToMarkdown, htmlToText, markdownToHtml } = converters;
const { countWordsInHtml, countWordsInMarkdown } = counters;
```

The `counter` provides functions used for providing a word count in HTML, Markdown text

The `parser` provides functions used for transforming content from HTML to Markdown and vice-versa.

## Using the Library

```javascript
import { useState } from "react";
import { converters, counters } from "html-markdown-parser-counter";
export const Counter = () => {
  const [text, setText] = useState("");
  const { htmlToMarkdown, htmlToText, markdownToHtml } = converters;
  const { countWordsInHtml, countWordsInMarkdown } = counters;
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {htmlToMarkdown(text)}
      {htmlToText(text)}
      {markdownToHtml(text)}
      {countWordsInHtml(text)}
      {countWordsInMarkdown(text)}
    </>
  );
};
```
