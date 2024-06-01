import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Banana', label: 'Banana' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Mango', label: 'Mango' },
  { value: 'Pineapple', label: 'Pineapple' }
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    if (selected.length <= 3) {
      setSelectedOptions(selected);
    }
  };

  return (
    <div>
      <label>Select Items (Up to 3):</label><br />
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
