import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

function ListItem({ value }) {
  return (
    <li>
      <b>Line:</b> {value.line} <b>Message:</b> {value.message}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.messages?.map((number, index) => (
    <ListItem key={index} value={number} />
  ));
  return <ol>{listItems}</ol>;
}

const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorDisplay, setErrorDisplay] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [formBody, setFormBody] = useState('');

  const changeHandler = (event) => {
    // setSelectedFile(event.target.files[0]);
    setFormBody(event.target.value);
    setIsSelected(true);
  };

  return (
    <>
      <h1>Linter!</h1>
      <Formik
        initialValues={{
          // file: null,
          // markdown: 'dfg'
        }}
        onSubmit={async (values, { setSubmitting }) => {
          async function postData(url) {
            // let formData = new FormData();
            // formData.append('file', formBody);
            const response = await fetch(url, {
              method: 'POST',
              body: formBody,
            });
            return response.json();
          }         
          const result = await postData('/api/lint');
          setErrors(result);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            // label="branch"
            name="markdown"
            type="text"
            onChange={changeHandler}
            // placeholder="new-branch"
          />
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
        {/* //TODO: add status spinner */}
        {/* style={{ display: showInfo ? 'block' : 'none' }} */}
        {errorDisplay}
        <NumberList numbers={errors} />
      </div>
    </>
  );
};

export { SignupForm };
