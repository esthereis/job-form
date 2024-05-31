type FormValue = Record<string, string>;
type PatternObjectType = Record<string, string>;

export default function pattern(datas: FormValue) {
  const patternErrors: PatternObjectType = {};

  for (const [key, value] of Object.entries(datas)) {
    if (key === 'number') {
      const regEx = new RegExp(/^\d{10}$/);

      if (regEx.test(value) === false) {
        const errorObject: PatternObjectType = {
          [key]: 'Please enter a valid phone number.'
        };
        Object.assign(patternErrors, errorObject);
      }
    }
    if (key === 'email') {
      const regEx = new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/);

      if (regEx.test(value) === false) {
        const errorObject: PatternObjectType = {
          [key]: 'Please enter a valid email.'
        };
        Object.assign(patternErrors, errorObject);
      }
    }
  }
  return patternErrors;
}
