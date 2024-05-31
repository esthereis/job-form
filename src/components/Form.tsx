type Props = {
  label: string;
  data: string;
  placeholder: string;
  type: string;
  classTitle: string;
  inputOnChange: (value: string) => void;
  value: string;
  errorMessage?: string;
};

export default function Form({
  placeholder,
  label,
  data,
  type,
  classTitle,
  inputOnChange,
  value,
  errorMessage
}: Props) {
  return (
    <div className={classTitle}>
      <label htmlFor={`${data}-id`}>{label}</label>
      <input
        className='inputBox'
        type={type}
        id={`${data}-id`}
        placeholder={placeholder}
        onChange={e => {
          inputOnChange(e.target.value);
        }}
        value={value}
      ></input>
      <p className='inputError'>{errorMessage}</p>
    </div>
  );
}
