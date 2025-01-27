import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `
# Este es un titulo H1
## Este es un subtitulo H2
[Este es un enlace](www.google.com)
\`Este es una linea de codigo\`
\`\`\`
// Fragmento de codigo 
function codeExample(){
  return "Hola, Mundo!"
}
\`\`\`
- Este es un elemento de lista
> Esta es una cita
![Esta es una imagen]()
** Este es un texto en negrilla **
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="App">
      <h1> ♥️ Markdown Previewer ♥️ </h1>
      <div class="container">
        <textArea id="editor" placeholder="Escribe tu markdown aquí... 🎀 " value={markdown} onChange={handleChange} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      </div>
    </div>
  )
}

export default App;