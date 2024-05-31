import { FormData } from '../App';

import require from './require';
import pattern from './pattern';
import formValidation from './formValidation';

export default function validate({
  firstName,
  lastName,
  number,
  email,
  position,
  file
}: FormData) {
  const requiredItems = require({
    firstName,
    lastName,
    number,
    email,
    position,
    file
  });

  const patternedItems = pattern({
    number,
    email
  });

  const validatedForm = formValidation({ file });

  if (Object.keys(requiredItems).length > 0) {
    return requiredItems;
  }
  if (file) {
    return validatedForm;
  }
  if (
    Object.keys(requiredItems).length === 0 &&
    Object.keys(patternedItems).length > 0
  ) {
    return patternedItems;
  }

  return {};
}
