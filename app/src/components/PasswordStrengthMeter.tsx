import zxcvbn from "zxcvbn";
import React from 'react';

interface PasswordStrengthMeterProps {
    password: string;
  }

  const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
    const strength = zxcvbn(password).score;
    const strengthText = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const getColor = () => {
      switch (strength) {
        case 0: return 'bg-danger';   // Red
        case 1: return 'bg-warning';  // Orange
        case 2: return 'bg-info';     // Blue
        case 3: return 'bg-primary';  // Light Green
        case 4: return 'bg-success';  // Green
        default: return 'bg-secondary';
      }
    };
  
    return (
      <div className="password-strength-meter">
        <div className={`progress ${getColor()}`} style={{ height: '10px' }} />
        <small className="text-muted">{strengthText[strength]}</small>
      </div>
    );
  };
  
  export default PasswordStrengthMeter;