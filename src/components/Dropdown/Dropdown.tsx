import React, { useState, useRef, useEffect } from 'react';
import { DropdownOption } from '../../types/types';
import './Dropdown.scss';

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  onSelect: (option: string | null) => void;
  icon: React.ReactNode;
}

const Dropdown = ({ label, options, onSelect, icon }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string | null) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdownButton"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label} {icon}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <button
              key={option.value || 'all'}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;