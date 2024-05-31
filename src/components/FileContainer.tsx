type Props = {
  classTitle: string;
  fileOnChange: (file: FileList | null) => void;
};

export default function FileContainer({ classTitle, fileOnChange }: Props) {
  return (
    <div className={classTitle}>
      <label htmlFor='uploadFileContainer'>Upload Resume:</label>
      <input
        type='file'
        id='uploadFileContainer'
        accept='application/pdf'
        onChange={e => {
          fileOnChange(e.target.files);
        }}
      />
    </div>
  );
}
