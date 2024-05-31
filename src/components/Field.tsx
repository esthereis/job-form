import '../App';

type Props = {
  label: string;
  data: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date';
  onChange: (value: string) => void;
  value: string;
  errorMessage?: string;
};

export default function Field({
  placeholder,
  label,
  data,
  type,
  onChange,
  value,
  errorMessage
}: Props) {
  return (
    <div className='labelInput'>
      <label htmlFor={`${data}-id`}>{label}</label>
      <input
        className='inputBox'
        type={type}
        id={`${data}-id`}
        placeholder={placeholder}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
      ></input>
      <p className='inputError'>{errorMessage}</p>
    </div>
  );
}
