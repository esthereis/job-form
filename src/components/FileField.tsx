import '../App';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date' | 'file';
  accept?: string;
  onChange: (value: File | undefined) => void;
  errorMessage?: string;
};

export default function FileField({
  label,
  name,
  onChange,
  errorMessage
}: Props) {
  return (
    <div className='labelInput'>
      <label htmlFor={`${name}-id`}>{label}</label>
      <input
        className='inputBox'
        type='file'
        id={`${name}-id`}
        onChange={e => {
          onChange(e.target.files?.[0]);
        }}
        accept='application/pdf'
      ></input>
      <p className='inputError'>{errorMessage}</p>
    </div>
  );
}
