import { useState } from "react";

interface PasswordConfirmationProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  confirmPassword?: string;
}

const PasswordConfirmation: React.FC<PasswordConfirmationProps> = ({
  label,
  value,
  onChange,
  confirmPassword,
}) => {
  //error can either be a string or null
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    //performs the function passed in as a prop (setConfirmPassword) with the new value
    onChange(newValue);

    // Real-time validation for confirmation password
    if (confirmPassword !== undefined && newValue !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(null);
    }
  };

  return (
    <div className="form-floating mb-3">
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        type="password"
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
      <label>{label}</label>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default PasswordConfirmation;
