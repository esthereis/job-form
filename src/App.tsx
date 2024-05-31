import './App.css';
import Field from './components/Field';
import CitySelect from './components/CitySelect';
import TextArea from './components/TextArea';
import FileField from './components/FileField';

import validation from './validation/validate';
import { useState } from 'react';

export type FormData = {
  firstName: string;
  lastName: string;
  cityAddress: string;
  number: string;
  email: string;
  position: string;
  ingressDate: string;
  coverLetter: string;
  resume?: string | File;
};

type FormErrors = {
  [key in keyof FormData]?: string | undefined;
};

export default function App() {
  const [inputData, setInputData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cityAddress: '',
    number: '',
    email: '',
    position: '',
    ingressDate: '',
    coverLetter: '',
    resume: undefined
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
        <Field
          label='First Name:'
          data='firstName'
          onChange={firstName => setInputData({ ...inputData, firstName })}
          errorMessage={validatedErrors.firstName}
          value={inputData?.firstName}
        />

        <Field
          label='Last Name:'
          data='lastName'
          onChange={lastName => setInputData({ ...inputData, lastName })}
          errorMessage={validatedErrors.lastName}
          value={inputData?.lastName}
        />

        <CitySelect />

        <Field
          label='Number:'
          data='number'
          placeholder='(00) 0000-0000'
          onChange={number => setInputData({ ...inputData, number })}
          errorMessage={validatedErrors.number}
          value={inputData?.number}
        />
        <Field
          label='E-mail:'
          data='email'
          placeholder='ex: myname@example.com'
          onChange={email => setInputData({ ...inputData, email })}
          errorMessage={validatedErrors.email}
          value={inputData?.email}
        />
        <Field
          label='Applied Position:'
          data='position'
          onChange={position => setInputData({ ...inputData, position })}
          errorMessage={validatedErrors.position}
          value={inputData?.position}
        />

        <Field
          label='Earliest Possible Start Date:'
          data='ingressDate'
          type='date'
          onChange={ingressDate => setInputData({ ...inputData, ingressDate })}
          value={inputData?.ingressDate}
        />

        <TextArea />

        <FileField
          label='Upload Resume:'
          name='resume'
          onChange={resume => setInputData({ ...inputData, resume })}
          errorMessage={validatedErrors.resume}
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
