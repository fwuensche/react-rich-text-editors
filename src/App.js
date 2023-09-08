import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://npmtrends.com/@remirror/core-vs-@tiptap/core-vs-draft-js-vs-lexical-vs-quill-vs-slate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Top Rich Text Editors for React
        </a>
      </header>
      <img
        src="/react-rich-text-editors/images/react-rich-text-editors-downloads-over-time.png"
        alt="React rich text editors downloads over time"
        className="w-full"
      />
    </div>
  );
}

export default App;
