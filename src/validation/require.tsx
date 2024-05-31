import { FormError } from '../types/FormError';

type FormValue = Record<string, string | File | undefined>;

export default function require(data: FormValue): FormError {
  const requiredErrors: FormError = {};

  for (const [key, value] of Object.entries(data)) {
    if (value === '' || !value) {
      const errorObject: FormError = { [key]: 'Element is required.' };
      Object.assign(requiredErrors, errorObject);
    }
  }
  return requiredErrors;
}
