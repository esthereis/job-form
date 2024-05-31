import { FormError } from '../types/FormError';

const maxSize = 25;
const maxSizeByte = maxSize * 1024 * 1024;

export default function fileError(data: Record<string, File>) {
  const errors: FormError = {};

  for (const [key, value] of Object.entries(data)) {
    if (!value) {
      const errorObject: FormError = { [key]: 'Element is required.' };
      Object.assign(errors, errorObject);
      break;
    }
    if (value.size > maxSizeByte) {
      const errorObject: FormError = {
        [key]: `File should be less then ${maxSize}mb`
      };
      Object.assign(errors, errorObject);
    }
  }
  return errors;
}
