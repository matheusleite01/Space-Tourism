type RadioProps = {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Radio = ({ options, value, setValue, ...props }: RadioProps) => {
  return options.map((option) => (
    <input
      key={option}
      type="radio"
      value={option}
      checked={value === option}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    />
  ));
};

export default Radio;
