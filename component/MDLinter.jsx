import React, { useEffect, useState, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { aura } from '@uiw/codemirror-theme-aura';
import { linter, lintGutter } from "@codemirror/lint"
import { EditorView } from "@codemirror/view";
import { EditorState } from '@codemirror/state';
// import { basicSetup } from '@codemirror/basic-setup';

function CodeEditor() {
  const editorRef = useRef();

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorView({
        state: EditorState.create({
          doc: "Hello, world!",
          extensions: [basicSetup]
        }),
        parent: document.getElementById("editor")
      });
    }
    return () => {
      // Destroy the editor instance when the component unmounts
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div id="editor" />;
}

// Dynamic imports
const Markdown = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), { ssr: false });

// Custom hook to fetch data
const useFetch = (url, body) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const postData = async () => {
      const response = await fetch(url, { method: 'POST', body });
      const result = await response.json();
      setData(result);
    };
    postData();
  }, [url, body]);

  return data;
};

const MDLinter = () => {
  const [code, setCode] = useState(`# Dev Docs Linter Sample Markdown

This is a little something we just cooked up.

## Dictionaries

How does it know what to check ?

### Standard dictionary
This linter uses a standard en - US flavoured dictionarry as a base.It still struggles with context, though, as in "Kelsey Grammer has wonderful grammar".

### Custom dictionaries
We can and should use custom dictionaries!

#### Correct:
  - MailChimp
  - BigCommerce

#### Incorrect:
  - mailchimp
  - bigcommerce

### Other modules

List modules here:
1.
2.
3.

#### Some tests
- Sorry, I got to excited on line 5.
- Oh man, we also shouldn't have used first-person language. 
- Using "man" could be considered insensitive, too. 
- Oops, that was passive voice.
- [bad link](https://www.github.com/wooom/remark-dead-link)
`);
  const [loading, setLoading] = useState(false);
  // const errors = useFetch('/api/lint', code);
  // console.log("🚀 ~ file: MDLinter.jsx:94 ~ MDLinter ~ errors:", errors)

  // Optimized list generation
  // const listItems = useMemo(() => Array.isArray(errors) ? errors.map((error) => `| ${error.name} | ${error.message} | ${error.source} |`) : [], [errors]);
  // const listItems = Array.isArray(errors) ? errors : []



  let diagnostics = [];

  const MDLinter = linter(async (view) => {
    const errors = async (url, body) => {
      const response = await fetch(url, { method: 'POST', body });
      const result = await response.json();
      return result;
    };


    const errorsArr = await errors('/api/lint', view.state.doc);
    console.log("🚀 ~ file: MDLinter.jsx:113 ~ MDLinter ~ errorsArr:", errorsArr)

    if (Array.isArray(errorsArr)) {
      errorsArr.map(result => {
        diagnostics.push({
          from: result.position.start.offset,
          message: result.message,
          to: result.position.end.offset,
          severity: result.fatal ? "error" : "warning",
        });
      });
    }
    return diagnostics;
  });

  return (
    <>
      <>
        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
        <div data-color-mode="dark">
          {diagnostics ?
            <CodeMirror
              // value={code}
              // onChange={(code) => setCode(code)}
              theme={aura}
              // lineWrapping={true}
              // lint={true}
              extensions={[lintGutter(), MDLinter,
              // EditorView.lineWrapping, 
              markdown({ base: markdownLanguage, codeLanguages: languages })]}
            />
            : null}

        </div>
      </>

    </>
  );
};


export default MDLinter;
