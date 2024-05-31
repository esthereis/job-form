import './App.css';
import Form from './components/Form';
import CitySelect from './components/CitySelect';
import TextArea from './components/TextArea';
import FileContainer from './components/FileContainer';

import validation from './validation/validate';
import { useState } from 'react';

export type FormData = {
  firstName: string;
  lastName: string;
  cityAdress: string;
  number: string;
  email: string;
  position: string;
  ingressDate: string;
  coverLetter: string;
  file?: string | File;
};

type FormErrors = {
  [key in keyof FormData]?: string | undefined;
};

export default function App() {
  const [inputData, setInputData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cityAdress: '',
    number: '',
    email: '',
    position: '',
    ingressDate: '',
    coverLetter: '',
    file: undefined
  });

  const [validatedErrors, setValidatedErrors] = useState<FormErrors>({});

  return (
    <div className='main'>
      <h1>Submit Your Curriculum</h1>
      <p>
        Want to make part of the team? Submit your personal data and we will
        contact you soon.
      </p>

      <form className='formContainer'>
        <Form
          classTitle='labelInput'
          label='First Name:'
          data='firstName'
          type='text'
          placeholder=''
          inputOnChange={firstName => setInputData({ ...inputData, firstName })}
          errorMessage={validatedErrors.firstName}
          value={inputData?.firstName}
        />

        <Form
          classTitle='labelInput'
          label='Last Name:'
          data='lastName'
          type='text'
          placeholder=''
          inputOnChange={lastName => setInputData({ ...inputData, lastName })}
          errorMessage={validatedErrors.lastName}
          value={inputData?.lastName}
        />

        <CitySelect />

        <Form
          classTitle='labelInput'
          label='Number:'
          data='number'
          type='text'
          placeholder='(00) 0000-0000'
          inputOnChange={number => setInputData({ ...inputData, number })}
          errorMessage={validatedErrors.number}
          value={inputData?.number}
        />
        <Form
          classTitle='labelInput'
          label='E-mail:'
          data='email'
          type='text'
          placeholder='ex: myname@example.com'
          inputOnChange={email => setInputData({ ...inputData, email })}
          errorMessage={validatedErrors.email}
          value={inputData?.email}
        />
        <Form
          classTitle='labelInput'
          label='Applied Position:'
          data='position'
          type='text'
          placeholder=''
          inputOnChange={position => setInputData({ ...inputData, position })}
          errorMessage={validatedErrors.position}
          value={inputData?.position}
        />
        <Form
          classTitle='labelInput'
          label='Earliest Possible Start Date:'
          data='ingressDate'
          type='date'
          placeholder=''
          inputOnChange={ingressDate =>
            setInputData({ ...inputData, ingressDate })
          }
          value={inputData?.ingressDate}
        />

        <TextArea />
        <FileContainer
          classTitle='labelInput'
          fileOnChange={files => {
            setInputData(inputData => ({ ...inputData, files }));
            console.log(inputData);
          }}
        />
      </form>
      <button
        onClick={() => {
          const errors = validation(inputData);
          setValidatedErrors(errors);
        }}
        className='sendButton'
      >
        Send
      </button>
    </div>
  );
}
