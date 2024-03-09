import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './NamePicker.css';
import { Typography } from '@mui/material';

const NamePicker: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string>('Advik Joshi');
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectName = (name: string) => {
    let displayName = name;
    
    switch (name) {
      case 'Advik Joshi':
        displayName = 'Advik Joshi';
        break;
      default:
        break;
    }

    setSelectedName(displayName);
    setDropdownVisible(false);
  };

  const closeDropdownIfClickedOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', closeDropdownIfClickedOutside);

    return () => {
      window.removeEventListener('click', closeDropdownIfClickedOutside);
    };
  }, []);

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
       <Typography className='retailer-text'>Retailer: </Typography>  <span id="selectedName">{selectedName}</span> <KeyboardArrowDownIcon />
      </div>
      {isDropdownVisible && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => selectName('Advik Joshi')}>
            Name 1
          </div>
          <div className="dropdown-item" onClick={() => selectName('Name 2')}>
            Name 2
          </div>
          <div className="dropdown-item" onClick={() => selectName('Name 3')}>
            Name 3
          </div>
        </div>
      )}
    </div>
  );
};

export default NamePicker;
