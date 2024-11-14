//import React from 'react';

const RatingBar = ({ rate }) => {

    const stars=[];
    for (let i = 1; i<= 10; i++) {
        if (i <= rate) {
            stars.push(<span key={i} className="fa fa-star" style={{color: 'gold'}}></span>)
        } else {
            stars.push(<span key={i} className="fa fa-star" style={{color: 'gray'}}></span>)
        }
    }

  return (
      <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div>{stars}</div>
    </>
  );
};

export default RatingBar;
