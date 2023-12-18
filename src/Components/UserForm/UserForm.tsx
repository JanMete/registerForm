import { FormWrapper } from '../FormWrapper/FormWrapper';

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProprs = UserData & {
  updateFirlds: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFirlds,
}: UserFormProprs) {
  return (
    <FormWrapper title='User Details'>
      <label htmlFor='firstName'>First Name</label>
      <input
        type='text'
        id='firstName'
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFirlds({ firstName: e.target.value })}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        type='text'
        id='lastName'
        value={lastName}
        required
        onChange={(e) => updateFirlds({ lastName: e.target.value })}
      />
      <label htmlFor='age'>Age</label>
      <input
        type='number'
        id='age'
        value={age}
        required
        min={1}
        onChange={(e) => updateFirlds({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
