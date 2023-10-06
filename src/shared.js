export const INITIAL_CONTENT = `
<p>Dear {{patient_name}} <strong><- this is a variable</strong></p>
<p>My dear patient is text of the <i>printing and typesetting</i> industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.</p>

<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<h1>Rich Text Editor Criteria</h1>
<p>Here's a list of medical history:</p>

<p>{{medical_history}}</p>

<p>(ideally, this would be in a list like below)</p>

<ul>
  <li>Extensibility</li>
  <li>Performance</li>
  <li>{{patient_name}} <strong><- this is a variable</strong></li>
  <li>Documentation</li>
  <li>Can inline <code>snippets</code> into text nodes</li>
</ul>

<p>And some sample code:</p>

<pre>const foo = "bar";
console.log(foo);</pre>

<p>And a heart emoji to finish with good vibes ❤️</p>
`
