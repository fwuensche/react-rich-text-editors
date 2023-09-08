function App() {
  return (
    <div className="container">
      <h1>Top Rich Text Editors for React</h1>

      <figure>
        <img
          src="/react-rich-text-editors/images/react-rich-text-editors-downloads-over-time.png"
          alt="React rich text editors downloads over time"
          className="w-full"
        />
        <figcaption>
          Source:{" "}
          <a href="https://npmtrends.com/@remirror/core-vs-@tiptap/core-vs-draft-js-vs-lexical-vs-quill-vs-slate">
            https://npmtrends.com/@remirror/core-vs-@tiptap/core-vs-draft-js-vs-lexical-vs-quill-vs-slate
          </a>
        </figcaption>
      </figure>

      <h2>Methodology</h2>
      <p>
        We'll start by designing the desired interface for our base component.
      </p>
      <p>We'll analyze the open-source alternatives available in the market.</p>
      <p>
        We'll pick the most promising ones and try them out, i.e, implement a
        POC with:
      </p>
      <ul>
        <li>All the basic use cases currently covered by Quill</li>
        <li>+ variables</li>
        <li>+ tables</li>
        <li>+ image upload</li>
        <li>+ tagging other users</li>
      </ul>
    </div>
  );
}

export default App;
