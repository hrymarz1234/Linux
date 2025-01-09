//import React from 'react';

const PersonProfile = ({ person }) => {
  return (
    <div className="person-card">
      <h5>Name: {person.name}</h5>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
};

export default PersonProfile;

