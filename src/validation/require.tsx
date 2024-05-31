type FormValue = Record<string, string | File>;
type RequiredObjectType = Record<string, string | undefined>;

export default function require(datas: FormValue): RequiredObjectType {
  const requiredErrors: RequiredObjectType = {};

  for (const [key, value] of Object.entries(datas)) {
    if (value === '' || !value) {
      const errorObject: RequiredObjectType = { [key]: 'Element is required.' };
      Object.assign(requiredErrors, errorObject);
    }
  }
  return requiredErrors;
}
