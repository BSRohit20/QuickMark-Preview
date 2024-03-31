import React, { useState } from 'react';
import marked from 'marked';
import './App.css'; 

function App() {
  const [markdown, setMarkdown] = useState('');


  const insertText = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  const addBoldText = () => insertText('**bold text**');
  const addItalicText = () => insertText('*italic text*');
  const addHeadingText = () => insertText('\n# Heading\n');
  const addLink = () => insertText('[title](https://)');
  const addCodeBlock = () => insertText('```\ncode block\n```');

  return (
    <div className="App">
      <div className="toolbar">
        <button onClick={addBoldText}>Bold</button>
        <button onClick={addItalicText}>Italic</button>
        <button onClick={addHeadingText}>Heading</button>
        <button onClick={addLink}>Link</button>
        <button onClick={addCodeBlock}>Code Block</button>
      </div>
      <div className="editor-preview-container">
        <textarea
          className="markdown-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter Markdown text"
        />
        <div
          className="markdown-preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;

