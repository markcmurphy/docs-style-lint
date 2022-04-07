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

// TODO: return results as table https://react-table.tanstack.com/docs/examples/basic

function ListItem({ value }) {
  console.log("🚀 ~ file: SignupForm.jsx ~ line 38 ~ ListItem ~ value", value)
  return (
    <li>
      <b>Line:</b> {value.name} <b>Message:</b> {value.message} | {value.source}
    </li>
  );
}

function NumberList({errors}) {
  console.log("🚀 ~ file: SignupForm.jsx ~ line 48 ~ NumberList ~ errors", errors)
  // const errorMsgs = errors[0];

  // const errMsgs = errorMsgs?.messages;
  const listItems = Array.isArray(errors) ? errors.map((error, index) => (
    <ListItem key={index} value={error} />
  )) : null;

  // return (
  //   <ul>{listItems}</ul>
  // );


  if (errors !== undefined) {
    return <ul>{listItems}</ul>
  }
}


const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [formBody, setFormBody] = useState('code');
  const [code, setCode] = useState(`# The B2B Edition of BigCommercely

[bad link](https://www.github.com/wooom/remark-dead-link)

BundleB2Bly (B3) add(s) business-to-business (B2B) functionality to the BigCommerce platform, allowing businesses to easily facilitate B2B Control Panel operations on-line. B3 provides a comprehensive suite of key B2B features to improve the B2B self-service experience for BigCommerce store owners and their customers.`);

  const changeHandler = (event) => {
    setCode(event.target.value);
    setIsSelected(true);
  };

  return (
    <>
      <h1>Dev Docs Linter</h1>

      <Formik
        initialValues={{}}
        onSubmit={async (values, { setSubmitting }) => {
          async function postData(url) {
            const response = await fetch(url, {
              method: 'POST',
              body: code,
            });
            return response.json();
          }
          const result = await postData('/api/lint');
          console.log(
            '🚀 ~ file: SignupForm.jsx ~ line 89 ~ onSubmit={ ~ result',
            result
          );
          setErrors(result);
          setSubmitting(false);
        }}
      >
        <Form>
          <Editor
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
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 18,
              outline: 'solid black 1px',
            }}
          />
          {/* <MySelect label="Project" name="projectId">
            <option value="">Select a project</option>
            <option value="cHJqOjIwNjAz">API-Reference</option>
            <option value="cHJqOjI4MDIz">DevDocs</option>
          </MySelect> */}
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {/* // TODO: wait indicator */}
      <div>
        {/* {errorDisplay} */}
        <NumberList errors={errors} />
      </div>
    </>
  );
};

export { SignupForm };
