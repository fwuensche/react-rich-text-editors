# Top Rich Text Editors for React

## Methodology

We first analyzed the existing open-source alternatives.

We picked the most promising ones: Quill, Lexical (coming next: TipTap)

We tried them out by implementing the following features:

- Text formatting (bold, italic, strikethrough, underline, code)
- Variables
- Tables
- Images
- Dropdown (fill the gap from a list)
- Emoticons
- Links
- Suggestion while typing
- Switch content (e.g, male/female, informal/formal)

## Pending

General

- improve show source button to toggle code inline
- move readme to root folder so that it's rendered on github

Lexical

- Implement variables
  - next to the text editor we need to have a list of variables that can be added into the content
  - these variables are shown as a badge when editing the content
  - the variables are replaced with corresponding data when visualizing the content
