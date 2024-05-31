import { FormData } from '../App';

import require from './require';
import pattern from './pattern';
import file from './file';
import fileError from './file';

export default function validate({
  firstName,
  lastName,
  number,
  email,
  position,
  resume
}: FormData) {
  const requiredErrors = require({
    firstName,
    lastName,
    number,
    email,
    position,
    resume
  });

  const patternedErrors = pattern({
    number,
    email
  });

  const fileErrors = fileError({ resume: resume as File });

  return { ...patternedErrors, ...requiredErrors, ...fileErrors };
}
