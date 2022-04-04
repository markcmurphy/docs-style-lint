import React, { useEffect, useState } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
import Prism from 'prismjs';
import { markdown } from 'prismjs/components/prism-markdown';
import 'prismjs/themes/prism.css';

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
//       ) : null}
//     </>
//   );
// };

function ListItem({ value }) {
  return (
    <li>
      <b>Line:</b> {value.line} <br/><b>Message:</b> {value.message}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    <ListItem key={index} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [formBody, setFormBody] = useState('code');
  const [code, setCode] = useState(`# The B2B Edition of BigCommercely

BundleB2B (B3) add(s) business-to-business (B2B) functionality to the BigCommerce platform, allowing businesses to easily facilitate B2B operations online. B3 provides a comprehensive suite of key B2B features to improve the B2B self-service experience for BigCommerce store owners and their customers.`);
  // const [codeValue, setCodeValue] = useState(code);

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <Editor
          value={code}
          // highlight={code => highlight(code, languages.jsx)}
          // highlight={(code) => highlightWithLineNumbers(code, Prism.languages.markdown, "markdown")}
          highlight={(code) =>
            Prism.highlight(code, Prism.languages.markdown, 'markdown')
              .split('\n')
              .map(
                (line, i) =>
                  `<span class='editorLineNumber'>${i + 1}</span>${line}`
              )
              .join('\n')
          }
          // highlight={code => Prism.highlight(code, Prism.languages.markdown, 'markdown')}
          // padding={10}
          onValueChange={(code) => setCode(code)}
          // onValueChange={code => changeHandler(code)}
          textareaId="codeArea"
          className="editor language-markdown"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 18,
            outline: 'solid black 1px',
          }}
          {...field}
          {...props}
        />
        {/* <Editor
          value={code}
          // highlight={code => highlight(code, languages.jsx)}
          // highlight={(formBody) => hightlightWithLineNumbers(formBody, languages.markdown, "markdown")}
          highlight={(code) => highlight(code, languages.markdown, "md")}
          // highlight={(code) => console.log(code)}
          padding={10}
          onValueChange={(code) => setCode(code)}
          // textareaId="codeArea"
          // className="text-input"
          // style={{
          //   fontFamily: '"Fira code", "Fira Mono", monospace',
          //   fontSize: 18,
          //   outline: 0,
          // }}

        /> */}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  //  const onKeyDownFunc = (e) => {
  //    console.log("🚀 ~ file: SignupForm.jsx ~ line 100 ~ onKeyDownFunc ~ e", e)
  //    let { keyCode } = e;
  //   //  let { value, selectionStart, selectionEnd } = codeEditor;

  //    if (keyCode === 9) {
  //      // TAB = 9
  //      e.preventDefault();
  //      setFormBody(e.target.value.slice(0, e.target.selectionStart) + '\t' + e.target.value.slice(e.target.selectionEnd));
  //      e.target.setSelectionRange(e.target.selectionStart + 2, e.target.selectionStart + 2);
  //     }
  //  };

  const changeHandler = (event) => {
    console.log(
      '🚀 ~ file: SignupForm.jsx ~ line 119 ~ changeHandler ~ event',
      event
    );

    setCode(event.target.value);
    setIsSelected(true);
  };

  // const highlightWithLineNumbers = (input, language, grammar) => {
  //   Prism.highlight(input, language, grammar)
  //     .split('\n')
  //     .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
  //     .join('\n');
  //   }

  // console.log(code)
  return (
    <>
      <h1>Linter!</h1>

      <Formik
        initialValues={
          {
            // file: null,
            // markdown: 'dfg'
          }
        }
        onSubmit={async (values, { setSubmitting }) => {
          async function postData(url) {
            // let formData = new FormData();
            // formData.append('file', formBody);
            const response = await fetch(url, {
              method: 'POST',
              body: code,
            });
            return response.json();
          }
          const result = await postData('/api/lint');
          setErrors(result);
          setSubmitting(false);
        }}
      >
        <Form>
          {/* <MyTextInput
            // label="branch"
            name="markdown"
            type="text"
            onChange={changeHandler}
            // className="text-input"
          /> */}

          <Editor
            value={code}
            // highlight={code => highlight(code, languages.jsx)}
            // highlight={(code) => highlightWithLineNumbers(code, Prism.languages.markdown, "markdown")}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.markdown, 'markdown')
                .split('\n')
                .map(
                  (line, i) =>
                    `<span class='editorLineNumber'>${i + 1}</span>${line}`
                )
                .join('\n')
            }
            // highlight={code => Prism.highlight(code, Prism.languages.markdown, 'markdown')}
            // padding={10}
            onValueChange={(code) => setCode(code)}
            // onValueChange={code => changeHandler(code)}
            textareaId="codeArea"
            className="editor language-markdown"
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 18,
              outline: 'solid black 1px',
            }}
            // {...field}
            // {...props}
          />
          {/* <Editor
            value={formBody}
            highlight={(formBody) =>
              hightlightWithLineNumbers(formBody, languages.js)
            }
            padding={10}
            // textareaId="codeArea"
            // className="text-input"
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 18,
              outline: 0,
            }}
            onChange={changeHandler}
            // id="codeEditor"
            // wrap="off"
            // className="text-input"
            // onKeyDown={(e) => {
            //   onKeyDownFunc(e);
            // }}
            // onScroll={(e) => {
            //   setLineCountScrollTop(e.target.scrollTop);
            //   setLineCountScrollLeft(e.target.scrollLeft);
            // }}
            // {...field}
            // {...props}
          /> */}
          {/* <input type="file" name="file" onChange={changeHandler} /> */}
          {/* {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )} */}

          {/* <MySelect label="Project" name="projectId">
            <option value="">Select a project</option>
            <option value="cHJqOjIwNjAz">API-Reference</option>
            <option value="cHJqOjI4MDIz">DevDocs</option>
          </MySelect> */}
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* <div style={{ display: errors.length ? 'block' : 'none' }}> */}
      <div>
        {/* style={{ display: showInfo ? 'block' : 'none' }} */}
        {errorDisplay}
        <NumberList numbers={errors} />
      </div>
    </>
  );
};

export { SignupForm };
