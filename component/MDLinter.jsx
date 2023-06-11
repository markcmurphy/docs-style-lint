import React, { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { aura } from '@uiw/codemirror-theme-aura';

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
  const errors = useFetch('/api/lint', code);

  // Optimized list generation
  const listItems = useMemo(() => Array.isArray(errors) ? errors.map((error) => `| ${error.name} | ${error.message} | ${error.source} |`) : [], [errors]);

  return (
    <>
      <div data-color-mode="dark">
        <CodeMirror value={code}
          onChange={(code) => setCode(code)}
          theme={aura}
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />;

      </div>

      <Markdown source={
        `        
|Name|Message|Source|
|---|---|---|
${listItems.join('\n')}`
      } />
    </>
  );
};

export default MDLinter;
