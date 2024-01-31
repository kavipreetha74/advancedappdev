// src/components/BeneficiaryContent.js
import React, { useState } from 'react';

const BeneficiaryContent = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: 'John Doe', accountNumber: '1234567890', amountDue: 5000 },
    { id: 2, name: 'Jane Doe', accountNumber: '0987654321', amountDue: 3000 },
    // Add more beneficiaries as needed
  ]);

  const renderBeneficiaries = () => {
    return beneficiaries.map((beneficiary) => (
      <div key={beneficiary.id} className="beneficiary-card">
        <h3>{beneficiary.name}</h3>
        <p>Account Number: {beneficiary.accountNumber}</p>
        <p>Amount Due: ${beneficiary.amountDue}</p>
      </div>
    ));
  };

  return (
    <div className="beneficiary-container">
      <h1>Beneficiary Information</h1>

      <div className="beneficiary-list">
        {beneficiaries.length > 0 ? renderBeneficiaries() : <p>No beneficiaries available.</p>}
      </div>
    </div>
  );
};

export default BeneficiaryContent;
