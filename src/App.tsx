import { useMultipleForm } from './utils/useMultipleForm';
import { UserForm } from './Components/UserForm/UserForm';
import { AddressForm } from './Components/AddressForm/AddressForm';
import { AccountForm } from './Components/AccountForm/AccountForm';
import { FormEvent, useState } from 'react';
import ParticlesBg from 'particles-bg';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultipleForm([
      <UserForm {...data} updateFirlds={updateFields} />,
      <AddressForm {...data} updateFirlds={updateFields} />,
      <AccountForm {...data} updateFirlds={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
  }

  return (
    <main>
      <ParticlesBg type='cobweb' bg={true} />
      <div className='container'>
        <form onSubmit={onSubmit}>
          <div className='numberContainer'>
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}

          <div className='buttonContainer'>
            {!isFirstStep && (
              <button onClick={back} type='button'>
                Back
              </button>
            )}
            <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
