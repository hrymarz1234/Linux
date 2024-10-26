import React from 'react';
import FlexContainer from '../FlexContainer';

const ItemComponent = ({ title }) => (
  <div style={itemStyle}>{title}</div>
);

const itemStyle = {
  padding: '10px',
  background: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  textAlign: 'center',
};

const Lab3 = () => {
  const data = [
    { title: 'Element 1' },
    { title: 'Element 2' },
    { title: 'Element 3' },
    { title: 'Element 4' },
    { title: 'Element 5' },
    { title: 'Element 6' },
  ];

  return (
    <div>
      <h1>Lab 3 - Flex Container Example</h1>
      <FlexContainer element={ItemComponent} data={data} />
    </div>
  );
};

export default Lab3;