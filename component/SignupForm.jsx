import React, { useEffect, useState } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
// import styled from '@emotion/styled';
// import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
import { css } from '@emotion/react';
import Prism from 'prismjs';
import { markdown } from 'prismjs/components/prism-markdown';
// import 'prismjs/themes/prism.css';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
// import MDEditor from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';


const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);
const Markdown = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false }
);

// Styled components ....
// const StyledSelect = styled.select`
//   color: var(--blue);
// `;

// const StyledErrorMessage = styled.div`
//   font-size: 12px;
//   color: var(--red-600);
//   width: 400px;
//   margin-top: 0.25rem;
//   &:before {
//     content: '❌ ';
//     font-size: 10px;
//   }
//   @media (prefers-color-scheme: dark) {
//     color: var(--red-300);
//   }
// `;

// const StyledLabel = styled.label`
//   margin-top: 1rem;
// `;

const override = css`
  display: flex;
  margin: 3vh 0 0 3vw;
  border-color: red;
`;

// TODO: return results as table https://react-table.tanstack.com/docs/examples/basic

function ListItem({ value }) {
  console.log('🚀 ~ file: SignupForm.jsx ~ line 38 ~ ListItem ~ value', value);
  return (
    <div className="alert alert-primary" role="alert">
      <b>Line:</b> {value.name} <b>Message:</b> {value.message} | {value.source}
    </div>
  );
}

function NumberList({ errors }) {
  console.log(
    '🚀 ~ file: SignupForm.jsx ~ line 48 ~ NumberList ~ errors',
    errors
  );
  // const errorMsgs = errors[0];

  // const errMsgs = errorMsgs?.messages;
  const listItems = Array.isArray(errors)
    ? errors.map((error, index) => <ListItem key={index} value={error} />)
    : null;

  // return (
  //   <ul>{listItems}</ul>
  // );

  if (errors !== undefined) {
    return <ul>{listItems}</ul>;
  }
}

const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [formBody, setFormBody] = useState('code');
  let [loading, setLoading] = useState(false);
  let [resultsFound, setResultsFound] = useState(-1);
  const [code, setCode] = useState(`# Dev Docs Linter Sample Markdown

This is a little something we just cooked up.

## Dictionaries

How does it know what to check?

### Standard dictionary
This linter uses a standard en-US flavoured dictionarry as a base. It still struggles with context, though, as in "Kelsey Grammer has wonderful grammar".

### Custom dictionaries
We can and should use custom dictionaries!

Correct:
- MailChimp
- BigCommerce

Incorrect:
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

  const changeHandler = (event) => {
    setCode(event.target.value);
    setIsSelected(true);
  };

  return (
    <>
      {/* <h1 style={{ marginTop: '4%', marginLeft: '5%' }}>Dev Docs Linter</h1> */}
      <Formik
        initialValues={{}}
        onSubmit={async (values, { setSubmitting }) => {
          setErrors([]);
          setResultsFound(-1);
          setLoading(true);
          async function postData(url) {
            const response = await fetch(url, {
              method: 'POST',
              body: code,
            });
            return response.json();
          }
          const result = await postData('/api/lint');
          setLoading(false);
          setErrors(result);
          setResultsFound(result.length);
          setSubmitting(false);
        }}
      >
        <>
          <Form>
            {/* <div data-color-mode="light"> */}
            <div data-color-mode="dark">
            {/* <div> */}
              {/* <div className="wmde-markdown-var"> </div> */}
              <MDEditor
                value={code}
                onChange={(code) => setCode(code)}
                height={'70%'}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]]
                }}
                // className="language-markdown"
                
              />

              {/* <div style={{ paddingTop: 50 }}>
              <Markdown source={code} />
            </div> */}
              {/* <EditerMarkdown source={code} /> */}
            </div>

            {/* <Editor
            value={code}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.markdown, 'markdown')
                .split('\n')
                .map(
                  (line, i) =>
                    `<span class='editorLineNumber'>${i + 1}</span>${line}`
                )
                .join('\n')
            }
            onValueChange={(code) => setCode(code)}
            textareaId="codeArea"
            className="editor language-markdown"
            // style={{
            //   fontFamily: '"Fira code", "Fira Mono", monospace',
            //   fontSize: 14,
            //   outline: 'solid black 1px',
            //   margin: '3%',
            //   marginBottom: '0.5%',
            //   padding: '0.5%'
            // }}
          /> */}
            {/* <MySelect label="Project" name="projectId">
            <option value="">Select a project</option>
            <option value="cHJqOjIwNjAz">API-Reference</option>
            <option value="cHJqOjI4MDIz">DevDocs</option>
          </MySelect> */}
            <br></br>
            <button
              style={{ marginLeft: '3%', marginBottom: '3%' }}
              type="submit"
            >
              Submit
            </button>
          </Form>
          <div>
            {/* {errorDisplay} */}
            {loading ? (
              <div className="sweet-loading">
                <ClimbingBoxLoader
                  loading={loading}
                  color={'maroon'}
                  // loading={true}
                  css={override}
                  size={35}
                />
              </div>
            ) : null}
            {resultsFound == -1 ? '' : 'Results Found: ' + resultsFound}
            <NumberList style={{ marginLeft: '3%' }} errors={errors} />
          </div>
        </>
      </Formik>
    </>
  );
};

export { SignupForm };
