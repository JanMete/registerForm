import { FormWrapper } from '../FormWrapper/FormWrapper';

type AdressData = {
  street: string;
  city: string;
  zip: string;
};

type AddressFormProprs = AdressData & {
  updateFirlds: (fields: Partial<AdressData>) => void;
};

export function AddressForm({
  street,
  city,
  zip,
  updateFirlds,
}: AddressFormProprs) {
  return (
    <FormWrapper title='Address'>
      <label htmlFor='street'>Street</label>
      <input
        type='text'
        id='street'
        required
        autoFocus
        value={street}
        onChange={(e) => updateFirlds({ street: e.target.value })}
      />
      <label htmlFor='city'>City</label>
      <input
        type='text'
        id='city'
        required
        value={city}
        onChange={(e) => updateFirlds({ city: e.target.value })}
      />
      <label htmlFor='zip'>Zip</label>
      <input
        type='text'
        id='zip'
        required
        value={zip}
        onChange={(e) => updateFirlds({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
