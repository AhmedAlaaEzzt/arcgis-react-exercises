import Form from "react-bootstrap/Form";

interface IDropdownSelectorProps {
  defaultValue?: string;
  options: { value: string; label: string }[];
}

function DropdownSelector({ defaultValue, options }: IDropdownSelectorProps) {
  return (
    <div
      className="position-absolute bottom-0 start-0 mx-3 my-3"
      style={{ zIndex: 1000 }}
    >
      <Form.Select>
        {defaultValue && <option>{defaultValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default DropdownSelector;
