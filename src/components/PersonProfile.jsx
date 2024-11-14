//import React from 'react';
import RatingBar from "./RatingBar";

const PersonProfile = ({ person }) => {
  return (
    <div className="person-card" style={{border: "1px solid black", padding: "3rem"}}>
      <h6>Name: {person.name}</h6>
      <h6>Age: {person.age}</h6>
      <h6>City: {person.city}</h6>
      <h6>Raiting: {person.rating}</h6>
      <RatingBar rate={person.rating}/>
    </div>
  );
};

export default PersonProfile;

