import { FormWrapper } from '../FormWrapper/FormWrapper';

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProprs = AccountData & {
  updateFirlds: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFirlds,
}: AccountFormProprs) {
  return (
    <FormWrapper title='Account Creation'>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        autoFocus
        required
        value={email}
        onChange={(e) => updateFirlds({ email: e.target.value })}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        required
        value={password}
        onChange={(e) => updateFirlds({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
