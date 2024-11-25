import React, { useState } from 'react';
import './MultiInputForm.css';

const initialFormData = {
	billingName: '',
	description: '',
	id: '',
	otherInfo: ''
};

function typedKeys(obj) {
	return Object.keys(obj);
}

const MultiInputForm: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState(initialFormData);
  // State to store submitted data
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = () => {
	  // Handle changes in textarea inputs
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="multi-input-form">
      {typedKeys(formData).map((key) => (
        <textarea
          placeholder={key}
          onChange={handleChange}
          value=""
        />
      ))}
      <button type="submit">Submit</button>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            {JSON.stringify(data)}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default MultiInputForm;